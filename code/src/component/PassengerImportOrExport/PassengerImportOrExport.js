/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerImportOrExport.scss';
import barBg from 'img/passenger_bar_bg.png';
import yAxisBg from 'img/passenger_yAxis_bg.png';
import CountUp from 'react-countup';
import axiosToken from "js/axiosToken";

export default class PassengerImportOrExport extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastSum: 0,
            futureSum: 0
        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('PassengerImportOrExport'))
        // this.draw()
        this.getData(this.props.terminal);
        this.reloadId = setInterval(() => {
            this.getData(this.props.terminal);
        },globalTimer.psgEnterOutCount)
    }
    componentWillReceiveProps(nextProps){
        if (this.props.terminal !== nextProps.terminal) {
            this.reloadId && clearInterval(this.reloadId);
            this.getData(nextProps.terminal);
            this.reloadId = setInterval(() => {
                this.getData(nextProps.terminal);
            }, globalTimer.psgHourlyDistribution)
        }
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(terminal){
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/psgEnterOutCount/'+terminal,
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                let lastSum = result.lastEnter+result.lastOut,//两小时内进出港旅客总量
                    futureSum = result.futureEnter+result.futureOut;//未来两小时进出港旅客总量
                let enterData = [-this.chartDataFormat(result.lastEnter,lastSum),-this.chartDataFormat(result.futureEnter,futureSum)],
                    outData = [this.chartDataFormat(result.lastOut,lastSum),this.chartDataFormat(result.futureOut,futureSum)];
                
                this.setState({
                    lastSum: lastSum,
                    futureSum: futureSum
                })
                 this.draw(enterData,outData);
            }
        });
    }
    chartDataFormat(data,sum){
        let rate = 0;
        rate = ((data/sum)*100).toFixed(0)
        return rate;
    }
    renderItem(params, api) {
        // 自定义系列
        let categoryIndex = api.value(1);
        let start = api.coord([api.value(1), categoryIndex]);
        return {
            type: 'group',
            children: [{// 背景纹理
                type: 'image',
                style: {
                    image: barBg,
                    width: 186,
                    height:17,
                    x: 112.5,
                    y: start[1] - 8.5,
                }
            }, {// 中垂线
                type: 'image',
                style: {
                    image: yAxisBg,
                    width: 1,
                    height:80,
                    x: 205,
                    y: 42,
                }
            }]
        }
    }
    draw(enterData,outData){
        this.myChart.clear();
        let option = {
            color: ["blue", "#00C2F5","#09edb3"],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                data: ['进港', '出港'],
                itemGap: 45,
                top: 13,
                right: '5%'
            },
            grid: {
                left: '39%',
                top:'35%',
                bottom: '10%',
                right: 3,
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
                inverse: true,
                show: false,
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
                    data: enterData.map(item => {
                        return {
                            value: item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        { offset: 0, color: 'rgba(0,194,245,.9)' },
                                        { offset: 1, color: 'rgba(0,194,245,.2)' }
                                    ]
                                ),
                            },
                        }
                    }),
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
                    data: outData.map(item => {
                        return{
                            value:item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        { offset: 0, color: 'rgba(9,237,179,.2)' },
                                        { offset: 1, color: 'rgba(9,237,179,.9)' }
                                    ]
                                )
                            },
                        }
                    }),
                }
            ]
        }
        this.myChart.setOption(option)
    }
    render(){
        let {lastSum,futureSum} = this.state;
        return(
            <div className="PassengerImportOrExportCom">
                <div className="category">
                    {/* <p>2小时内:<CountUp end={lastSum} /></p>
                    <p>未来2小时:<CountUp end={futureSum} /></p> */}
                    <p>2小时内: <span>{lastSum}</span></p>
                    <p>未来2小时: <span>{futureSum}</span></p>
                </div>
                <div id="PassengerImportOrExport"></div>
            </div>
        )
    }
}