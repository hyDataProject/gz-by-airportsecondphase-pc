var hostport=document.location.host.split(':');//ip:端口号
// var hostport='10.10.236.170:6000'.split(':');//ip:端口号
let realAddressUrlOne = `http://${hostport[0]}:${hostport[1]}/api`;
let realAddressUrlTwo = `http://${hostport[0]}:${hostport[1]}/ivs-gis-pc`;
//重庆的服务
var byjc_cq = new window.VexChannel(
  // "ws://172.20.10.15:54321/ws",
  `ws://${hostport[0]}:${hostport[1]}/ws`,
  "123456",
  "byjc_cq"
); //webclient为终端名称  123456为token

var monitorType=1028;

byjc_cq.connect(); //连接服务器


