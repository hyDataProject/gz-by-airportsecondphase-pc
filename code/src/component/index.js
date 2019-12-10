/**
 * 本处是说明：
 * import进行组件导入，export组件同名导出
 * import 组件名称 from '组件路径'
 * export{
 * 组件名称
 * }
 */
/*张琴-开始 */
import FlightSecurity from './FlightSecurity/FlightSecurity';
import ImportantNodeFlight from './ImportantNodeFlight/ImportantNodeFlight'
import PassengerImportOrExport from './PassengerImportOrExport/PassengerImportOrExport'
import PassengerHourDistribution from './PassengerHourDistribution/PassengerHourDistribution'
import HotelFreeRate from './HotelFreeRate/HotelFreeRate'
import CarPoolFree from './CarPoolFree/CarPoolFree'
/*张琴-结束 */

//万吉坤开始
import FlyContAirplane from "./FlyContAirplane/FlyContAirplane";
import TerminalContPassengerService from "./TerminalContPassengerService/TerminalContPassengerService";
import TitleCom from "./TitleCom/TitleCom";
import FlightDelayCom from "./FlightDelayCom/FlightDelayCom";
import PiechartCom from "./PiechartCom/PiechartCom";
import Header from "./Header/Header";
//万吉坤结束

// 昝家威开始
import ReleaseRate from './ReleaseRate/ReleaseRate'
// 昝家威结束

export {
    /*张琴-开始 */
    FlightSecurity,
    ImportantNodeFlight,
    PassengerImportOrExport,
    PassengerHourDistribution,
    HotelFreeRate,
    CarPoolFree,
    /*张琴-结束 */

    //万吉坤开始
    FlyContAirplane,
    TerminalContPassengerService,
    TitleCom,
    FlightDelayCom,
    PiechartCom,
    Header,
    //万吉坤结束
    // 昝家威开始
    ReleaseRate,
    // 昝家威结束
};
