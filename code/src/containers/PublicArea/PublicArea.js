/**
 Crate by wanjikun on 19/12/09.
*/
import {Switch,Route} from 'react-router-dom';
import './PublicArea.scss';
import {HotelFreeRate,CarPoolFree,MainStreetFlow,ParkLeisureRate} from 'com/index';
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
            {/* <div className="leftConNav"></div> */}
            <div className="leftConRoute">
              <div className="ParkingLot">
                 <ParkLeisureRate />
              </div>
              <div className="Hotel">
                 <HotelFreeRate />
              </div>
              <div className="StorageTank">
                 <CarPoolFree />
              </div>
              <div className="Traffic">
                 <MainStreetFlow />
              </div>
            </div>
        </div>
        <div className="rightCon">
            <iframe width="1526" height="944" src={realAddressUrlTwo+'/tingchechang.html'}></iframe>
        </div>
    </div>
   )
 }
}

PublicArea.propTypes = {}
PublicArea.defaultProps = {}