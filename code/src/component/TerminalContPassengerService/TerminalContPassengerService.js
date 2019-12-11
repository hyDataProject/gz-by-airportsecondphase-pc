/**
 Crate by wanjikun on 19/12/10.
*/
import './TerminalContPassengerService.scss';
import {PassengerImportOrExport,PassengerHourDistribution} from 'com/index'
export default class TerminalContPassengerService extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'TerminalContPassengerService'}>
        <div className="inAndOut">
            <PassengerImportOrExport />
        </div>
        <div className="PassengersToday">
            <PassengerHourDistribution />
        </div>
        <div className="TodayArrive">
            今日到港旅客流量分析
        </div>
        <div className="SecurityEffectiveness">
            安检效能分析
        </div>
    </div>
   )
 }
}

TerminalContPassengerService.propTypes = {}
TerminalContPassengerService.defaultProps = {}