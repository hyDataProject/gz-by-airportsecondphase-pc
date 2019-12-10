/**
 Crate by wanjikun on 19/12/10.
*/
import { TitleCom, ReleaseRate  } from "com/index";
import './FlyContAirplane.scss';
export default class FlyContAirplane extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
    <div className={'FlyContAirplane'}>
        <div className="FlightOverview">
            重要节点航班实时概览
        </div>  
        <div className="FlightGuarantee">
            航班保障实时分析
        </div>
        <div className="Backlog">
            <ReleaseRate />
        </div> 
        <div className="FlightDelay">
            <TitleCom title="今日延误航班概览"></TitleCom>
            今日航班延误概览
        </div>
        <div className="VehicleProtection">
            {/* 保障车辆实时分析 这块先放着不做 */}
        </div>  
    </div>
   )
 }
}

FlyContAirplane.propTypes = {}
FlyContAirplane.defaultProps = {}