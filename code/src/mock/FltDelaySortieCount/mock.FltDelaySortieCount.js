
const rurl = '/pc/fltDelaySortieCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = {
        "oneHour": Random.integer(0,20),
        "thanOneHour": Random.integer(0,20),
        "thanTwoHour": Random.integer(0,20),
        "thanFour": Random.integer(0,20),
    }
    
    // return {"thanOneHour":0,"oneHour":11,"thanFour":1,"thanTwoHour":0}
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