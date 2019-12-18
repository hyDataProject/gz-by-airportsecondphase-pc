/**
 Crate by wanjikun on 19/12/09.
*/
import './FlyCont.scss';
import {Switch,Route,NavLink,HashRouter} from 'react-router-dom';
import { FlyContAirplane,RunWay,PositionHeating } from "com/index";
export default class FlyCont extends Component{
 constructor(props) {
   super(props);
   this.state={
       moduleActive:null
   }
 }

 componentDidMount() {
 }
componentWillMount(){
    this.setMoudleActive()
}
setMoudleActive=()=>{
    let str = this.props.location.pathname
    let path = str.substring(str.lastIndexOf("/"));
    let activeIndex=0;
    switch (path) {
        case '/airplane':
            activeIndex = 0;
            break;
        case '/positionHeating':
            activeIndex = 1;
            break;
        case '/runway':
            console.log(',lklvfkjkjkf');
            activeIndex = 2;
            break;
        default:
            break;
    }
    console.log('activeIndex',activeIndex);

    this.setState({
        moduleActive:activeIndex
    })
}
go=(e)=>{
    
    let activeIndex;let path;
    switch (e) {
        case 'air':
            activeIndex = 0;
            path="/main/flyCont/airplane";
            break;
        case 'positionHeating':
            activeIndex = 1;
            path="/main/flyCont/positionHeating";
            break;
        case 'runway':
            activeIndex = 2;
            path="/main/flyCont/runway";
            break;
        default:
            break;
    }
    this.setState({
        moduleActive:activeIndex
    },()=>{
        this.props.history.push(path)
    })
}

 render() {
    let {moduleActive} = this.state;
   return(
    <div className={'FlyCont'}>
        <div className="leftCon">
            <div className="leftConNav">
                <div className={moduleActive === 0 ? "leftNavItemTop active" : "leftNavItemTop"}>
                    <div onClick={()=>this.go('air')}>飞机</div>
                </div>
                <div className={moduleActive === 1 ? "leftNavItem active" : "leftNavItem"}>
                    <div onClick={()=>this.go('positionHeating')}>机位热力</div>
                </div>
                <div className={moduleActive === 2 ? "leftNavItem btm active" : "btm leftNavItem"}>
                    <div onClick={()=>this.go('runway')}>跑道</div>
                </div>
            </div>
            <div className="leftConRoute">
              <div className="topBorderLine"></div>
              <div className="leftBorderLine"></div>
              <HashRouter>
                <Switch>
                    <Route path="/main/flyCont/airplane" component={FlyContAirplane}/>
                    <Route path="/main/flyCont/runway" component={RunWay}/>
                    <Route path="/main/flyCont/positionHeating" component={PositionHeating}/>
                    <Route path="/" component={FlyContAirplane}/>
                </Switch>
              </HashRouter>
            </div>
        </div>
        <div className="rightCon">
            <iframe width="1526" height="944" src={realAddressUrlTwo+'/flightArea.html'}></iframe>
        </div>
    </div>
   )
 }
}

FlyCont.propTypes = {}
FlyCont.defaultProps = {}