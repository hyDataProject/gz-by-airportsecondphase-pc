/**
 Crate by wanjikun on 19/10/28.
*/
import "./PiechartCom.scss";
import pieChartPlane from "img/pieChartPlane.png";
import pieChartCircle from "img/pieChartCircle.png";
export default class PiechartCom extends Component {
    constructor(props) {
        super(props);
        this.refDom = null;
        this.myChart = null;
    }

    componentDidMount() {

        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(this.refDom);
        const {seriesData,color} = this.props;
        this.drawChart(seriesData,color);
    }

    componentWillReceiveProps(newProps) {
        const {seriesData,color} = newProps;
        this.drawChart(seriesData,color);
    }

    drawChart = (seriesData,color) => {
        this.myChart && this.myChart.clear();

        let option = {
            
            legend: {
                show: true,
                orient: 'vertical',
                selectedMode:false,//取消图例上的点击事件
                right: '10%',
                top:20,
                textStyle:{
                    color:'#c1c1c1',
                    padding:[5,0,0,10]
                },
                itemGap:10,
                itemWidth:10,
                itemHeight:10,
            },
            
            series: [{
                type: 'pie',
                radius: ['42', '50'],
                center: ['30%', '50%'],
                color:color,
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#031845',
                    }
                },
                data: seriesData,
                label: {
                    show: true,
                    normal: {
                        formatter: ele=>{
                            return ele.value === 0 ? '' :`{a|${ele.value}}` ;
                        },
                        show: true,
                        rich:{
                            a:{
                                padding:[0,0,10,10],
                            }
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                        length:12,
                        length2:8
                    },
                },

            }]
        };

        this.myChart.setOption(option);
    }


    render() {
        return (
            <div className={'PiechartCom'}>
                <div className="chartDom" ref={view => this.refDom = view}>
                </div>
                <img src={pieChartPlane} className="pieChartPlane"></img>
                <img src={pieChartCircle} className="pieChartCircle"></img>
            </div>
        )
    }
}

PiechartCom.propTypes = {
    seriesData:PropTypes.array.isRequired,
    color:PropTypes.array.isRequired,
}
PiechartCom.defaultProps = {
    // title:'标题',
}