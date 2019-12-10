import './FlightSecurity.scss';
export default class FlightSecurity extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('FlightSecurity'))
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
            <div className="FlightSecurityCom">
                <div id="FlightSecurity"></div>
            </div>
        )
    }
}