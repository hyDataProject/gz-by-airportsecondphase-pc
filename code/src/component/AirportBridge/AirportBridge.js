import "./AirportBridge.scss";
import { TitleCom } from "com/index";
import ReleaseRateBarLine from './ReleaseRateBarLine';
import axiosToken from "js/axiosToken";

export default class AirportBridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xaxis: [],
      barData: [],
    };
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.positionAirlineByBridgeRate);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axiosToken({
      //进港每小时放行概览
      method: "get",
      url: realAddressUrlOne + `/pc/positionAirlineByBridgeRate`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        let rate = [],airline = [];
        data.map(ele=>{
          rate.push(ele.rate);
          airline.push(ele.airline);
        })
        this.setState({
          xaxis: airline,
          barData: rate,
        });
      }
    });
  }

  render() {
    const { xaxis, barData } = this.state;
    return (
      <div className={"AirportBridge"}>
        <TitleCom title="今日出港积压" />
        <div className={"ReleaseRateBox"}>
          <ReleaseRateBarLine
            xaxis={xaxis}
            barData={barData}
          />
        </div>
      </div>
    );
  }
}

AirportBridge.propTypes = {};
AirportBridge.defaultProps = {};
