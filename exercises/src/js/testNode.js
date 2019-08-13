// nodejs 进程线程讲解
// https://mp.weixin.qq.com/s/5LHdvZu7zs9R0paOgz9yOQ


const http = require("http");

const server = http.createServer();

server.listen(3000, () => {
  process.title = "nodejs测试进程";

  console.log("进程id", process.pid);
});
