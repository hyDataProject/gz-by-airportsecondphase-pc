/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerImportOrExport.scss';
export default class PassengerImportOrExport extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('PassengerImportOrExport'))
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
            <div className="PassengerImportOrExportCom">
                旅客进出港
                <div id="PassengerImportOrExport"></div>
            </div>
        )
    }
}