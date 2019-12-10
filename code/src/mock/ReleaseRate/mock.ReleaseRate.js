//行李安检机模块通过率mock

const rurl = "/pc/leaveOverstocked";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = {
    xaxis: [],
    flightOverstockTotal: [],
    flightOverstockHour: []
  };
  for (let i = 9; i < 16; i++) {
    let number = Random.integer(0, 10);
    obj.xaxis.push("0" + i + "时");
    obj.flightOverstockTotal.push(number + Random.integer(0, 10));
    obj.flightOverstockHour.push(number);
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
