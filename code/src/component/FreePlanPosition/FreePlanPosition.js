/* Create by zhangqin on 2019/12/12 */
import './FreePlanPosition.scss'
import {TitleCom} from 'com/index';
import barBg from 'img/jwkx_bar_bg.png'
import textureBg from 'img/texture_bg.png';
import axiosToken from "js/axiosToken";

var textureBgImg = new Image();
    textureBgImg.src = textureBg;

export default class FreePlanPosition extends Component {
    constructor(props){
        super(props);
        this.state = {
            yData: [],
        }
        this.myChart = null;
        this.renderItem = this.renderItem.bind(this)
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById("FreePlanPositionBar"))
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData();
        }, globalTimer.positionUsedInfo);
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/positionUsedInfo',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result,name = [],used = [], free = [],allNumber = [];
                for(var i in result){
                    name.push(result[i].type);
                    used.push(-result[i].used);
                    free.push(result[i].free);
                    allNumber.push(result[i].used,result[i].free)
                }
                this.setState({
                    yData: name
                })
                allNumber.sort(function(a, b){return b - a});//倒序
                let barData = {name,used,free},//name为类目值，used为占用值，free为空闲值
                    maxNumber = allNumber[0];
                this.draw(barData,maxNumber)
            }
        });
    }
    renderItem(params, api){ // 自定义系列
        let {yData} = this.state;
        let categoryIndex = api.value(1), index =params.dataIndex;
        let start = api.coord([api.value(1), categoryIndex]);
        return {
            type: 'group',
            children: [{
                type: 'image',// 背景阴影
                style: {
                image: barBg,
                width: 244,
                height: 15,
                x: 38,
                y: start[1] - 7.3,
                },
            },{
                type: 'text',//文字
                position: [0,start[1] - 10],
                style: {
                    text: yData[index],
                    fill: '#6F9DBC',
                    fontSize: 14,
                }
            }
        ]
        }
    }
    draw(barData,maxNumber){
        this.myChart.clear();
        var option = {
            color: ["red","#0aeeb4","#00c3f6"],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#F9FDFF',
                    fontSize:14
                },
                top: 6,
                right: '4%',
                itemGap: 30,
                data:['空闲', '占用']
            },
            grid: {
                left: 38,
                top: 32,
                right: '4%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: {
                type : 'value',
                // max: 
                axisTick : {show: false},
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: '#42455E'
                    }
                },
                axisLabel: {
                    color: '#6F9DBC',
                    formatter: function(value){
                        return Math.abs(value)
                    },
                    fontSize: 14,
                    fontFamily: 'lcd'
                },
                splitLine: {
                    lineStyle: {
                        width: 2,
                        color: 'rgba(225,225,225,0.08)'
                    }
                },
                // x轴线上刻度等分
                interval: maxNumber < 1000?_.ceil(maxNumber/3,-1):_.ceil(maxNumber/3,-2),
                max: function(value){
                    return maxNumber < 1000?_.ceil(maxNumber/3,-1)*3:_.ceil(maxNumber/3,-2)*3
                },
                min: function(value){
                    return -(maxNumber < 1000?_.ceil(maxNumber/3,-1)*3:_.ceil(maxNumber/3,-2)*3)
                }
            },
            yAxis : {
                type : 'category',
                axisTick : {show: false},
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#70738E'
                    }
                },
                data: barData.name,
                // data : ['B类','C类','D类','E类','F类']
            },
            series : [{
                type: 'custom',
                renderItem:this.renderItem,
                silent: true,
                data:[320, 302,320, 302,320]
            },{
                name:'空闲',
                type:'bar',
                id: 'free',
                stack: '总量',
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: [0,10,10,0]
                },
                label: {
                    show:false
                },
                data: barData.free.map(item => {
                    return {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: 'rgba(9,237,179,.5)'},
                                    { offset: 1, color: 'rgba(9,237,179,.9)'}
                                ]
                            )
                        },
                        value: item,
                        
                    }
                })
            },{
                name:'占用',
                id: 'used',
                type:'bar',
                stack: '总量',
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: [10,0,0,10],
                },
                label: {
                    show: false
                },
                data: barData.used.map(item => {
                    return {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: 'rgba(0,194,245,.9)' },
                                    { offset: 1, color: 'rgba(0,194,245,.5)' }
                                ]
                            ),
                        },
                        value: item,
                        
                    }
                })
            },{
                name:'背景纹理',
                id: 'freeBg',
                type:'bar',
                barWidth: 10,
                data:barData.free,
                barGap: '-100%',
                itemStyle: {
                    barBorderRadius: [0,10,10,0],
                    color: {
                        image: textureBgImg,
                        repeat: 'repeat'
                    }
                }
            },{
                name:'背景纹理',
                id: 'usedBg',
                type:'bar',
                barWidth: 10,
                data:barData.used,
                barGap: '-100%',
                itemStyle: {
                    barBorderRadius: [0,10,10,0],
                    color: {
                        image: textureBgImg,
                        repeat: 'repeat'
                    }
                }
            }]
        }
        this.myChart.setOption(option)
    }

    render(){
        return(
            <div className="FreePlanPosition">
                <TitleCom title="机位空闲情况实时分析"></TitleCom>
                <div className="FreePlanPositionCont">
                    <div id="FreePlanPositionBar"></div>
                </div>
            </div>
        )
    }
}