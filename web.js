var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs = require('fs');
    var text = fs.readFileSync('index.html', 'utf8');
    Response.send(text);
 // Respons/.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
