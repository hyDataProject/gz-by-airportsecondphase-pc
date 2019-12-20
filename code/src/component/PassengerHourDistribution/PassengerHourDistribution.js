/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerHourDistribution.scss';
import {TitleCom} from 'com/index';
export default class PassengerHourDistribution extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount() {
        this.myChart = echarts.init(document.getElementById('PassengerHourDistribution'));
        this.getData(this.props.terminal);
        this.reloadId = setInterval(() => {
            this.getData(this.props.terminal);
        }, globalTimer.psgHourlyDistribution)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.terminal !== nextProps.terminal) {
            this.reloadId && clearInterval(this.reloadId);
            this.getData(nextProps.terminal);
            this.reloadId = setInterval(() => {
                this.getData(nextProps.terminal);
            }, globalTimer.psgHourlyDistribution)
        }
    }
    componentWillUnmount() {
        clearInterval(this.reloadId);
    }
    getData(terminal) {// 获取接口数据
        axios({
            method: 'get',
            url: realAddressUrlOne + '/pc/psgHourlyDistribution/' + terminal,
        }).then(res => {
            if (res.data.code === 0) {
                let result = res.data.result,currentTime=null;
                for(var i=0;i<result.length;i++){
                    if(result[i].outActual!==0){
                        currentTime=i//获取实际与预测交叉时间
                    }
                }
                let xData = result.map(item => {
                    return Number(item.hour) + 1
                }),
                    outActual = result.map(item => {//出港实际
                        return this.formatData(item.outActual)
                    }),
                    enterActual = result.map(item => {//进港实际
                        return this.formatData(item.enterActual)
                    }),
                    outPlan = result.map((item, index) => {//出港预测
                        if (index === currentTime) {
                            return item.outActual
                        } else {
                            return this.formatData(item.outPlan)
                        }
                    }),
                    enterPlan = result.map((item, index) => {//进港预测
                        if (index === currentTime) {
                            return item.enterActual
                        } else {
                            return this.formatData(item.enterPlan)
                        }
                    })
                this.draw(xData, outActual, enterActual, outPlan, enterPlan);
            }

        })
    }
    formatData(data) {//返回数据为0时格式化
        switch (data) {
            case 0:
                return '';
            default:
                return data
        }
    }
    draw(xData, outActual, enterActual, outPlan, enterPlan) {
        this.myChart.clear();
        let option = {
            color: ['#00C1F4', '#09ECB3', '#F9B40A', '#F8FE41'],
            legend: {
                textStyle: {
                    color: "#f7fffb",
                    // fontSize: 14
                },
                padding: 0,
                itemGap: 7,
                itemWidth: 13,
                itemHeight: 5,
                textAlign: "left",
                left: 0,
                // right: 50,
                top: 15,
                data: ['出港实际', '进港实际', '出港预测', '进港预测'],
            },
            grid: {
                left: 0,
                right: 0,
                top: '18%',
                bottom: '12%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        color: "#709dbc",
                        fontFamily: "lcd",
                        fontSize: 14,
                        formatter: (item) => {
                            if (item % 2 === 0) {
                                return item + 'h'
                            } else {
                                return ''
                            }
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#757C9D"
                        }
                    },
                    data: xData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: "#709dbc",
                        fontFamily: "lcd",
                        fontSize: 14,
                        // margin: 20
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#757C9D"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#555d84",
                            width: 1
                        }
                    },
                }
            ],
            series: [
                {
                    name: '出港实际',
                    type: 'line',
                    stack: '总量',
                    symbol: 'none',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{ offset: 0, color: 'rgba(29,215,252,0.5)' },
                                { offset: 1, color: 'rgba(0,39,191,0.3)' }]
                            )
                        }
                    },
                    lineStyle: {
                        width: 1
                    },
                    data: outActual
                    // data: [120, 132, 101, 134, 90, 230, 210, 90, '', '', '', ''],
                },
                {
                    name: '进港实际',
                    type: 'line',
                    stack: '总量',
                    symbol: 'none',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{ offset: 0, color: 'rgba(9,237,179,0.5)' },
                                { offset: 1, color: 'rgba(0,39,191,0.3)' }]
                            )
                        }
                    },
                    lineStyle: {
                        width: 1
                    },
                    data: enterActual
                    // data: [220, 182, 191, 234, 290, 330, 310, 290, '', '', '', '']
                },
                {
                    name: '出港预测',
                    type: 'line',
                    stack: '总量1',
                    symbol: 'none',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{ offset: 0, color: 'rgba(249,179,69,0.5)' },
                                { offset: 1, color: 'rgba(0,39,191,0.1)' }]
                            )
                        }
                    },
                    lineStyle: {
                        type: 'dotted',
                        width: 1
                    },
                    data: outPlan
                    // data: ['', '', '', '', '', '', '', 90, 154, 190, 330, 410],
                },
                {
                    name: '进港预测',
                    type: 'line',
                    stack: '总量1',
                    symbol: 'none',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{ offset: 0, color: 'rgba(249,255,69,0.5)' },
                                { offset: 1, color: 'rgba(0,39,191,0.1)' }]
                            )
                        }
                    },

                    lineStyle: {
                        type: 'dotted',
                        width: 1
                    },
                    data: enterPlan
                    // data: ['', '', '', '', '', '', '', 290, 320, 332, 301, 334],
                },
            ]
        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="PassengerHourDistributionCom">
                <TitleCom title="今日旅客小时分布" />
                <div id="PassengerHourDistribution"></div>
            </div>
        )
    }
}