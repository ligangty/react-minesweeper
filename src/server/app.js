const compression = require('compression');
const express = require('express');
const os = require('os');
const path = require("path");

const app = express();

app.use(compression());

let server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});

app.use(express.static('build'));

const APP_ROOT="/#";

const indexHtml=path.join(Config.project_root+'/public/index.html');

// For direct url bar addressing, will send home page directly for client router rendering
app.get([APP_ROOT, `${APP_ROOT}/*`, '/'], function (req, res) {
    res.sendFile(indexHtml);
});
