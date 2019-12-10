/**
 Crate by wanjikun on 19/12/10.
*/
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