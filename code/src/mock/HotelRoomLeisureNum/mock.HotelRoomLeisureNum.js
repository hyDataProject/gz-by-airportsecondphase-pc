
const rurl = '/pc/hotelRoomLeisureNum';
const rtype = 'get';
let Random = Mock.Random

function createData(){
    let data = [
        {
            "hotelName": "香榭丽",
            "leisureRoomNum": 7
        },
        {
            "hotelName": "铂尔曼",
            "leisureRoomNum": 35
        },
        {
            "hotelName": "城市便捷",
            "leisureRoomNum": 35
        },
        {
            "hotelName": "广州汉群",
            "leisureRoomNum": 49
        },
        {
            "hotelName": "广州飞航",
            "leisureRoomNum": 77
        },
        {
            "hotelName": "远方的家",
            "leisureRoomNum": 86
        },
        {
            "hotelName": "广州宜客",
            "leisureRoomNum": 94
        },
        {
            "hotelName": "广州名利",
            "leisureRoomNum": 115
        },
        {
            "hotelName": "广州逸云",
            "leisureRoomNum": 131
        },
        {
            "hotelName": "尚品假日",
            "leisureRoomNum": 257
        }
    ]
    
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