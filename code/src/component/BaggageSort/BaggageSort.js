/**
 * Created by zhangqin on 2019/12/18.
 */
import axiosToken from "js/axiosToken";

import './BaggageSort.scss';
import { TitleCom } from "com/index";
import lineBar from 'img/texture_bg.png';
let bg = new Image();
    bg.src = lineBar;
export default class BaggageSort extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('BaggageSort'));
        this.getData(this.props.terminal);
        this.reloadId = setInterval(() => {
            this.getData(this.props.terminal);
        },globalTimer.lugCheckHourlyCount)
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
            url: realAddressUrlOne + '/pc/lugCheckHourlyCount/'+terminal,
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                // x轴类目值
                let xData = result.map(item => {
                    return item.hour
                }),
                //y轴value值
                seriesData = result.map(item => {
                    return item.amount
                });
                this.draw(xData,seriesData);
            }
        });
    }
    draw(xData,seriesData){
        this.myChart.clear();
        let option = {
            grid: {
                top: 15,
                bottom: 30,
                left: 0,
                right: 0,
                containLabel: true
            },
            xAxis: {
                data: xData,
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontFamily: 'lcd',
                        fontSize: 12
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
                z: 10
            },
            yAxis: {
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
            series: [
                { // 背景阴影
                    type: 'bar',
                    id: 'bgBar',
                    itemStyle: {
                        color: 'rgba(23,45,94, 0.5)'
                    },
                    barWidth: 6,
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    data: [],
                    animation: false,
                    silent: true
                },
                {// 背景纹理
                    type: 'bar',
                    itemStyle: {
                        color: {
                            image: bg,
                            repeat: 'repeat',
                          },
                    },
                    barWidth: 6,
                    data: seriesData,
                    silent: true
                },
                {
                    type: 'bar',
                    silent: true,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0, color: 'rgba(0, 194, 245, 0.8)',
                                  },{
                                    offset: 1, color: 'rgba(5, 210, 246, 0.3)'
                                  }
                            ]
                        )
                    },
                    barWidth: 6,
                    data: seriesData
                }
            ]
        }
        this.myChart.setOption(option)
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
                },
            ]
        })
    }
    render(){
        return(
            <div className="BaggageSortCom">
                <TitleCom title="行李分拣系统每小时处理行李总数"></TitleCom>
                <div id="BaggageSort"></div>
            </div>
        )
    }
}