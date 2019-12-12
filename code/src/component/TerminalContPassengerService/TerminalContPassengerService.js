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
            <PassengerImportOrExport terminal="T1" />
        </div>
        <div className="PassengersToday">
            <PassengerHourDistribution terminal="T1"/>
        </div>
        <div className="TodayArrive">
            <EnterPsgFlowAnalyze terminal="T1" />
        </div>
        <div className="SecurityEffectiveness">
            <PsgSecCheckAnalysis terminal="T1" />
        </div>
    </div>
   )
 }
}

TerminalContPassengerService.propTypes = {}
TerminalContPassengerService.defaultProps = {}