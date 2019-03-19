var express = require('express');
var app = express();
var NodeUglifier = require("node-uglifier");
var nodeUglifier = new NodeUglifier("../src/karma.conf.js");

nodeUglifier.merge().uglify();
nodeUglifier.exportToFile("../src/assets/js/min/karma.conf.js");

var info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
var name = ['Adam', 'Abe', 'Maria', 'Mario', 'Luigi', 'Rose'];
var sname = ['Franklin', 'Jackson', 'Lincoln',  'M\'bebe', 'Miyazaki'];

function userList(id, name, info) {

    this.id = id;
    this.name = name;
    this.disclosableInfo = info;

};


function setList() {
  
    var list = [];

    for (var i = 0; i < 10; i++) {
        
        let n1 = name[Math.floor(name.length * Math.random())];
        let n2 = sname[Math.floor(sname.length * Math.random())];
        list.push(new userList(i, n1 + ' ' + n2 , info));

    };

    return list;

};


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  
    next();

});

app.get('/rest/people', function (req, res) {

    res.json(setList());

});

app.listen(8090, function () {

    console.log('Running on http://localhost:8090');

});


