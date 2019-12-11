import "./PsgSecCheckAnalysis.scss";
import { TitleCom } from "com";

export default class PsgSecCheckAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.psgSecCheckAnalysis);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddress[0].url + `/pc/psgSecCheckAnalysis/${this.props.terminal}`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        console.log("psg:", data);
        this.setState({});
      }
    });
  }

  render() {
    return (
      <div className={"PsgSecCheckAnalysis"}>
        <TitleCom title="安检效能分析" />
        <div className={"PsgSecCheckAnalysisBox"}></div>
      </div>
    );
  }
}

PsgSecCheckAnalysis.propTypes = {};
PsgSecCheckAnalysis.defaultProps = {};
