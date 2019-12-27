/**
 * 本处是说明：
 * import进行组件导入，export组件同名导出
 * import 组件名称 from '组件路径'
 * export{
 * 组件名称
 * }
 * 每一个组件名称最后必须以,结尾
 */
/* 张琴开始 */
import * as TaxiingFlightCount from './TaxiingFlightCount/mock.TaxiingFlightCount.js';
import * as FltSafeguardAnalyze from './FltSafeguardAnalyze/mock.FltSafeguardAnalyze.js';
import * as PsgEnterOutCount from './PsgEnterOutCount/mock.PsgEnterOutCount.js';
import * as PsgHourlyDistribution from './PsgHourlyDistribution/mock.PsgHourlyDistribution.js';
import * as CarPoolLeisureRate from './CarPoolLeisureRate/mock.CarPoolLeisureRate.js';
import * as PositionUsedInfo from './PositionUsedInfo/mock.PositionUsedInfo.js';
import * as PositionTotalityByBridgeRate from './PositionTotalityByBridgeRate/mock.PositionTotalityByBridgeRate';
import * as LugCheckHourlyCount from './LugCheckHourlyCount/mock.LugCheckHourlyCount';
import * as LugCheckPassList from './LugCheckPassList/mock.LugCheckPassList';
import * as CurrentGateUseCount from './CurrentGateUseCount/mock.CurrentGateUseCount';
import * as BoardingGateHourlyCount from './BoardingGateHourlyCount/mock.BoardingGateHourlyCount';
/* 张琴结束 */
// 万吉坤开始
import * as FltDelaySortieCount from './FltDelaySortieCount/mock.FltDelaySortieCount';
import * as HeaderTime from './HeaderTime/mock.HeaderTime';
import * as HotelRoomLeisureNum from "./HotelRoomLeisureNum/mock.HotelRoomLeisureNum";
import * as Login from "./Login/mock.Login";
import * as GetElevatorRunStatus from "./GetElevatorRunStatus/mock.GetElevatorRunStatus";
import * as BoardingBridgeRunStatus from "./BoardingBridgeRunStatus/mock.BoardingBridgeRunStatus";
import * as PositionAirlineByBridgeRate from "./PositionAirlineByBridgeRate/mock.positionAirlineByBridgeRate";
import * as BaggageTurntableUsed from "./BaggageTurntableUsed/mock.BaggageTurntableUsed";

// 万吉坤结束

// 昝家威开始
import * as ReleaseRate from './ReleaseRate/mock.ReleaseRate';
import * as PsgSecCheckAnalysis from './PsgSecCheckAnalysis/mock.PsgSecCheckAnalysis';
import * as EnterPsgFlowAnalyze from './EnterPsgFlowAnalyze/mock.EnterPsgFlowAnalyze';
import * as MainStreetFlow from './MainStreetFlow/mock.MainStreetFlow';
import * as ParkLeisureRate from './ParkLeisureRate/mock.ParkLeisureRate';
import * as RunwayHourlySortie from './RunwayHourlySortie/mock.RunwayHourlySortie';
import * as EachLugUsedFlightNum from './EachLugUsedFlightNum/mock.EachLugUsedFlightNum';
// 昝家威结束

/** 缪佳耕开始 */
import * as PositionChange from './PositionChange/mock.PositionChange'
/** 缪佳耕结束 */

export {
    /* 张琴开始 */
    TaxiingFlightCount,
    FltSafeguardAnalyze,
    PsgEnterOutCount,
    PsgHourlyDistribution,
    CarPoolLeisureRate,
    PositionUsedInfo,
    PositionTotalityByBridgeRate,
    LugCheckHourlyCount,
    LugCheckPassList,
    CurrentGateUseCount,
    BoardingGateHourlyCount,
    /* 张琴结束 */

    // 昝家威开始
    ReleaseRate,
    PsgSecCheckAnalysis,
    EnterPsgFlowAnalyze,
    MainStreetFlow,
    ParkLeisureRate,
    RunwayHourlySortie,
    EachLugUsedFlightNum,
    // 昝家威结束
    // 万吉坤开始
    FltDelaySortieCount,
    HeaderTime,
    HotelRoomLeisureNum,
    Login,
    GetElevatorRunStatus,
    BoardingBridgeRunStatus,
    PositionAirlineByBridgeRate,
    BaggageTurntableUsed,
    // 万吉坤结束
    
    /** 缪佳耕开始 */
    PositionChange,
    /** 缪佳耕结束 */
}
