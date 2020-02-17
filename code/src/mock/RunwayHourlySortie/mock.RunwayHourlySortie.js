//行李安检机模块通过率mock

const rurl = "/pc/runwayHourlySortie";
const rtype = "get";
let Random = Mock.Random;

function createData() {
  let obj = {
    hour: [],
    data: [
      { name: "19", sorties: [], accumulated: [] },
      { name: "20L", sorties: [], accumulated: [] },
      { name: "20R", sorties: [], accumulated: [] }
    ]
  };

  let number = Random.integer(0, 12);
  for (let i = 0; i < number; i++) {
    obj.hour.push(i + "时");
    obj.data[0].sorties.push(Random.integer(0, 200));
    obj.data[1].sorties.push(Random.integer(0, 200));
    obj.data[2].sorties.push(Random.integer(0, 200));
    obj.data[0].accumulated.push(Random.integer(0, 40));
    obj.data[1].accumulated.push(Random.integer(0, 40));
    obj.data[2].accumulated.push(Random.integer(0, 40));
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
