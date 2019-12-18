import lineBar from "img/texture_bg.png";
import runwayBg from "img/runway_bg.png";
let bg = new Image();
bg.src = lineBar;
let runway = new Image();
runway.src = runwayBg;

export default class BarLine extends Component {
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
      grid: {
        left: 25,
        right: 20,
        bottom: 50,
        top: 65,
        containLabel: false
      },
      legend: {
        top: 35,
        right: 10,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 25,
        textStyle: {
          color: "#ffffff"
        },
        data: ["小时数", "今日累计"]
      },
      graphic: {
        elements: [
          {
            type: "group",
            top: 0,
            left: 100,
            width: 88,
            height: 19,
            children: [
              {
                type: "image",
                left: -44,
                style: {
                  image: runway,
                  width: 88,
                  height: 19
                }
              },
              {
                type: "text",
                style: {
                  text: (this.props.data && this.props.data.name) || "19",
                  font: "16px lcd",
                  fill: "#ffffff",
                  textAlign: "center"
                }
              }
            ]
          }
        ]
      },
      color: ["#fefe44"],
      xAxis: [
        {
          data: this.props.xData || [],
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
          data: this.props.xData || [],
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
          splitNumber: 3,
          name: "架次",
          nameTextStyle: {
            fontFamily: "lcd",
            padding: [0, 25, 0, 0],
            fontSize: 10
          },
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
          splitNumber: 3,
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
          name: "今日累计",
          type: "line",
          symbol: "line",
          showSymbol: false,
          symbolSize: 0,
          yAxisIndex: 1,
          lineStyle: {
            color: "#fefe44"
          },
          data: (this.props.data && this.props.data.accumulated) || []
        },
        {
          name: "小时数",
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
          data: (this.props.data && this.props.data.sorties) || []
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
          data: (this.props.data && this.props.data.sorties) || []
        }
      ]
    };
    myChart.setOption(option);
  }

  render() {
    return (
      <div
        className={"ReleaseRateBarLine"}
        style={{ width: "100%", height: "100%" }}
        ref={ref => {
          this.dom = ref;
        }}
      ></div>
    );
  }
}

BarLine.propTypes = {};
BarLine.defaultProps = {
  data: {
    name: "19",
    sorties: [1, 2, 3, 4, 5, 6, 7, 8],
    accumulated: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  xData: ["09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时"]
};
