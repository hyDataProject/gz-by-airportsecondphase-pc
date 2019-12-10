/**
 Crate by wanjikun on 19/12/10.
*/
import { TitleCom  } from "com/index";
import './FlyContAirplane.scss';
import { ImportantNodeFlight,FlightSecurity } from "com/index";
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
            <ImportantNodeFlight />
        </div>  
        <div className="FlightGuarantee">
            <FlightSecurity />
        </div>
        <div className="Backlog">
            出港积压
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