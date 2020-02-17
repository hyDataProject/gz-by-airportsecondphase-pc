/* Created by zhangqin on 2019/12/10 */
const rurl = '/pc/taxiingFlightCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = {
        "leaveTaxiing": Random.integer(0,10000),//出港航班数
        "arriveTaxiing": Random.integer(0,10000),//进港航班数
        "safeguard": Random.integer(0,10000),//保障中
        "overnight": Random.integer(0,10000),//过夜停场航班数
    }
    return data
}

const cb = (e) => {
    let template = {
        code: 0,
        msg: 'success',
        result: createData()
    }
    return template
}

export {
    rurl,
    rtype,
    cb,
}