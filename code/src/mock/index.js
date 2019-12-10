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
/* 张琴结束 */

export {
    /* 张琴开始 */
    TaxiingFlightCount,
    FltSafeguardAnalyze,
    PsgEnterOutCount,
    PsgHourlyDistribution,
    /* 张琴结束 */
}
