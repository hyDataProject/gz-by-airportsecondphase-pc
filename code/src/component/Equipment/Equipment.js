/**
 Crate by wanjikun on 19/12/11.
*/
import { LadderControlEquipment } from "com/index";
import './Equipment.scss'
export default class Equipment extends Component{
 constructor(props) {
   super(props);
   this.state = {
    terminal:'T1'
   }
 }

 componentDidMount() {
 }

 render() {
    let {terminal} = this.state;
   return(
     <div className={'Equipment'}>
        <div className="BaggageCheckMachine">托运行李安检机实时运行状态分析</div>
        <div className="LadderControlEquipment">
            <LadderControlEquipment terminal={terminal}></LadderControlEquipment>
        </div>
        <div className="BoardingBridgeStatus">登机桥实时运行状态分析</div>
    </div>
   )
 }
}

Equipment.propTypes = {}
Equipment.defaultProps = {}