var globalTimer = {
    taxiingFlightCount: 30000, //重要节点航班实时概览
    fltSafeguardAnalyze: 30000,//航班保障实时分析
    psgEnterOutCount: 30000,//旅客进出港统计
    psgHourlyDistribution: 30000,//今日旅客小时分布
    carPoolLeisureRate: 30000,//蓄车池实时空闲率分析
    positionUsedInfo: 30000,//机位空闲情况实时分析
    positionTotalityByBridgeRate: 30000,//今日靠桥率
    parkLeisureRate: 30000,//停车场实时空闲率分析
    lugCheckHourlyCount: 30000,//行李分拣系统每小时处理行李总数
    lugCheckPassList: 30000,//行李安检通过率分析
    currentGateUseCount: 30000,//当前登机口使用航班数量统计
    boardingGateHourlyCount: 30000,//登机口使用数量小时分布
    leaveOverstocked: 30000,  // 今日出港积压
    fltDelaySortieCountDelay:30000,//今日延误航班概览
    enterPsgFlowAnalyze:30000,// 今日到港旅客流量分析
    psgSecCheckAnalysis:30000,//安检效能分析
    mainStreetFlow: 30000, // 白云机场主干道车流总量分析
    headerInterval:30000,//头部
    hotelInterval:30000,//酒店
    runwayHourlySortie: 30000, // 每日每小时跑道分析
    // 消息通知新配置
    // 每一个阶段的动画时间
    infoTime:'1.5s', 
    // 每一阶段动画的间隔
    infoInterval: 2000,
    // 本次请求无数据，延迟一段时间再请求
    infoNodataInterval: 2000,
    eachLugUsedFlightNum: 30000, //行李转盘使用航班数量实时分析
    LadderControlEquipmentInterval:30000,//梯控设备
}