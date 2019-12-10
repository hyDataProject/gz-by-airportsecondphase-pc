import lineBar from "img/texture_bg.png";
let bg = new Image();
bg.src = lineBar;

export default class ReleaseRateBarLine extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._drawChart();
  }

  _drawChart() {
    let myChart = echarts.init(document.getElementById("ReleaseRateBarLine"));
    let option = {
      grid: {
        left: 20,
        right: 10,
        bottom: 40,
        top: 40,
        containLabel: false
      },
      legend: {
        top: 5,
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#ffffff"
        },
        data: ["积压数量", "累计积压"]
      },
      color: ["#fefe44"],
      xAxis: [
        {
          data: ["13时", "14时", "15时", "16时", "17时", "18时", "19时"],
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
          }
        },
        {
          data: ["13时", "14时", "15时", "16时", "17时", "18时", "19时"],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          }
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
        },
        {
          type: "value",
          splitLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "累计积压",
          type: "line",
          yAxisIndex: 1,
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          lineStyle: {
            color: "#fefe44"
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        },
        {
          name: "积压数量",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: "rgba(0, 194, 245, 0.3)"
              },
              {
                offset: 1,
                color: "rgba(5, 210, 246, 0.9)"
              }
            ]),
            borderColor: "rgba(0, 194, 245, 0.2)",
            borderWidth: 5
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        },
        {
          // 柱图背景纹理
          type: "bar",
          name: "repeat1",
          xAxisIndex: 1,
          barWidth: 15,
          z: 10,
          itemStyle: {
            color: {
              image: bg,
              repeat: "repeat"
            }
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        }
      ]
    };
    myChart.setOption(option);
  }

  render() {
    return (
      <div
        id={"ReleaseRateBarLine"}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}

ReleaseRateBarLine.propTypes = {};
ReleaseRateBarLine.defaultProps = {};
