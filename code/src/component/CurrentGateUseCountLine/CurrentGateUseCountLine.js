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
        this.draw()
    }
    componentWillReceiveProps(nextProps){

    }
    draw(){
        let option = {
            legend: {
                data: ['近机位登机口','远机位登机口'],
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '远机位登机口',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                stack: '堆叠',
                symbol: 'none',
                areaStylecolor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(29,215,252,0.3)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0,39,191,0.05)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },{
                name: '近机位登机口',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                stack: '堆叠',
                symbol: 'none',
                areaStylecolor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(29,215,252,0.3)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0,39,191,0.05)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
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