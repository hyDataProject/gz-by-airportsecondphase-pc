import "./EnterPsgFlowAnalyze.scss";
import { TitleCom } from "com";
import EnterPsgFlowAnalyzeLine from "./EnterPsgFlowAnalyzeLine";

export default class EnterPsgFlowAnalyze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        E1: [],
        E3: [],
        W1: [],
        W2: [],
        W3: [],
        hour: []
      }
    };
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
        let dataObj = {
          E1: [],
          E3: [],
          W1: [],
          W2: [],
          W3: [],
          hour: []
        };
        data.forEach(ele => {
          for (let key in ele) {
            dataObj[key].push(ele[key]);
          }
        });
        this.setState({
          data: dataObj
        });
      }
    });
  }

  render() {
    return (
      <div className={"EnterPsgFlowAnalyze"}>
        <TitleCom title="今日到港旅客流量分析" />
        <div className={"EnterPsgFlowAnalyzeBox"}>
          <EnterPsgFlowAnalyzeLine data={this.state.data} />
        </div>
      </div>
    );
  }
}

EnterPsgFlowAnalyze.propTypes = {};
EnterPsgFlowAnalyze.defaultProps = {};
