const fs = require('fs');
/*const path = require("path");
const mimetypes = {

    "css":"text/css",
    "html":"text/html",
    "ico":"image/ico",
    "jpg":"image/jpeg",
    "js":"text/javascript",
    "json":"application/json",
    "png":"image/png",
    "txt":"text/plain"

  };*/
function home(res) {
    console.log("Manipulador de Peticion 'home' fue llamado.");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //res.setHeader({'Content-Type':mimetypes[extension]});
    fs.createReadStream(`${__dirname}/public/index.html`).pipe(res);
    }
    function schedule(res) {
    console.log("Manipulador de Peticion 'schedule' fue llamado.");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(`${__dirname}/public/schedule.html`).pipe(res);
    }
    function css(res) {
        console.log("Manipulador de Peticion 'css' fue llamado.");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(`${__dirname}/public/css/schedule-style.css`).pipe(res);
        }
    exports.home = home;
    exports.schedule = schedule;
    exports.css = css;