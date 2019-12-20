import './CurrentGateUseCountCom.scss';
import { TitleCom,CurrentGateUseCountBar,CurrentGateUseCountLine } from "com/index";
export default class CurrentGateUseCountCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            farGate: 0,
            nearGate: 0,
            xData: [],
            farNum: [],
            nearNum: [],
        }
    }
    componentDidMount(){
        this.getData(this.props.terminal);
        this.reloadId = setInterval(() => {
            this.getData(this.props.terminal);
        },globalTimer.currentGateUseCount)
    }
    componentWillReceiveProps(nextProps){
        if (this.props.terminal !== nextProps.terminal) {
            this.reloadId && clearInterval(this.reloadId);
            this.getData(nextProps.terminal);
            this.reloadId = setInterval(() => {
                this.getData(nextProps.terminal);
            }, globalTimer.currentGateUseCount)
        }
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    async getData(terminal) {
        let res1 = await axios({//当前登机口使用航班数量统计
            method: 'get',
            url: realAddress[0].url + '/pc/currentGateUseCount/'+{terminal},
        })
        let res2 = await axios({//登机口使用数量小时分布
            method: 'get',
            url: realAddress[0].url + '/pc/boardingGateHourlyCount/'+{terminal},
        })
        if(res1.data.code===0&&res2.data.code===0){
            let result1 = res1.data.result,result2 = res2.data.result;
            let xData = result2.map(item => {
                return item.hours+1+'h'
            }),
                farNum = result2.map(item => {
                    return item.farNum
                }),
                nearNum = result2.map(item => {
                    return item.nearNum
                });
            this.setState({
                farGate: result1.far,
                nearGate:result1.near,
                xData: xData,
                farNum: farNum,
                nearNum: nearNum,
            })
        }
    }
    render(){
        let {farGate,nearGate,xData,farNum,nearNum} = this.state;
        
        let farRate = ((farGate/(farGate+nearGate))*100).toFixed(2),//远机位占比
            nearRate = ((nearGate/(farGate+nearGate))*100).toFixed(2);//近机位占比
        
        let LineData = {xData,farNum,nearNum}
            return(
            <div className="CurrentGateUseCountCom">
                <TitleCom title="当前登机口使用航班数量统计" />
                <p>远机位：<span>{farGate}</span></p>
                <CurrentGateUseCountBar id={'FarBar'} farRate={farRate} />
                
                <p className="near">近机位：<span>{nearGate}</span></p>
                <CurrentGateUseCountBar id={'NearBar'} nearRate={nearRate} />
                
                <CurrentGateUseCountLine LineData={LineData} />
            </div>
        )
    }
}