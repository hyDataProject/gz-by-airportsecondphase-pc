/**
 Crate by wanjikun on 19/12/11.
*/
import './Equipment.scss'
export default class Equipment extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'Equipment'}>
        <div className="BaggageCheckMachine">托运行李安检机实时运行状态分析</div>
        <div className="LadderControlEquipment">梯控设备实时运行状态分析</div>
        <div className="BoardingBridgeStatus">登机桥实时运行状态分析</div>
    </div>
   )
 }
}

Equipment.propTypes = {}
Equipment.defaultProps = {}