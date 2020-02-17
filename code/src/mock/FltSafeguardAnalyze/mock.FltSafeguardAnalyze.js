/* Created by zhangqin on 2019/12/10 */
const rurl = '/pc/fltSafeguardAnalyze';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = {
        "plan": Random.integer(0,1000),//今日计划
        "done": Random.integer(0,1000),//保障完成
        "working": Random.integer(0,1000),//保障中
        "wait": Random.integer(0,1000),//待保障
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