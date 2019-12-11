/**
 Crate by wanjikun on 19/12/10.
*/
import './TerminalContPassengerService.scss';
import {PassengerImportOrExport, EnterPsgFlowAnalyze, PsgSecCheckAnalysis, PassengerHourDistribution} from 'com/index'
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
            <EnterPsgFlowAnalyze />
        </div>
        <div className="SecurityEffectiveness">
            <PsgSecCheckAnalysis />
        </div>
    </div>
   )
 }
}

TerminalContPassengerService.propTypes = {}
TerminalContPassengerService.defaultProps = {}