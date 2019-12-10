/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerImportOrExport.scss';
import { TitleCom } from "com/index";
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
            // color: ["blue", "#00C2F5","#DAF3FF"],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                data: ['进港', '出港'],
                itemGap: 18,
                top: 0,
                right: '5%'
            },
            grid: {
                left: '40%',
                top:'20%'
                // right: '5%',
                // bottom: '3%',
                // containLabel: true
            },
            xAxis: {
                type: 'value',
                show: false,
                min: -100,
                max: 100,
            }
            ,
            yAxis: {
                type: 'category',
                axisTick: { show: false },
                inverse: true,
                nameGap:0,
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14
                },
                axisLine: {
                    show: false
                },
                data: ['2小时内：', '未来两小时：']
            },
            series: [
                {
                    type: 'custom',
                    renderItem: this.renderItem,
                    silent: true,
                    data: [100,100]
                },
                {
                    name: '进港',
                    id: 'psg',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 11,
                    itemStyle: {
                        barBorderRadius: [10, 0, 0, 10],
                    },
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function (value) {
                            let num = null;
                            num = Math.abs(value.value);
                            return num + '%'
                        },
                        color: '#fff',
                        fontFamily: 'lcd',
                        fontSize: 12,
                        offset: [0, -2]
                    },
                    data: [-100,-100]
                },
                {
                    name: '出港',
                    id: 'cargo',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 11,
                    itemStyle: {
                        barBorderRadius: [0, 10, 10, 0],
                    },
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter: '{c}%',
                        color: '#fff',
                        fontFamily: 'lcd',
                        fontSize: 12,
                        offset: [0, -2]
                    },
                    data: [100,100]
                }
            ]
        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="PassengerImportOrExportCom">
                <TitleCom title="旅客进出港"></TitleCom>
                <div id="PassengerImportOrExport"></div>
            </div>
        )
    }
}