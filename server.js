'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

app.get('/',(req,res) => res.send('Hello world'));
app.listen (port,() => console.log('server is running on port ' + port));

