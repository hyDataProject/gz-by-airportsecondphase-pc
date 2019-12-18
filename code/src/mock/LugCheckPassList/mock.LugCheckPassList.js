/* Created by zhangqin on 2019/12/18.*/
const rurl = '/pc/lugCheckPassList';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = [];
    for(var i = 0; i < 9; i++){
        data.push({
            island: Random.character()+'岛',//值机岛
            fifteen: Random.float(0, 100, 0, 2),//15分钟内通过率
            oneHour: Random.float(0, 100, 0, 2)//1小时内通过率
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