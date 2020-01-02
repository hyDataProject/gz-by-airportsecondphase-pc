/**
 * Created by zhangqin on 2019/12/12.
 */
import './ParkLeisureRate.scss';
import {TitleCom} from 'com/index';
import Image from 'img/park_bar.png'
import Scatter from 'img/park_scatter.png'
import axiosToken from "js/axiosToken";

export default class ParkLeisureRate extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('ParkLeisureRate'))
        // this.draw()
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData()
        },globalTimer.parkLeisureRate)
    }
    componentWillReceiveProps(nextProps){
        
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/parkLeisureRate',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                let chartData = [];
                for(let key in result){
                    chartData.push(result[key])
                }
                let scatterData = chartData.map(item => {
                    if(item !== 0){ return 0 }else{return ''}
                })
                 this.draw(chartData,scatterData);
            }
        });
    }
    draw(chartData,scatterData){
        this.myChart.clear();
        let option = {
            grid:{
                left: 0,
                right: 0,
                top: '15%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['60%及以上', '40-60%', '30-40%', '20-30%', '10-30%', '10%以下'],
                axisLabel: {
                    color: "#709dbc",
                    fontFamily: "lcd",
                    fontSize: 12,
                    margin: 10,
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
            }],
            yAxis: [{
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
                        color: '#727589',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)',
                        type: 'dashed'
                    }
                }
            }],
            series: [
                {//柱图
                data: chartData,
                type: 'pictorialBar',
                barWidth: 19,
                symbol: 'image://'+Image,
                silent: true,
                label: {
                    show: true,
                    color: "#3e9abd",
                    fontFamily: 'lcd',
                    position: 'top'

                },
                barGap: '-100%',
            },
            {//柱图
                data: scatterData,
                type: 'scatter',
                barWidth: 19,
                symbol: 'image://'+Scatter,
                symbolSize: [19,40],
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
                    show: false,
                },
                z: 3,
                barGap: '-100%'
            }]
        }
        this.myChart.setOption(option);
    }
    render(){
        return(
            <div className="ParkLeisureRateCom">
                <TitleCom title="停车场实时空闲率分析" />
                <div id="ParkLeisureRate"></div>
            </div>
        )
    }
}