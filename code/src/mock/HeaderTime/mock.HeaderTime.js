
const rurl = '/pc/getCurrentTime';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = {
        "day": '2019.12.10',
        "time": '16:40',
        "weather": '雾',
        "temperature": '13℃-22℃',
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