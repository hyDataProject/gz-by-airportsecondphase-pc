export default class EnterPsgFlowAnalyzeLine extends Component {
  constructor(props) {
    super(props);
    this.dom = null;
  }

  componentDidMount() {
    this._drawChart();
  }

  componentDidUpdate() {
    this._drawChart();
  }

  _drawChart() {
    let myChart = echarts.init(this.dom);
    myChart.clear();
    let option = {
      legend: {
        top: 5,
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#ffffff"
        },
        data: ["E1", "E3", "W1", "W2", "W3"]
      },
      grid: {
        left: 40,
        right: 10,
        bottom: 40,
        top: 40,
        containLabel: false
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#727a9e", //X轴文字颜色
              fontFamily: "lcd"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#757C9D"
            }
          },
          data: (this.props.data && this.props.data.hour) || []
        }
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#757C9D"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#757C9D"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#727a9e",
              fontFamily: "lcd"
            }
          }
        }
      ],
      series: [
        {
          name: "E1",
          type: "line",
          areaStyle: {},
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          smooth: true,
          data: (this.props.data && this.props.data.E1) || []
        },
        {
          name: "E3",
          type: "line",
          areaStyle: {},
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          smooth: true,
          data: (this.props.data && this.props.data.E3) || []
        },
        {
          name: "W1",
          type: "line",
          areaStyle: {},
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          smooth: true,
          data: (this.props.data && this.props.data.W1) || []
        },
        {
          name: "W2",
          type: "line",
          areaStyle: {},
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          smooth: true,
          data: (this.props.data && this.props.data.W2) || []
        },
        {
          name: "W3",
          type: "line",
          areaStyle: {},
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          smooth: true,
          data: (this.props.data && this.props.data.W3) || []
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return (
      <div
        className={"EnterPsgFlowAnalyzeLine"}
        style={{ width: "100%", height: "100%" }}
        ref={ref => {
          this.dom = ref;
        }}
      ></div>
    );
  }
}

EnterPsgFlowAnalyzeLine.propTypes = {};
EnterPsgFlowAnalyzeLine.defaultProps = {
  data: {
    E1: [],
    E3: [],
    W1: [],
    W2: [],
    W3: [],
    hour: []
  }
};
