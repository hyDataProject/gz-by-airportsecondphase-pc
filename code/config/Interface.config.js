
/*
 * 这个文档为了设置接口，真实接口和mock接口
 * true开启mock接口 false关闭mock接口
 * InterfaceSwitch全局启用mock
 * InterfaceList，当全局mock开启时，每个接口是否使用mock或是真实
 * */

export let InterfaceSwitch;
if (NODE_ENV === "pro") {
  InterfaceSwitch = mock;
} else {
  InterfaceSwitch = true;
}
export const InterfaceList = {
  /* 张琴开始 */
  TaxiingFlightCount: true,
  FltSafeguardAnalyze: true,
  PsgEnterOutCount: true,
  PsgHourlyDistribution: true,
  CarPoolLeisureRate: true,
  PositionUsedInfo: true,
  PositionTotalityByBridgeRate: true,
  LugCheckHourlyCount: true,
  LugCheckPassList: true,
  CurrentGateUseCount: true,
  BoardingGateHourlyCount: true,
  /* 张琴结束 */
  ReleaseRate: true, 
  FltDelaySortieCount:true,
  EnterPsgFlowAnalyze: true,
  PsgSecCheckAnalysis: true,
  MainStreetFlow: true,
  ParkLeisureRate: true,
  RunwayHourlySortie: true,
  EachLugUsedFlightNum: true,
  /**万吉坤开始 */
  HeaderTime:true,
  HotelRoomLeisureNum:true,
  Login:true,
  GetElevatorRunStatus:true,
  BoardingBridgeRunStatus:true,
  /**万吉坤结束 */
  /**缪佳耕开始 */
  PositionChange:true,
  /**缪佳耕结束 */
};
