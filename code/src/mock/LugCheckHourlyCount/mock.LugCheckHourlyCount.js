/* Created by zhangqin on 2019/12/18.*/
const rurl = '/pc/lugCheckHourlyCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = [];
    for(var i = 0; i < 12; i++){
        data.push({
            "hour": (i+1)*2+'h',
            "amount": Random.integer(0,800),
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