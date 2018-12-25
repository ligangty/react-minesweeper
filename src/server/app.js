const compression = require('compression');
const express = require('express');
// const path = require("path");

const app = express();

app.use(compression());

app.listen(4000, () => {
   // let host = server.address().address;
   // let port = server.address().port;

   // console.log("Example app listening at http://%s:%s", host, port);
});

app.use(express.static('build'));
