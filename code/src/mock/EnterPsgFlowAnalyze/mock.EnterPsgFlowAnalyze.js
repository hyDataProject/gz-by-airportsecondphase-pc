//行李安检机模块通过率mock

const rurl = "/pc/enterPsgFlowAnalyze";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = [];
  let number = Random.integer(0, 23);
  for (let i = 0; i < number; i++) {
    let data = {
      hour: i + "h",
      E1: Random.integer(0, 20000),
      E3: Random.integer(0, 20000),
      W1: Random.integer(0, 20000),
      W2: Random.integer(0, 20000),
      W3: Random.integer(0, 20000)
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
