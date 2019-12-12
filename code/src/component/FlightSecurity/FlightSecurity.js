/**
 * Created by zhangqin on 2019/12/10.
 */
import './FlightSecurity.scss';
import { TitleCom } from "com/index";
import barBg from 'img/FlightSecurity_bar_bg.png';
import CountUp from 'react-countup';
export default class FlightSecurity extends Component {
    constructor(props){
        super(props);
        this.state = {
            plan: 0
        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('FlightSecurity'))
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData()
        },globalTimer.fltSafeguardAnalyze)
    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axios({
            method: 'get',
            url: realAddress[0].url + '/pc/fltSafeguardAnalyze',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                this.setState({
                    plan: result.plan
                })
                this.draw(result)
            }
        });
    }
    renderItem(params, api) {
        // 自定义系列
        let categoryIndex = api.value(1);
        let start = api.coord([api.value(1), categoryIndex]);
        return {// 背景阴影
            type: 'image',
            style: {
                image: barBg,
                //   width: 500,
                width: 250,
                height: 25,
                x: 34,
                y: start[1] - 12.8,
            }
        }
    }
    draw(result){
        this.myChart.clear();
        let option = {
            color: ['red','#08efb4', '#00c4f4', '#daf4f4'],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#F9FDFF',
                    fontSize: 14
                },
                itemGap: 18,
                right: 13,
                bottom: 26,
                data: ['保障完成', '保障中', '待保障']
            },
            grid: {
                left: '12%',
                right: 17,
                top: -55,
                bottom: 0
            },
            xAxis: {
                type: 'value',
                show: false,
                max: result.done+result.working+result.wait
            },
            yAxis: {
                type: 'category',
                data: ['实际'],
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            series: [
                {
                    type: 'custom',
                    renderItem: this.renderItem,
                    silent: true,
                    data: [100, 100],
                    silent: true,
                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 3
                    }
                },
                {
                    name: '保障完成',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight',
                        color: '#fff',
                        fontFamily: 'lcd',
                        fontSize: 14
                    },
                    barWidth: 21,
                    silent: true,
                    data: [{
                        value: result.done,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: 'rgba(9,237,179,0.5)' },
                                    { offset: 1, color: 'rgba(9,237,179,0.9)' }
                                ]
                            )
                        },
                    }],
                },
                {
                    name: '保障中',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight',
                        color: '#fff',
                        fontFamily: 'lcd',
                        fontSize: 14
                    },
                    barWidth: 21,
                    silent: true,
                    data: [{
                        value: result.working,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: 'rgba(0,194,245,0.5)' },
                                    { offset: 1, color: 'rgba(0,194,245,0.9)' }
                                ]
                            )
                        },
                    }],
                    animationDelay: 100
                },
                {
                    name: '待保障',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight',
                        color: '#fff',
                        // formatter: (item) => {
                        //     if (item.value === 0) {
                        //         return '';
                        //     } else {
                        //         return item.value + '%';
                        //     }
                        // },
                        
                        fontFamily: 'lcd',
                        fontSize: 14
                    },
                    barWidth: 21,
                    silent: true,
                    data: [{
                        value: result.wait,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: 'rgba(255,255,255,0.5)' },
                                    { offset: 1, color: 'rgba(255,255,255,0.9)' }
                                ]
                            )
                        },
                    }],
                    animationDelay: 200
                },
            ]
        };
        this.myChart.setOption(option)
    }
    render(){
        let {plan} = this.state
        return(
            <div className="FlightSecurityCom">
                <TitleCom title="航班保障实时分析"></TitleCom>
                <p>今日计划：<CountUp end={plan} /></p>
                <div id="FlightSecurity"></div>
            </div>
        )
    }
}