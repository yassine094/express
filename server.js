const express = require('express');
const app = express();
const port = 4000;
app.use('/assets',express.static('assets'))
app.use('/vendor',express.static('vendor'))
app.use('/404-concept-page-property',express.static('404-concept-page-property'))
app.use(function (req, res, next) {
    let date =  new Date()
    let hour = date.getHours() 
    let day = date.getDay()
    if (hour>=9 && hour<17 && day>=1 && day <=5 ){
        next();
    }
    else return res.sendFile(__dirname+'/404-concept-page-property/dist/index.html')
  });
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact-us.html');
});
app.get('/services', function(req, res){
    res.sendFile(__dirname + '/our-services.html');
});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});