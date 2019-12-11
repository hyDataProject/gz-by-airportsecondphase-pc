/* Created by zhangqin on 2019/12/10 */
const rurl = '/pc/psgEnterOutCount';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = {
        "lastOut": Random.integer(0,10000),//过去两小时出港
        "lastEnter": Random.integer(0,10000),//过去两小时进港
        "futureOut": Random.integer(0,10000),//未来两小时出港
        "futureEnter": Random.integer(0,10000),//未来两小时出港
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