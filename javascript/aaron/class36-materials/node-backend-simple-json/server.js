const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {

  const readWrite = (file, contentType) => {
  fs.readFile(file, function(err, data) {
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    res.end();
  })
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch (page) {
    
    case '/':
      readWrite('index.html', 'text/html')
      break;
    
    
  }
  if (page == '/') {

    readWrite('index.html', 'text/html')
    // fs.readFile('index.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   res.end();
    // });
  }
  else if (page == '/otherpage') {

    readWrite('otherpage.html', 'text/html')
    // fs.readFile('otherpage.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   res.end();
    // });
  } 
  else if (page == '/otherotherpage') {

    readWrite('otherotherpage.html', 'text/html')
    // fs.readFile('otherotherpage.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   res.end();
    // });
  }
  else if (page == '/api') {
    // if('student' in params){
      let personName = 'unknown',
        personOccupation = 'unknown',
        personStatus = 'unknown'
      if(params['student']== 'leon'){
        personName = 'leon'
        personOccupation = 'Boss Man'
        personStatus = 'Baller'
      }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: personName,
          status: personStatus,
          currentOccupation: personOccupation
        }
        res.end(JSON.stringify(objToJson));
      // }//student = leon
      // else if(params['student'] != 'leon'){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   const objToJson = {
      //     name: "unknown",
      //     status: "unknown",
      //     currentOccupation: "unknown"
      //   }
      //   res.end(JSON.stringify(objToJson));
    }//student if
     //else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){

    readWrite('js/main.js', 'text/javascript')

    // fs.readFile('js/main.js', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/javascript'});
    //   res.write(data);
    //   res.end();
    // });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
