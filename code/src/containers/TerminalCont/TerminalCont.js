/**
 Crate by wanjikun on 19/12/09.
*/
import {Switch,Route} from 'react-router-dom';
import { TerminalContPassengerService,Luggage,BoardingGate,Equipment } from "com/index";
import './TerminalCont.scss';
export default class TerminalCont extends Component{
 constructor(props) {
   super(props);
    this.state={
        moduleActive:null
    }
 }

 componentDidMount() {
 }
componentWillMount(){
    let str = this.props.location.pathname
    let path = str.substring(str.lastIndexOf("/"));
    let activeIndex=0;
    switch (path) {
        case '/TerminalContPassengerService':
            activeIndex = 0;
            break;
        case '/luggage':
            activeIndex = 1;
            break;
        case '/equipment':
            activeIndex = 2;
            break;
        case '/boardingGate':
            activeIndex = 3;
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
        case 'TerminalContPassengerService':
            activeIndex = 0;
            path="/main/terminalCont/TerminalContPassengerService";
            break;
        case 'luggage':
            activeIndex = 1;
            path="/main/terminalCont/luggage";
            break;
        case 'equipment':
            activeIndex = 2;
            path="/main/terminalCont/equipment";
            break;
        case 'boardingGate':
            activeIndex = 3;
            path="/main/terminalCont/boardingGate";
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
    <div className={'TerminalCont'}>
        <div className="leftCon">
            <div className="leftConNav">
                <div className={moduleActive === 0 ? "leftNavItemTop active" : "leftNavItemTop"}>
                    <div onClick={()=>this.go('TerminalContPassengerService')}>旅客服务</div>
                </div>
                <div className={moduleActive === 1 ? "leftNavItem active" : "leftNavItem"}>
                    <div onClick={()=>this.go('luggage')}>行李流分析</div>
                </div>
                <div className={moduleActive === 2 ? "leftNavItem btm active" : "btm leftNavItem"}>
                    <div onClick={()=>this.go('equipment')}>设施设备</div>
                </div>
                <div className={moduleActive === 3 ? "leftNavItem boardingGate active" : "boardingGate leftNavItem"}>
                    <div onClick={()=>this.go('boardingGate')}>登机口数量</div>
                </div>
            </div>
            <div className="leftConRoute">
              <div className="topBorderLine"></div>
              <div className="leftBorderLine"></div>
              <Switch>
                  <Route path="/main/terminalCont/TerminalContPassengerService" component={TerminalContPassengerService}/>
                  <Route path="/main/terminalCont/Luggage" component={Luggage}/>
                  <Route path="/main/terminalCont/BoardingGate" component={BoardingGate}/>
                  <Route path="/main/terminalCont/Equipment" component={Equipment}/>
                  <Route path="/" component={TerminalContPassengerService}/>
              </Switch>
            </div>
        </div>
        <div className="rightCon">
            <iframe width="1625" height="944" src={realAddress[1].url+'/terminalArea.html'}></iframe>
        </div>
    </div>
   )
 }
}

TerminalCont.propTypes = {}
TerminalCont.defaultProps = {}