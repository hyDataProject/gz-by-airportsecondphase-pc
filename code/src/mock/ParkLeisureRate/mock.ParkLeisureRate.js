//行李安检机模块通过率mock

const rurl = "/pc/parkLeisureRate";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = {
    fromThirtyToFourty: Random.integer(0, 10),
    lessTen: Random.integer(0, 10),
    fromFourtyToSixty: Random.integer(0, 10),
    fromTenToTwenty: Random.integer(0, 10),
    thanSixty: Random.integer(0, 10),
    fromTwentyToThirty: Random.integer(0, 10)
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
