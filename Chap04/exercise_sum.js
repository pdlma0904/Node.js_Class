var http = require('http');
var url = require('url');
var querystring = require('querystring');
const fs = require('fs');

//#region 
// var url = require('url');
// var server = http
//   .createServer(function (req, res) {
    
//     // 1. url 파싱
//     var parsedUrl = url.parse(req.url); // url parsing
//     console.log('parsedUrl ', parsedUrl);

//     var qs = querystring.parse(parsedUrl.query); // querystring parsing num1=1&num2=100
//     console.log('qs ', qs); //  { num1: '1', num2: '100' }

//     if (qs.num1 && qs.num2) {
//       var n1 = parseInt(qs.num1);
//       var n2 = parseInt(qs.num2);
//       let sum = 0;
//       if (Number.isNaN(n1) || Number.isNaN(n2)) {
//         return;
//       }
//       for (let i = n1; i <= n2; i++) {
//         sum += i;
//       }
//       res.end(`<h1>${sum}</h1>`);
//     } else {
//       fs.readFile('sum.html', (err, data) => {
//         res.end(data);
//       });
//     }
//   })
//   .listen(8080, function () {
//     console.log('8080 포트에서 대기중');
//   });
//#endregion

//#region 2. post 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var fs = require('fs');

var server = http.createServer((req, res)=>{
    if(req.method.toLowerCase() === 'post'){
        var body='';
        req.on('data', (chunk)=>{
            body+=chunk;
        });
        req.on('end', ()=>{
            var data = querystring.parse(body); // num1=1&num2=100 => {'num1':1, 'num2':2}
            var num1 = parseInt(data.num1);
            var num2 = parseInt(data.num2);

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            if(Number.isNaN(num1) || Number.isNaN(num2)){
                res.end('잘못된 숫자가 입력되어 에러가 발생함.')
            }else{
                var sum = 0;
                for(var i=num1; i<=num2; i++)
                    sum += i;
                res.end(`${num1} ~ ${num2}의 합계: ${sum}`);
            }
        })
    }else{
        if(req.url === '/'){
            fs.readFile('./sum.html', (err, data)=>{
                res.end(data);
                return;
            })
        }
    }
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion