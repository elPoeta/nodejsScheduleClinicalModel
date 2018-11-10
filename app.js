const server = require("./server");
const router = require("./router");
const reqPath = require("./reqpath");
const rp= {}
rp["/"] = reqPath.home;
rp["/home"] = reqPath.home;
rp["/schedule"] = reqPath.schedule;
rp["/css/schedule-style.css"] = reqPath.css;
server.init(router.route, rp);