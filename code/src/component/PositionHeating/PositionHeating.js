/**
 Crate by wanjikun on 19/12/11.
*/
import './PositionHeating.scss'
export default class PositionHeating extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'PositionHeating'}>
        <div className="spareTime">机位空闲情况</div>
        <div className="bridgeRate">精日靠桥率</div>
        <div className="keyAirlines">今日重点航司靠桥率分析</div>
        <div className="msg">消息通告</div>
    </div>
   )
 }
}

PositionHeating.propTypes = {}
PositionHeating.defaultProps = {}