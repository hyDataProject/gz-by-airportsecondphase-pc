/**
 Crate by wanjikun on 19/12/11.
*/
import './Luggage.scss'
export default class Luggage extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'Luggage'}>
        <div className="BaggageSortCom">行李分拣系统每小时处理行李总数</div>
        <div className="PassRate">行李安检通过率分析</div>
        <div className="EachLugUsed">行李转盘使用航班数量实时分析</div>
        <div className="BaggageTurntableUsed">行李转盘使用数量小时分布</div>
    </div>
   )
 }
}

Luggage.propTypes = {}
Luggage.defaultProps = {}