/**
 * Created by zhangqin on 2019/12/10.
 */
import './FlightSecurity.scss';
export default class FlightSecurity extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.myChart = null;
    }
    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('FlightSecurity'))
        this.draw()
    }
    componentWillReceiveProps(nextProps){

    }
    draw(){
        let option = {
            backgroundColor: '#1e3367',
            color: ['red','#09EDB4', '#00C2F5', '#DAF3FF'],
            legend: {
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#F9FDFF',
                    fontSize: 14
                },
                itemGap: 18,
                right: 13,
                bottom: 0,
                data: ['保障完成', '保障中', '待保障']
            },
            grid: {
                left: '12%',
                right: '5%',
                top: -20,
                bottom: 0
            },
            xAxis: {
                type: 'value',
                show: false,
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
                    data: [100],
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
                    data: [30],
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
                    data: [40],
                    animationDelay: 200
                },
            ]
        };
        this.myChart.setOption(option)
    }
    render(){
        return(
            <div className="FlightSecurityCom">
                <div className="title">航班保障实时分析</div>
                <p>今日计划：<span>170</span></p>
                <div id="FlightSecurity"></div>
            </div>
        )
    }
}