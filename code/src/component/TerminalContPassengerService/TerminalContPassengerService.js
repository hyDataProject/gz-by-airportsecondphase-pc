/**
 Crate by wanjikun on 19/12/10.
*/
import './TerminalContPassengerService.scss';
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
            进出港的柱图
        </div>
        <div className="PassengersToday">
            今日旅客小时分布
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