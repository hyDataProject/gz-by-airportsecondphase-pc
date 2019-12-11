/**
 Crate by wanjikun on 19/12/10.
*/
import './Header.scss';
import logo from "img/logo.png";
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
 constructor(props) {
   super(props);
    this.state={
        selectShow:false,
        defaultActive:0
    }
 }
componentWillMount(){
    // console.log('props',this.props);
}

 componentDidMount() {
    document.body.addEventListener('click', e => { 
        if (!(e.target && (e.target.matches('.toggleItem') || e.target.matches('.navlink') || e.target.matches('.toggleSelect')))) { 
            this.setState({
                selectShow:false,
            }) 
        }             
    }); 
 }
toggleSelectShow=()=>{
    let {selectShow} = this.state;
    this.setState({
        selectShow:!selectShow
    })
}
 render() {
    let {selectShow,defaultActive} = this.state;
   return(
     <div className={'Header'}>
        <div className="leftCont">
            <div className="logo">
                <img className="logoPng" src={logo}></img>
            </div>
            <div className="logoTit">白云机场生产可视化分析系统</div>
        </div>
        <div className="middleCont">
            <div className="middleContItem">
                综合运行态势
            </div>
            <div className="middleContItem threeArea active">
                <div onClick={this.toggleSelectShow} className="toggleSelect">场区运行监控</div>
                <div className={selectShow ? "selectCont active" : "selectCont"}>
                    <div className="toggleItem"><NavLink className="navlink" to={"/main/terminalCont"}>航站区</NavLink></div>
                    <div className="toggleItem"><NavLink className={defaultActive === 1 ? "navlink active" : "navlink"} to={"/main/flyCont"}>飞行区</NavLink></div>
                    <div className="toggleItem"><NavLink  className="navlink" to={"/main/publicArea"}>公共区</NavLink></div>
                </div>
            </div>
            <div className="middleContItem">五大业务流程</div>
        </div>
        <div className="rightCont">
        </div>   
     </div>
   )
 }
}

Header.propTypes = {}
Header.defaultProps = {}