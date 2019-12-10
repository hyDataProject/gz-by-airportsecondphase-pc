import './HotelFreeRate.scss';
export default class HotelFreeRate extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('HotelFreeRate'))
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
            <div className="HotelFreeRateCom">
                <div>酒店实时空闲率分析</div>
                <div id="HotelFreeRate"></div>
            </div>
        )
    }
}