import './CarPoolFree.scss';
import { TitleCom } from "com/index";
import lineBar from 'img/texture_bg.png';
let bg = new Image();
    bg.src = lineBar;
export default class CarPoolFree extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('CarPoolFree'))
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData()
        },globalTimer.carPoolLeisureRate)
    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axios({
            method: 'get',
            url: realAddress[0].url + '/pc/carPoolLeisureRate',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                let inPoolData = result.map(item => {//在场车辆柱图
                    return item.inPool
                }),
                    needData = result.map(item => {//当前需求柱图
                        return item.need
                    })
                
                this.draw(inPoolData,needData)
            }
        });
    }
    draw(inPoolData,needData){
        this.myChart.clear();
        let option = {
            color: ['#01c1f5','#08edb3'],
            grid:[{
                x: 32,
                y: "15%",
                width: "89%",
                height: "59%"
            },{
                x: 46,
                y: "15%",
                width: "89%",
                height: "59%"
            }],
            legend: {
                itemWidth: 7,
                itemHeight: 7,
                textStyle: {
                    color: "#f7fffb",
                    fontSize: 12
                },
                right: 0,
                data:["在场车辆","当前需求"]
            },
            xAxis: [{
                type: 'category',
                data: ["A到达","B到达","T2到达"],
                axisLabel: {
                    textStyle: {
                        color: '#3e9abd',
                        fontSize: 14
                    }
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
            },{
                type: 'category',
                gridIndex: 1,
                show: false
            }],
            yAxis: [{
                type: 'value',
                // max: 100,
                axisLine: {
                    lineStyle: {
                        color: '#3e9abd'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#6f9cbc',
                        fontFamily: 'lcd',
                        fontSize: 14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(86,94,120,0.5)'
                    }
                }
            },{
                type: 'value',
                // max: 100,
                gridIndex: 1,
                show: false
            }],
            series: [
                { // 背景阴影
                    type: 'bar',
                    id: 'bgBar',
                    itemStyle: {
                        color: 'rgba(23,45,94, 0.5)'
                    },
                    barWidth: 13,
                    barGap:'-100%',
                    barCategoryGap:'40%',
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
                    barWidth: 13,
                    data: inPoolData,
                    silent: true
                },
                {
                    type: 'bar',
                    name: '在场车辆',
                    silent: true,
                    
                    label: {
                        show: true,
                        position: 'top',
                        color: '#01c1f5',
                        fontFamily: 'lcd',
                        offset: [-1,0]
                        // '#01c1f5','#08edb3'
                    },
                    barWidth: 13,
                    data: inPoolData.map(item => {
                        return {
                            value: item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {
                                            offset: 0, color: 'rgba(0, 194, 245, 0.8)',
                                          },{
                                            offset: 1, color: 'rgba(5, 210, 246, 0.1)'
                                          }
                                    ]
                                )
                            },
                        }
                    }),
                },
                { // 当前需求背景阴影
                    type: 'bar',
                    id: 'bgBar1',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        color: 'rgba(23,45,94, 0.5)'
                    },
                    barWidth: 13,
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: [100,100,100],
                    animation: false,
                    silent: true
                },
                {// 当前需求背景纹理
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        color: {
                            image: bg,
                            repeat: 'repeat',
                          },
                    },
                    barWidth: 13,
                    data: needData,
                    silent: true
                },
                {//当前需求数据
                    type: 'bar',
                    name: '当前需求',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    silent: true,
                    label: {
                        show: true,
                        position: 'top',
                        color: '#08edb3',
                        fontFamily: 'lcd',
                        offset: [-1,0]
                        // '#01c1f5','#08edb3'
                    },
                    barWidth: 13,
                    data: needData.map(item => {
                        return {
                            value: item,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {
                                            offset: 0, color: 'rgba(0,211,111,0.8)',
                                          },{
                                            offset: 1, color: 'rgba(0,211,111,0.1)'
                                          }
                                    ]
                                )
                            }
                        }
                    })
                }
            ]
        }
        this.myChart.setOption(option)
        //取value轴最大值
        let max = this.myChart.getModel().getComponent('yAxis', 0).axis.scale.getExtent()[1]
        let dataShadow = [];//阴影数据
        for(var i = 0; i <3; i++){
            dataShadow.push(max)
        }
        this.myChart.setOption({
            series: [
                { // 背景阴影
                    id: 'bgBar',
                    data: dataShadow,
                },
                { // 背景阴影
                    id: 'bgBar1',
                    data: dataShadow,
                },
            ]
        })
    }
    render(){
        return(
            <div className="CarPoolFreeCom">
                <TitleCom title="蓄车池实时空闲率分析" />
                <div id="CarPoolFree"></div>
            </div>
        )
    }
}