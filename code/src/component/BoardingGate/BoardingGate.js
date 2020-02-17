/**
 Crate by wanjikun on 19/12/11.
*/
import './BoardingGate.scss'
import {CurrentGateUseCountCom} from 'com/index';
export default class BoardingGate extends Component{
 constructor(props) {
   super(props);
    this.state={
        terminal:'T2'
    }
 }

 componentDidMount() {
    let that = this;
    byjc_cq.on(monitorType, function (msg) {
        console.log('websocket',msg);
        
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
   return(
     <div className={'BoardingGate'}>
        <div className="currentBoardingGate">
            <CurrentGateUseCountCom terminal={terminal}/>
        </div>
    </div>
   )
 }
}

BoardingGate.propTypes = {}
BoardingGate.defaultProps = {}