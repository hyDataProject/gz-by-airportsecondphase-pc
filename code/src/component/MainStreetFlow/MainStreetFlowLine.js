export default class MainStreetFlowLine extends Component {
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
    let type = this.props.type === 1 ? '(日)' : '(月)'
    myChart.clear();
    let option = {
      grid: {
        left: 30,
        right: 25,
        bottom: 20,
        top: 10,
        containLabel: false
      },
      xAxis: [
        {
          type: "category",
          name: type,
          nameTextStyle: {
            color: "#727a9e", //X轴文字颜色
            fontFamily: "lcd",
            padding: [28, 0, 0, 5]
          },
          nameGap: 0,
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
          data: this.props.time || []
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
          name: "总量",
          type: "line",
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(29,215,252,1)" },
              { offset: 1, color: "rgba(0,39,191,0.2)" }
            ])
          },
          lineStyle: {
            color: "#00c2f5",
            width: 1
          },
          symbol: "none",
          smooth: true,
          data: this.props.totalFlow || []
        }
      ]
    };

    myChart.setOption(option);
  }

  render() {
    return (
      <div
        className={"MainStreetFlowLine"}
        style={{ width: "100%", height: "100%" }}
        ref={ref => {
          this.dom = ref;
        }}
      ></div>
    );
  }
}

MainStreetFlowLine.propTypes = {};
MainStreetFlowLine.defaultProps = {
  totalFlow: [],
  time: [],
  type:1
};
