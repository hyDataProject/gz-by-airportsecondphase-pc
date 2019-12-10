/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerHourDistribution.scss';
export default class PassengerHourDistribution extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('PassengerHourDistribution'))
        this.draw()
    }
    componentWillReceiveProps(nextProps){

    }
    draw(){
        let option = {

        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="PassengerHourDistributionCom">
                <div>今日旅客小时分布</div>
                <div id="PassengerHourDistribution"></div>
            </div>
        )
    }
}