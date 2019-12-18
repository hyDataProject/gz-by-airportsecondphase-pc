/**
 Crate by wanjikun on 19/12/11.
*/
import "./RunWay.scss";
import { TitleCom, BarLine } from "com/index";
export default class RunWay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      xData: [],
      data1: {},
      data2: {},
      data3: {}
    };
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.runwayHourlySortie);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddressUrlOne + `/pc/runwayHourlySortie/${this.state.type}`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        this.setState({
          xData: data.hour,
          data1: data.data[0],
          data2: data.data[1],
          data3: data.data[2]
        });
      }
    });
  }

  switchBtn(e) {
    this.setState(
      {
        type: e
      },
      () => {
        this._getData();
      }
    );
  }

  render() {
    const { type, xData, data1, data2, data3 } = this.state;
    return (
      <div className={"RunWay"}>
        <div className="runwayCont">
          <TitleCom title="每日每小时跑道分析" />
          <div className={"runway-switch"}>
            <div
              className={"runway-btn" + (type == 1 ? " active" : "")}
              onClick={this.switchBtn.bind(this, 1)}
            >
              向北进出港
            </div>
            <div
              className={"runway-btn" + (type == 2 ? " active" : "")}
              onClick={this.switchBtn.bind(this, 2)}
            >
              向南进出港
            </div>
          </div>
          <div className={"runway-box"}>
            <BarLine xData={xData} data={data1} />
          </div>
          <div className={"runway-box"}>
            <BarLine xData={xData} data={data2} />
          </div>
          <div className={"runway-box"}>
            <BarLine xData={xData} data={data3} />
          </div>
        </div>
      </div>
    );
  }
}

RunWay.propTypes = {};
RunWay.defaultProps = {};
