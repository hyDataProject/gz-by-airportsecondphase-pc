/**
 Crate by wanjikun on 19/12/11.
*/
import './BoardingGate.scss'
export default class BoardingGate extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'BoardingGate'}>
        <div className="currentBoardingGate">当前登机口使用航班数量统计</div>
    </div>
   )
 }
}

BoardingGate.propTypes = {}
BoardingGate.defaultProps = {}