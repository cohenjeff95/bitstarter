var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});



  var content;
    fs.readFile('/index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });
    console.log(content);







var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
