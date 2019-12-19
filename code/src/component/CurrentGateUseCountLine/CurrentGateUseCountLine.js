import './CurrentGateUseCountLine.scss';
export default class CurrentGateUseCountLine extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('CurrentGateUseCountLine'))
    }
    componentWillReceiveProps(nextProps){
        this.draw(nextProps.LineData)
    }
    draw(LineData){
        this.myChart.clear()
        let option = {
            color: ['#00bfea','#12e9b0'],
            legend: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12
                },
                itemWidth: 18,
                itemHeight: 5,
                right: 25,
                top: 10,
                data: ['近机位登机口','远机位登机口'],
            },
            grid: {
                left: 0,
                top: 35,
                bottom: 0,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(9,237,179,0.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(29,215,252,0.05)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                textStyle: {
                    fontFamily: 'lcd'
                },
                formatter: (item) => {
                    return item[1].dataIndex+1+'时<br />'
                            +item[1].seriesName+'：'+item[1].data//近机位
                            +'<br />'+item[0].seriesName+'：'+item[0].data//远机位
                },
                extraCssText: 'background-image: linear-gradient(to bottom, rgba(3,118,255,.8), rgba(0,39,191,.2));'
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontFamily: 'lcd',
                        fontSize: 12
                    },
                    margin:2,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#777a91'
                    }
                },
                data: LineData.xData
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#777a91'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontFamily: 'lcd',
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#565e78'
                    }
                },
            },
            series: [{
                name: '远机位登机口',
                data: LineData.farNum,
                type: 'line',
                stack: '堆叠',
                symbol: 'none',
                lineStyle: {
                    width: 1.5
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(29,215,252,0.7)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(0,39,191,0.3)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }, 
            },{
                name: '近机位登机口',
                data: LineData.nearNum,
                type: 'line',
                stack: '堆叠',
                symbol: 'none',
                lineStyle: {
                    width: 1.5
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(9,237,179,0.7)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(0,39,191,0.3)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }]
        };
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="CurrentGateUseCountLineCom">
                <div id="CurrentGateUseCountLine"></div>
            </div>
        )
    }
}