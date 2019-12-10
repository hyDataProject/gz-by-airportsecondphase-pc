/**
 Crate by wanjikun on 19/12/09.
*/
import {Switch,Route} from 'react-router-dom';
import { TerminalContPassengerService } from "com/index";
import './TerminalCont.scss';
export default class TerminalCont extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
    <div className={'TerminalCont'}>
        <div className="leftCon">
            <div className="leftConNav"></div>
            <div className="leftConRoute">
              <Switch>
                  <Route path="/" component={TerminalContPassengerService}/>
              </Switch>
            </div>
        </div>
        <div className="rightCon">
            
        </div>
    </div>
   )
 }
}

TerminalCont.propTypes = {}
TerminalCont.defaultProps = {}