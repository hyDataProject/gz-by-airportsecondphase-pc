/**
 Crate by wanjikun on 19/12/11.
*/
import './BoardingGate.scss'
import {CurrentGateUseCountCom} from 'com/index';
export default class BoardingGate extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'BoardingGate'}>
        <div className="currentBoardingGate">
            <CurrentGateUseCountCom />
        </div>
    </div>
   )
 }
}

BoardingGate.propTypes = {}
BoardingGate.defaultProps = {}