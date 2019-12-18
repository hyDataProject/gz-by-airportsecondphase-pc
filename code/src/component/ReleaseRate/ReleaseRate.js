import "./ReleaseRate.scss";
import { TitleCom, ReleaseRateBarLine } from "com/index";

export default class ReleaseRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xaxis: [],
      barData: [],
      lineData: []
    };
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.leaveOverstocked);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddressUrlOne + `/pc/leaveOverstocked`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        this.setState({
          xaxis: data.xaxis,
          barData: data.flightOverstockHour,
          lineData: data.flightOverstockTotal
        });
      }
    });
  }

  render() {
    const { xaxis, barData, lineData } = this.state;
    return (
      <div className={"ReleaseRate"}>
        <TitleCom title="今日出港积压" />
        <div className={"ReleaseRateBox"}>
          <ReleaseRateBarLine
            xaxis={xaxis}
            barData={barData}
            lineData={lineData}
          />
        </div>
      </div>
    );
  }
}

ReleaseRate.propTypes = {};
ReleaseRate.defaultProps = {};
