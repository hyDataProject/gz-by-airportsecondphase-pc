import "./MainStreetFlow.scss";
import { TitleCom } from "com";
import MainStreetFlowLine from "./MainStreetFlowLine";

export default class MainStreetFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      totalFlow: [],
      type: 1
    };
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.mainStreetFlow);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddress[0].url + `/pc/mainStreetFlow/${this.state.type}`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        let time = [],
          totalFlow = [];
        data &&
          data.forEach((ele, index) => {
            time.push(ele.time);
            totalFlow.push(ele.totalFlow);
          });
        this.setState({
          time,
          totalFlow
        });
      }
    });
  }

  handleClick(e) {
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
    const { type, time, totalFlow } = this.state;
    return (
      <div className={"MainStreetFlow"}>
        <TitleCom title="白云机场主干道车流总量分析" />
        <div className={"MainStreetFlow-BtnBox"}>
          <div
            onClick={this.handleClick.bind(this, 2)}
            className={"MainStreetFlow-Btn" + (type == 2 ? " active" : "")}
          >
            今年
          </div>
          <div
            onClick={this.handleClick.bind(this, 1)}
            className={"MainStreetFlow-Btn" + (type == 1 ? " active" : "")}
          >
            本月
          </div>
        </div>
        <div className={"MainStreetFlowBox"}>
          <MainStreetFlowLine time={time} totalFlow={totalFlow} type={type}/>
        </div>
      </div>
    );
  }
}

MainStreetFlow.propTypes = {};
MainStreetFlow.defaultProps = {};
