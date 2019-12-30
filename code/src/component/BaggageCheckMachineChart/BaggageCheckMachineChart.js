import "./BaggageCheckMachineChart.scss";
import { TitleCom } from "com/index";

export default class BaggageCheckMachineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xaxis: [],
      barData: [],
    };
  }

  componentDidMount() {
    // this._getData();
    // this.timer = setInterval(() => {
    //   this._getData();
    // }, globalTimer.positionAirlineByBridgeRate);
  }

  componentWillUnmount() {
    // this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
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

  renderCheckMachine=(data)=>{
      return data.map(ele=>{
          return <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.27 21.03">
                        <title>资源 2</title>
                        <g id="图层_2" data-name="图层 2">
                            <g id="图层_1-2" data-name="图层 1">
                                <path d="M1.81,21,2,21A2.1,2.1,0,0,0,4.4,19.33,43.9,43.9,0,0,1,10.93,3.4,2.1,2.1,0,0,0,10.41.54L10.22.41A2.11,2.11,0,0,0,8.48.06,2.08,2.08,0,0,0,7.22.92c-.54.8-1.41,2.53-1.89,3.34a.54.54,0,0,1-.51.26l-.61-.06a.89.89,0,0,0-.9.54L.17,12.37a.89.89,0,0,0,.18,1l.51.53a.53.53,0,0,1,.13.52c-.37,1.33-.69,2.7-1,4.1a2.12,2.12,0,0,0,.4,1.68A2.1,2.1,0,0,0,1.81,21Z" fill="aqua" />
                            </g>
                        </g>
                    </svg>
                </div>
      })
  }
  render() {
    const { xaxis, barData } = this.state;
    return (
      <div className={"BaggageCheckMachineChart"}>
        <TitleCom title="托运行李安检机实时运行状态分析" />
        <div className={"ReleaseRateBox"}>
            {
                this.renderCheckMachine([1,1,1,1,1,1,1,1,1,1,1,1,1])
            }
        </div>
      </div>
    );
  }
}

BaggageCheckMachineChart.propTypes = {};
BaggageCheckMachineChart.defaultProps = {};
