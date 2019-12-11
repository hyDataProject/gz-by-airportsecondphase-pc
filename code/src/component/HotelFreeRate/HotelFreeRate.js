import './HotelFreeRate.scss';
import { TitleCom } from "com/index";
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
        this.myChart.clear();
        let option = {
            grid:{
                left: 0,
                right: 0,
                top: '15%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['60%及以上', '40-60%', '30-40%', '20-30%', '10-30%', '10%以下'],
                axisLabel: {
                    color: "#709dbc",
                    fontFamily: "lcd",
                    fontSize: 12,
                    margin: 4,
                    interval:0
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        // type: 'dashed',
                        color: '#727589'
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: "#3e9abd",
                    fontFamily: "lcd",
                    fontSize: 12,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#727589'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            },
            series: [{//背景
                data: [200, 200, 200, 200, 200, 200],
                type: 'bar',
                barWidth: 19,
                silent: true,
                itemStyle: {
                    // color:'rgba(18,28,51,.5)',
                    color:'rgba(0,0,0,.3)',
                    barBorderRadius:[5,5,0,0]
                }
            },{//柱图
                data: [120, 180, 150, 80, 70, 110],
                type: 'bar',
                barWidth: 19,
                silent: true,
                itemStyle: {
                    barBorderRadius:[5,5,0,0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: 'rgba(24,255,111,.9)' },
                            { offset: 1, color: 'rgba(0,141,255,.2)' }
                        ]
                    ),
                },
                label: {
                    show: true,
                    color: "#3e9abd",
                    fontFamily: 'lcd',
                    position: 'top'

                },
                barGap: '-100%'
            },{//象形柱图
                data: [120, 180, 150, 80, 70, 110],
                type: 'pictorialBar',
                barWidth: 19,
                symbol: 'rect',
                symbolSize: [19,1],
                symbolRepeat: true,
                symbolMargin: 5,
                // symbolRepeatDirection: 'end',
                symbolRepeatDirection: 'end',
                symbolClip: true,
                silent: true,
                itemStyle: {
                    color: 'rgba(18,28,51,.5)',
                },
            }]
        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="HotelFreeRateCom">
                <TitleCom title="酒店实时空闲率分析" />
                <div id="HotelFreeRate"></div>
            </div>
        )
    }
}