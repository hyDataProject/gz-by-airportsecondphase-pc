/**
 Crate by wanjikun on 19/12/11.
*/
import './PositionHeating.scss'
import {FreePlanPosition, OnTheBridgeRate, Notification} from 'com/index'
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
        <div className="keyAirlines">今日重点航司靠桥率分析</div>
        <div className="msg">
            <Notification />
        </div>
    </div>
   )
 }
}

PositionHeating.propTypes = {}
PositionHeating.defaultProps = {}