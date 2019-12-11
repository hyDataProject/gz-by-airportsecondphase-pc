import "./EnterPsgFlowAnalyze.scss";
import { TitleCom } from "com";

export default class EnterPsgFlowAnalyze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.enterPsgFlowAnalyze);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddress[0].url + `/pc/enterPsgFlowAnalyze/${this.props.terminal}`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        console.log("enter:", data);
        this.setState({});
      }
    });
  }

  render() {
    return (
      <div className={"EnterPsgFlowAnalyze"}>
        <TitleCom title="今日到港旅客流量分析" />
        <div className={"EnterPsgFlowAnalyzeBox"}></div>
      </div>
    );
  }
}

EnterPsgFlowAnalyze.propTypes = {};
EnterPsgFlowAnalyze.defaultProps = {};
