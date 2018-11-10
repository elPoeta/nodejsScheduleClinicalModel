const http = require("http");
const url = require("url");
const port=process.env.PORT || 3000;

function init(route, rp) {
    function onRequest(request, response) {
            let pathname = url.parse(request.url).pathname;
            console.log("Peticion para " + pathname + " recibida.");
            route(rp, pathname, response);
    }
    http.createServer(onRequest).listen(port);
    console.log("Servidor Iniciado");
    }
    exports.init = init; 