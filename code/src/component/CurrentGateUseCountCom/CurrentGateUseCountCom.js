import './CurrentGateUseCountCom.scss';
import { TitleCom,CurrentGateUseCountBar,CurrentGateUseCountLine } from "com/index";
export default class CurrentGateUseCountCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            farGate: 0,
            nearGate: 0
        }
    }
    componentDidMount(){
        this.getData()
    }
    componentWillReceiveProps(nextProps){

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
            // console.log(result1,result2)
            this.setState({
                farGate: result1.far,
                nearGate:result1.near
            })
        }
    }
    getData1(terminal){// 获取当前登机口使用航班数量
        axios({
            method: 'get',
            url: realAddressUrlOne + '/pc/currentGateUseCount/'+terminal,
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                // x轴类目值
                let xData = result.map(item => {
                    return item.hour
                }),
                //y轴value值
                seriesData = result.map(item => {
                    return item.amount
                });
                this.draw(xData,seriesData);
            }
        });
    }
    render(){
        let {farGate,nearGate} = this.state;
        let farRate = ((farGate/(farGate+nearGate))*100).toFixed(2),//远机位占比
            nearRate = ((nearGate/(farGate+nearGate))*100).toFixed(2);//近机位占比
        return(
            <div className="CurrentGateUseCountCom">
                <TitleCom title="当前登机口使用航班数量统计" />
                <p>远机位：<span>{farGate}</span></p>
                <CurrentGateUseCountBar id={'FarBar'} farRate={farRate} />
                <p className="near">近机位：<span>{nearGate}</span></p>
                <CurrentGateUseCountBar id={'NearBar'} nearRate={nearRate} />
                
                {/* <CurrentGateUseCountLine /> */}
            </div>
        )
    }
}