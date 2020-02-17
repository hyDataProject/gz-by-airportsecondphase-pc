/**
 * Created by zhangqin on 2019/12/18.
 */
import './LuggageCheckPassRate.scss';
import { TitleCom } from "com/index";
import axiosToken from "js/axiosToken";

export default class LuggageCheckPassRate extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('LuggageCheckPassRate'));
        this.getData(this.props.terminal);
        this.reloadId = setInterval(() => {
            this.getData(this.props.terminal);
        },globalTimer.lugCheckPassList)
    }
    componentWillReceiveProps(nextProps){
        if (this.props.terminal !== nextProps.terminal) {
            this.reloadId && clearInterval(this.reloadId);
            this.getData(nextProps.terminal);
            this.reloadId = setInterval(() => {
                this.getData(nextProps.terminal);
            }, globalTimer.lugCheckHourlyCount)
        }
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(terminal){// 获取数据
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/lugCheckPassList/'+terminal,
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                // y轴类目值
                let yData = result.map(item => {
                    return item.island
                }),
                //x轴value值
                fifteenData = result.map(item => {
                    return item.fifteen
                }),
                oneHourData = result.map(item => {
                    return item.oneHour
                });
                this.draw(yData,fifteenData,oneHourData);
            }
        });
    }
    draw(yData,fifteenData,oneHourData){
        let option = {
            color: ['#6affff','#09edb3'],
            legend: {
                data: ['15分钟', '一个小时'],
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12
                },
                top: 10,
                right: 0
            },
            grid: [{
                left: 30,
                right: '5%',
                bottom: 15,
                top: 40,
            },{
                left: 30,
                right: '5%',
                bottom: 15,
                top: 40,
            }],
            xAxis: [{
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontFamily: 'lcd',
                        fontSize: 12
                    },
                    formatter: (item) => {
                        return item+'%'
                    },
                    margin:2,
                    interval: 0,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#777a91'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#707f8a'
                    }
                },
                max: 100
            },{
                type: 'value',
                show: false,
                gridIndex:1,
            }],
            yAxis: [{
                type: 'category',
                data: yData,
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontSize: 12
                    },
                    interval: 0,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#777a91'
                    }
                },
            },{
                type: 'category',
                show: false,
                gridIndex:1,
            }],
            series: [
                {
                    name: '15分钟',
                    type: 'bar',
                    data: fifteenData.map(item => {
                        return {
                            value: item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(26,101,255,0)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(106,255,255,1)'
                                }]),
                                barBorderRadius: [0,5,5,0],
                            }
                        }
                    }),
                    barWidth: 7,
                },
                {
                    name: '一个小时',
                    type: 'bar',
                    data: oneHourData.map(item => {
                        return {
                            value: item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(22,64,194,0)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(94,255,180,1)'
                                }]),
                                barBorderRadius: [0,5,5,0],
                            }
                        }
                    }),
                    barWidth: 7,
                    
                },{
                    // name: '一个小时',
                    type: 'bar',
                    data: [100,100,100,100,100,100,100,100,100],
                    barWidth: 15,
                    itemStyle: {
                        color: '#47476d',
                        opacity: 0.3
                    },
                    animation: false,
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }
            ]
        };
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="LuggageCheckPassRateCom">
                <TitleCom title="行李安检通过率分析"></TitleCom>
                <p>当前行李总数：<span>20555</span></p>
                <div id="LuggageCheckPassRate"></div>
            </div>
        )
    }
}