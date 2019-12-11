/**
 * Created by zhangqin on 2019/12/10.
 */
import './PassengerImportOrExport.scss';
import barBg from 'img/passenger_bar_bg.png';
import yAxisBg from 'img/passenger_yAxis_bg.png';
export default class PassengerImportOrExport extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('PassengerImportOrExport'))
        this.draw()
        this.getData();
        this.reloadId = setInterval(() => {
            this.getData();
        },globalTimer.psgEnterOutCount)
    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUnmount(){
        clearInterval(this.reloadId);
    }
    getData(){
        axios({
            method: 'get',
            url: realAddress[0].url + '/pc/psgEnterOutCount',
        }).then((res) => {
            if(res.data.code === 0){
                let result = res.data.result;
                // console.log(result)
            }
        });
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
                    width: 189,
                    height:17,
                    x: 118.5,
                    y: start[1] - 8.5,
                }
            }, {// 中垂线
                type: 'image',
                style: {
                    image: yAxisBg,
                    x: 312.5,
                    y: 62,
                }
            }]
        }
    }
    draw(){
        this.myChart.clear();
        let option = {
            color: ["blue", "#00C2F5","#DAF3FF"],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                data: ['进港', '出港'],
                itemGap: 18,
                top: 0,
                right: '5%'
            },
            grid: {
                left: '42%',
                top:'20%',
                bottom: '6%',
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
                axisTick: { show: false },
                inverse: true,
                nameGap:0,
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 14
                },
                axisLine: {
                    // show: false
                },
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
                    data: [{
                        value: -100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 1,
                                [
                                    { offset: 0, color: 'rgba(0,194,245,.9)' },
                                    { offset: 1, color: 'rgba(0,194,245,.2)' }
                                ]
                            ),
                        },
                    },-100]
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
                    data: [{
                        value:100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 1,
                                [
                                    { offset: 0, color: 'rgba(9,237,179,.2)' },
                                    { offset: 1, color: 'rgba(9,237,179,.9)' }
                                ]
                            )
                        },
                    },100]
                }
            ]
        }
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="PassengerImportOrExportCom">
                <div id="PassengerImportOrExport"></div>
            </div>
        )
    }
}