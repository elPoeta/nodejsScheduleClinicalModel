function route(rp, pathname, response) {
    console.log("A punto de rutear una peticion para " + pathname);
    if (typeof rp[pathname] === 'function') {
    rp[pathname](response);
    } else {
    console.log("No se ha encontrado manipulador para " + pathname);
    response.setHeader('Content-Type', 'text/html');
    response.write("404 No encontrado");
    response.end();
    }
    }
    exports.route = route;