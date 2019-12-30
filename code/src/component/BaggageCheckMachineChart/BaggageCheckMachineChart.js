import "./BaggageCheckMachineChart.scss";
import { TitleCom } from "com/index";
import BaggageCheckMachinePie from "./BaggageCheckMachinePie";

export default class BaggageCheckMachineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this._getData();
    this.timer = setInterval(() => {
      this._getData();
    }, globalTimer.checkMachineStatus);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  _getData() {
    axios({
      //进港每小时放行概览
      method: "get",
      url: realAddressUrlOne + `/pc/checkMachineStatus/${this.props.terminal}`
    }).then(result => {
      if (result.data.code == 0) {
        const data = result.data.result;
        this.setState({
          data: data
        });
      }
    });
  }

  render() {
    return (
      <div className={"BaggageCheckMachineChart"}>
        <TitleCom title="托运行李安检机实时运行状态分析" />
        <BaggageCheckMachinePie data={this.state.data} />
      </div>
    );
  }
}

BaggageCheckMachineChart.propTypes = {};
BaggageCheckMachineChart.defaultProps = {};
