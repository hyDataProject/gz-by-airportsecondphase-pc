/**
 Crate by wanjikun on 19/12/10.
*/
import './TerminalContPassengerService.scss';
import {PassengerImportOrExport, EnterPsgFlowAnalyze, PsgSecCheckAnalysis, PassengerHourDistribution} from 'com/index'
export default class TerminalContPassengerService extends Component{
 constructor(props) {
   super(props);
    this.state={
        terminal:'T2'
    }
 }

 componentDidMount() {
    let that = this;
    byjc_cq.on(monitorType, function (msg) {
        console.log('msgg',msg);
        
      if (msg.data.area && msg.data.area === "PC_TA1") {
        that.setState({
            terminal:'T1'
        })
      }
      if (msg.data.area && msg.data.area === "PC_TA2") {
        that.setState({
            terminal:'T2'
        })
      }
    });
 }

 render() {
    let {terminal} = this.state;
    console.log('terminal',terminal);
    
   return(
     <div className={'TerminalContPassengerService'}>
        <div className="inAndOut">
            <PassengerImportOrExport terminal={terminal} />
        </div>
        <div className="PassengersToday">
            <PassengerHourDistribution terminal={terminal}/>
        </div>
        <div className="TodayArrive">
            <EnterPsgFlowAnalyze terminal={terminal} />
        </div>
        <div className="SecurityEffectiveness">
            <PsgSecCheckAnalysis terminal={terminal} />
        </div>
    </div>
   )
 }
}

TerminalContPassengerService.propTypes = {}
TerminalContPassengerService.defaultProps = {}