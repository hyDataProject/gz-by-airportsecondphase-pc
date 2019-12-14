// //成都服务
// var byjc_cd = new window.VexChannel(
//   "ws://47.94.236.70:54321/ws",
//   "123456",
//   "byjc_cd"
// ); //webclient为终端名称  123456为token
// byjc_cd.connect(); //连接服务器
//重庆的服务
var byjc_cq = new window.VexChannel(
  "ws://47.94.236.70:54321/ws",
  "123456",
  "byjc_cq"
); //webclient为终端名称  123456为token

var monitorType=1028;

byjc_cq.connect(); //连接服务器
