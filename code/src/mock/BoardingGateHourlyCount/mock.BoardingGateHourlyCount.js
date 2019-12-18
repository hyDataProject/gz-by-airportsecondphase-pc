/* Created by zhangqin on 2019/12/18.*/
const rurl = '/pc/boardingGateHourlyCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = [];
    for(var i = 0; i < 24; i++){
        data.push({
            hours: Random.integer(0,23),//值机岛
            farNum: Random.integer(0,1000),//远机位航班数
            nearNum: Random.integer(0,1000)//近机位航班数
        })
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