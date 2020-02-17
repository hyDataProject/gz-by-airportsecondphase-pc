import "./PsgSecCheckAnalysis.scss";
import { TitleCom } from "com";
import axiosToken from "js/axiosToken";

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
    this._getData(this.props.terminal);
    this.timer = setInterval(() => {
      this._getData(this.props.terminal);
    }, globalTimer.psgSecCheckAnalysis);
  }
  componentWillReceiveProps(nextProps){
    if (this.props.terminal !== nextProps.terminal) {
        this.reloadId && clearInterval(this.reloadId);
        this._getData(nextProps.terminal);
        this.reloadId = setInterval(() => {
            this._getData(nextProps.terminal);
        }, globalTimer.psgHourlyDistribution)
    }
 }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData(terminal) {
    axiosToken({
      //进港每小时放行概览
      method: "get",
      url: realAddressUrlOne + `/pc/psgSecCheckAnalysis/${terminal}`
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
          <thead>
            <tr className={"PsgSec-Head"}>
              <th>地点</th>
              <th>安检口</th>
              <th>平均通过</th>
              <th>未来一小时</th>
            </tr>
          </thead>
          <tbody>{option}</tbody>
        </table>
      </div>
    );
  }
}

PsgSecCheckAnalysis.propTypes = {};
PsgSecCheckAnalysis.defaultProps = {};
