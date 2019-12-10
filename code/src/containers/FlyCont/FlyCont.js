/**
 Crate by wanjikun on 19/12/09.
*/
import './FlyCont.scss';
import {Switch,Route} from 'react-router-dom';
import { FlyContAirplane } from "com/index";
export default class FlyCont extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
    <div className={'FlyCont'}>
        <div className="leftCon">
            <div className="leftConNav"></div>
            <div className="leftConRoute">
              <Switch>
                  <Route path="/" component={FlyContAirplane}/>
              </Switch>
            </div>
        </div>
        <div className="rightCon">
            
        </div>
    </div>
   )
 }
}

FlyCont.propTypes = {}
FlyCont.defaultProps = {}