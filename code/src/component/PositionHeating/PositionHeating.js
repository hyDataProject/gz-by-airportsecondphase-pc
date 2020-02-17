/**
 Crate by wanjikun on 19/12/11.
*/
import './PositionHeating.scss'
import {FreePlanPosition, OnTheBridgeRate, Notification,AirportBridge} from 'com/index'
export default class PositionHeating extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'PositionHeating'}>
        <div className="spareTime">
            <FreePlanPosition />
        </div>
        <div className="bridgeRate">
            <OnTheBridgeRate />
        </div>
        <div className="keyAirlines">
            <AirportBridge></AirportBridge>
        </div>
        <div className="msg">
            <Notification />
        </div>
    </div>
   )
 }
}

PositionHeating.propTypes = {}
PositionHeating.defaultProps = {}