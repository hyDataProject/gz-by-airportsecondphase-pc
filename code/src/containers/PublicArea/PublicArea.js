/**
 Crate by wanjikun on 19/12/09.
*/
import {Switch,Route} from 'react-router-dom';
import './PublicArea.scss';
import {HotelFreeRate,CarPoolFree} from 'com/index';
export default class PublicArea extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'PublicArea'}>
        <div className="leftCon">
            <div className="leftConNav"></div>
            <div className="leftConRoute">
              <div className="ParkingLot">
                 停车场实时空闲率分析
              </div>
              <div className="Hotel">
                 <HotelFreeRate />
              </div>
              <div className="StorageTank">
                 <CarPoolFree />
              </div>
              <div className="Traffic">
                 白云机场主干道车流总量分析
              </div>
            </div>
        </div>
        <div className="rightCon">
            
        </div>
    </div>
   )
 }
}

PublicArea.propTypes = {}
PublicArea.defaultProps = {}