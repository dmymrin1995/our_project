const http = require("http");
const fs = require("fs");
const hostname = '127.0.0.1'; 
const port = 3000;
http.createServer(function(request, response){
    
    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    // смотрим, есть ли такой файл
    fs.access(filePath, fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(response);
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
            // fs.readFile("./image.jpg", (err, image) => {
            //   res.end(image);
            // });
        }
      });
}).listen(3000, function() {
  console.log('Сервер запущен http://localhost:3000/project/index.html');
});
/* запустить сервер node project/server.js */