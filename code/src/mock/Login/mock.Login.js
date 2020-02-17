
const rurl = '/sys/login';
const rtype = 'post';
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
        code: 200,
        msg: 'success',
        "result": {
            "userInfo": {
                "id": "68a9bcf8ef605d1dfee2a2cec56c6425",
                "username": "haiyun",
                "realname": "海云测试",
                "password": "f7118fb6d576b5fb",
                "salt": "d35BLULf",
                "avatar": null,
                "birthday": null,
                "sex": null,
                "email": null,
                "phone": null,
                "status": 1,
                "delFlag": "0",
                "createBy": null,
                "createTime": "2019-11-05 09:41:38",
                "updateBy": null,
                "updateTime": null,
                "type": 0
            },
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzI5MzUxNjgsInVzZXJuYW1lIjoiaGFpeXVuIn0.C97XxnNhdvkEh2Z78zCG5-H0Wfs9nf1dTh26wSBDcQg"
        },
    }
    return template
}

export {
    rurl,
    rtype,
    cb,
}