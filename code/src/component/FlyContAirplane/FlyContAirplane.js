/**
 Crate by wanjikun on 19/12/10.
*/
import './FlyContAirplane.scss';
import { ImportantNodeFlight,FlightSecurity,FlightDelayCom, ReleaseRate } from "com/index";
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
            <ReleaseRate />
        </div> 
        <div className="FlightDelay">
            <FlightDelayCom></FlightDelayCom>
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