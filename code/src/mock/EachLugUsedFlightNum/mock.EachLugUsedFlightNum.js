//行李安检机模块通过率mock

const rurl = "/pc/eachLugUsedFlightNum";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = [];
  let num = Random.integer(2, 12);
  for (let i = 2; i < num; i++) {
    obj.push({
      name: i,
      fltNum: Random.integer(0, 12)
    });
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
