/**
 Crate by wanjikun on 19/12/11.
*/
import './RunWay.scss'
export default class RunWay extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'RunWay'}>
        <div className="runwayCont"></div>
     </div>
   )
 }
}

RunWay.propTypes = {}
RunWay.defaultProps = {}