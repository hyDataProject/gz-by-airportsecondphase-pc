import "./PsgSecCheckAnalysis.scss";
import { TitleCom } from "com";

const area = [
  { key: "international", name: "国际" },
  { key: "internalEast", name: "国内东区" },
  { key: "internalWest", name: "国内西区" }
];

export default class PsgSecCheckAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
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
        this.setState({ data });
      }
    });
  }

  render() {
    const { data } = this.state;
    let option = area.map((ele, index) => {
      let oneData = data[ele.key];
      if (!oneData) return;
      return (
        <tr key={index} className={"PsgSec-Body"}>
          <td>{ele.name}</td>
          <td>
            {oneData.open || 0}/{oneData.total || 10}
          </td>
          <td>{oneData.waitTime}min</td>
          <td>{oneData.futrueOneHour}</td>
        </tr>
      );
    });
    return (
      <div className={"PsgSecCheckAnalysis"}>
        <TitleCom title="安检效能分析" />
        <table className={"PsgSecCheckAnalysisBox"}>
          <tr className={"PsgSec-Head"}>
            <th>地点</th>
            <th>安检口</th>
            <th>平均通过</th>
            <th>未来一小时</th>
          </tr>
          {option}
        </table>
      </div>
    );
  }
}

PsgSecCheckAnalysis.propTypes = {};
PsgSecCheckAnalysis.defaultProps = {};
