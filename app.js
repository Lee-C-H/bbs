var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:ckdghks1!@ds123490.mlab.com:23490/bbs');
var db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to mongod server");
});
db.on('error', console.error);


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('test');
});

app.listen(3000, function(){
    console.log('Server Open!');
});