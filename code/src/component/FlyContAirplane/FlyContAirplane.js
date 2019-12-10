/**
 Crate by wanjikun on 19/12/10.
*/
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
            今日航班延误概览
        </div>
        <div className="VehicleProtection">
            保障车辆实时分析
        </div>  
    </div>
   )
 }
}

FlyContAirplane.propTypes = {}
FlyContAirplane.defaultProps = {}