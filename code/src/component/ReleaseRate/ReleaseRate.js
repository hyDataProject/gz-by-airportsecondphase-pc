import "./ReleaseRate.scss";
import { TitleCom } from "com/index";
import ReleaseRateLine from "./ReleaseRateBarLine";

export default class ReleaseRate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className={"ReleaseRate"}>
        <TitleCom title="今日出港积压" />
        <div className={"ReleaseRateBox"}>
          <ReleaseRateLine />
        </div>
      </div>
    );
  }
}

ReleaseRate.propTypes = {};
ReleaseRate.defaultProps = {};
