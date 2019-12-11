//行李安检机模块通过率mock

const rurl = "/pc/mainStreetFlow";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = [];
  let number = Random.integer(1, 31);
  for (let i = 1; i < number; i++) {
    let data = {
      time: i,
      totalFlow: Random.integer(0, 20)
    };
    obj.push(data);
  }
  return obj;
}

const cb = e => {
  let template = {
    code: 0,
    msg: "调用成功!",
    result: createData()
  };
  return template;
};

export { rurl, rtype, cb };
