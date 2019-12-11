//行李安检机模块通过率mock

const rurl = "/pc/psgSecCheckAnalysis";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = {
    internalEast: {
      open: Random.integer(0, 10),
      total: Random.integer(0, 10),
      waitTime: Random.integer(0, 10),
      futrueOneHour: Random.integer(0, 10)
    },
    internalWest: {
      open: Random.integer(0, 10),
      total: Random.integer(0, 10),
      waitTime: Random.integer(0, 10),
      futrueOneHour: Random.integer(0, 10)
    },
    international: {
      open: Random.integer(0, 10),
      total: Random.integer(0, 10),
      waitTime: Random.integer(0, 10),
      futrueOneHour: Random.integer(0, 10)
    }
  };
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
