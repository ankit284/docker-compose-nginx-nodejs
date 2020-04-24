var http = require('http');
var express = require('express');
var bp = require('body-parser');
var os = require("os");
app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.listen(7070);

app.get('/',function(req,res,err){
    var res_json = {"f_name":"Ankit","l_name":"Singhai","host":os.hostname()};
    res.json(res_json);
    res.send();
});
