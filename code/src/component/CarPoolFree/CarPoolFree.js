import './CarPoolFree.scss';
export default class CarPoolFree extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('CarPoolFree'))
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
            <div className="CarPoolFreeCom">
                <div>蓄车池空闲</div>
                <div id="CarPoolFree"></div>
            </div>
        )
    }
}