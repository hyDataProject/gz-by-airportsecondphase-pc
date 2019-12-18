/* Created by zhangqin on 2019/12/18.*/
const rurl = '/pc/lugCheckHourlyCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = [];
    let currentTime = Random.integer(0,23),num = null;
    if((currentTime+1)/2 === 0){
        num = (currentTime+1)/2
    }else {
        num = currentTime/2
    }
    for(var i = 0; i < num; i++){
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