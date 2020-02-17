//行李安检机模块通过率mock

const rurl = "/pc/checkMachineStatus";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = [];

  let number = Random.integer(11, 12);
  for (let i = 0; i < number; i++) {
    obj.push({
      id: i,
      name: "B岛",
      status: Random.integer(0, 7)
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
