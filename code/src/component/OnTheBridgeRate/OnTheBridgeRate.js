/* Create by zhangqin on 2019/10/30 */
import './OnTheBridgeRate.scss'
import {TitleCom} from 'com/index'
import barBg from 'img/jrkq_bar_bg.png';
import scatterImg from 'img/scatter_img.png';
import axiosToken from "js/axiosToken";

export default class OnTheBridgeRate extends Component {
    constructor(props){
        super(props);
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById("barChart"))
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData();
        },globalTimer.positionTotalityByBridgeRate)
    }
    getData(){// 获取数据
        axiosToken({
            method: 'get',
            url: realAddressUrlOne + '/pc/positionTotalityByBridgeRate',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                this.draw(result.rate);
            }
        });
    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    renderItem(params, api){
        let categoryIndex = api.value(1);
        let start = api.coord([api.value(1), categoryIndex]);
        let x = 263*api.value(0)/100;//柱图在x轴上的长度
        return {
            type: 'group',
            children: [
                {// 纹理背景
                    type: 'image',
                    style: {
                        image: barBg,
                        width: 283,
                        height: 26,
                        x: 0,
                        y: start[1]-25
                    }
                },
                {// 多边形
                    type: 'polygon',
                    position: [0,38],
                    shape: {
                        points:[[0,0], [0, 26], [x+20, 26], [x, 0]],
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: 'rgba(0,63,156,0.3)'},
                                {offset: 1, color: 'rgba(0,220,212,0.7)'}
                            ]
                        )
                    }
                }
            ]

        }
    }
    draw(rate){
        this.myChart.clear();
        var option = {
            grid: {
                left: 0,
                right: 30,
                top: 65,
                bottom: 18
            },
            xAxis: {
                type: 'value',
                show: false,
                max: 100,
            },
            yAxis: {
                type: 'category',
                show: false,
                data: [],
            },
            series: [
                {
                type: 'custom',
                id: 'barBg',
                renderItem: this.renderItem,
                data: [rate],
                silent: true,
            },
            {
                data: [rate],
                type: 'bar',
                id: 'rate',
                barWidth: 26,
                silent: true,
                label: {
                    show: true,
                    position: "insideRight",
                    offset: rate<5&&String(rate).indexOf('.')>0?[60, -45]:[28,-45],
                    // offset: [100, -80],
                    fontSize: 24,
                    color: "#F5E22B",
                    fontFamily: 'lcd',
                    formatter: "{c}%"
                },
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            {
                data: [rate],
                type: 'scatter',
                id: 'scatter',
                symbol: 'image://'+scatterImg,
                symbolSize: 60,
                symbolOffset: [9,-12],
                symbolRotate: -7,
                silent: true,
            }
        ]
        }
        this.myChart.setOption(option)
    }
    // draw(rate){
    //     this.myChart.setOption({
    //         series: [
    //             {id: 'rate', data: [rate]},
    //             {id: 'barBg', data: [rate]},
    //             {id: 'scatter', data: [rate]},
    //         ]
    //     })
    // }
    render(){
        return(
            <div className="OnTheBridgeRate">
                <TitleCom title="今日靠桥率"></TitleCom>
                <div className="OnTheBridgeRateCont">
                    <div id="barChart"></div>
                </div>
            </div>
        )
    }
}