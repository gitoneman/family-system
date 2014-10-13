
/*
 * GET home page.
 */

var fs = require("fs");

exports.index = function(req, res){
  	fs.readFile('public/partials/index.html', 'utf8', function(err, text){
        res.send(text);
    });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};