/**
 Crate by wanjikun on 19/12/10.
*/
import './Header.scss';
export default class Header extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'Header'}>
        <div className="leftCont">
            <div className="logo"></div>
            <div className="logoTit">白云机场生产可视化分析系统</div>
        </div>
        <div className="middleCont">
        </div>
        <div className="rightCont">
        </div>   
     </div>
   )
 }
}

Header.propTypes = {}
Header.defaultProps = {}