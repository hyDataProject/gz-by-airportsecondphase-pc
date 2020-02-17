/**
 * Created by zhangqin on 2019/12/18.
 */
import "./EachLugUsedFlightNum.scss";
import { TitleCom } from "com";
import tooltip from "img/Luggage_tooltip.png";
import axiosToken from "js/axiosToken";

export default class EachLugUsedFlightNum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myChart = null;
  }
  componentDidMount() {
    this.myChart = echarts.init(
      document.getElementById("EachLugUsedFlightNumBar")
    );
    this.getData(this.props.terminal);
    this.reloadId = setInterval(() => {
      this.getData(this.props.terminal);
    }, globalTimer.eachLugUsedFlightNum);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.terminal !== nextProps.terminal) {
      this.reloadId && clearInterval(this.reloadId);
      this.getData(nextProps.terminal);
      this.reloadId = setInterval(() => {
        this.getData(nextProps.terminal);
      }, globalTimer.lugCheckHourlyCount);
    }
  }
  componentWillUnmount() {
    clearInterval(this.reloadId);
  }
  getData(terminal) {
    // 获取数据
    axiosToken({
      method: "get",
      url: realAddressUrlOne + "/pc/eachLugUsedFlightNum/" + terminal
    }).then(res => {
      if (res.data.code === 0) {
        let result = res.data.result;
        // x轴类目值
        let xData = result.map(item => {
            return item.name;
          }),
          //y轴value值
          seriesData = result.map(item => {
            return item.fltNum;
          });
        this.draw(xData, seriesData);
      }
    });
  }
  draw(xData, seriesData) {
    this.myChart.clear();
    let option = {
      grid: {
        top: 15,
        bottom: 10,
        left: 0,
        right: 0,
        containLabel: true
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none"
        },
        formatter: params => {
          let data = params[0];
          return `<div style='background:url(${tooltip}) no-repeat; 
          width:86px; 
          height:50px; 
          padding-left: 5px; 
          font-family:"lcd" '>
          <span>${data.name}号行李转盘</span>
          <br />
          <span>航班数：</span><span style='color:#D8AC52;'>${data.value}</span>
          </div>
          `;
        },
        position: (point, params, dom, rect, size) => {
          let data = params[0];
          return [
            this.myChart.convertToPixel({ xAxisIndex: 0 }, data.dataIndex) - 15,
            this.myChart.convertToPixel({ yAxisIndex: 0 }, data.value) - 50
          ];
        },
        transitionDuration: 0,
        backgroundColor: "rgba(0,0,0,0)"
      },
      xAxis: {
        data: xData,
        axisLabel: {
          textStyle: {
            color: "#6f9cbc",
            fontFamily: "lcd",
            fontSize: 12
          },
          margin: 2,
          interval: 0
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#777a91"
          }
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#777a91"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#6f9cbc",
            fontFamily: "lcd",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "#565e78"
          }
        }
      },
      series: [
        {
          type: "bar",
          silent: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 194, 245, 0.8)"
              },
              {
                offset: 1,
                color: "rgba(5, 210, 246, 0.3)"
              }
            ]),
            barBorderRadius: [3, 3, 0, 0]
          },
          barWidth: 6,
          data: seriesData
        }
      ]
    };
    this.myChart.setOption(option);
  }
  render() {
    return (
      <div className="EachLugUsedFlightNum">
        <TitleCom title="行李转盘使用航班数量实时分析"></TitleCom>
        <div id="EachLugUsedFlightNumBar" />
      </div>
    );
  }
}
