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
        // this.draw()
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData()
        },globalTimer.hotelInterval)
    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        // axios({
        //     method: 'get',
        //     url: realAddress[0].url + '/pc/hotelRoomLeisureNum',
        // }).then((res) => {
        //     if(res.data.code === 0){
                let result = {
                    "code": 0,
                    "msg": "调用成功!",
                    "result": [
                        {
                            "hotelName": "香榭丽",
                            "leisureRoomNum": 7
                        },
                        {
                            "hotelName": "铂尔曼",
                            "leisureRoomNum": 35
                        },
                        {
                            "hotelName": "城市便捷",
                            "leisureRoomNum": 35
                        },
                        {
                            "hotelName": "广州汉群",
                            "leisureRoomNum": 49
                        },
                        {
                            "hotelName": "广州飞航",
                            "leisureRoomNum": 77
                        },
                        {
                            "hotelName": "远方的家",
                            "leisureRoomNum": 86
                        },
                        {
                            "hotelName": "广州宜客",
                            "leisureRoomNum": 94
                        },
                        {
                            "hotelName": "广州名利",
                            "leisureRoomNum": 115
                        },
                        {
                            "hotelName": "广州逸云",
                            "leisureRoomNum": 131
                        },
                        {
                            "hotelName": "尚品假日",
                            "leisureRoomNum": 257
                        }
                    ]
                }
                // let result = res.data.result;
                let data = result.result;
                if (data && data.length) {
                    let xAxisData=[],seriesData=[];
                    data.forEach(ele=>{
                        xAxisData.push(ele.hotelName);
                        seriesData.push(Number(ele.leisureRoomNum));
                        this.draw(xAxisData,seriesData);

                    })
                    
                }
            }
        // });
    // }
    draw(xAxisData,seriesData){
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
                data: xAxisData,
                axisLabel: {
                    color: "#709dbc",
                    fontFamily: "lcd",
                    fontSize: 12,
                    margin: 4,
                    interval:0,
                    rotate:45
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
                data: [],
                type: 'bar',
                id: 'bgBar',
                barWidth: 19,
                silent: true,
                itemStyle: {
                    // color:'rgba(18,28,51,.5)',
                    color:'rgba(0,0,0,.3)',
                    barBorderRadius:[5,5,0,0]
                }
            },{//柱图
                data: seriesData,
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
                data: seriesData,
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
        this.myChart.setOption(option);
        //取value轴最大值
        let max = this.myChart.getModel().getComponent('yAxis', 0).axis.scale.getExtent()[1]
        let dataShadow = [];//阴影数据
        for(var i = 0; i <seriesData.length; i++){
            dataShadow.push(max)
        }
        this.myChart.setOption({
            series: [
                { // 背景阴影
                    id: 'bgBar',
                    data: dataShadow,
                }
            ]
        })
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