/* Created by zhangqin on 2019/12/11 */
const rurl = '/pc/carPoolLeisureRate';
const rtype = 'get';
let Random = Mock.Random
var name = ["A到达","B到达","T2到达"]
function createData(){
    let data = []
    for(let i=0;i<3;i++){
        data.push({
            "name": name[i],//蓄车池名称
            "inPool": Random.integer(0,100),//在场车辆
            "need": Random.integer(0,100),//当前需求
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