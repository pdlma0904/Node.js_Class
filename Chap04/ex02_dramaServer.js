var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

// 드라마 목록
var dramaList = [
    {title: '나의 아저씨', actor: '아이유, 이선균'},
    {title: '미스터 션샤인', actor: '김태리, 이병헌'}
]

//#region 1. get 방식 처리
var url = require('url');
var server = http.createServer(function(req, res){
    console.log('req.url : ', req.url);

    var parsedUrl = url.parse(req.url);     // url parsing
    console.log('parsedUrl ', parsedUrl);

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    // 드라마 목록에 데이터 추가
    if(qs.title && qs.actor){
        dramaList.push({title: qs.title, actor: qs.actor});
        // 302 Found 리다이렉트 상태 응답 코드: 
        // 클라이언트가 요청한 리소스가 Location 헤더에 주어진 URL로 일시적으로 이동되었음
        res.writeHead(302, {'Location': 'http://localhost:8080'});
        res.end();
    }else{
        fs.readFile('./ex02_dramaServer.html',(err, data) => {
            res.end(data);
        })
        showDramaListUsingGet(res);  // 결과를 클라이언트로 전송
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});

//#endregion

function showDramaListUsingGet(res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write(`<html><body><h1>My Favorite Drama</h1><ul>`);
    for(var i=0; i<dramaList.length; i++){
        res.write(`<li>${dramaList[i].title}(${dramaList[i].actor})</li>`);
    }
    res.write('</ul>');
    res.write(`---------------------------------------------------
    <h2>Add Drama</h2>
    <form method="get" action="http://localhost:8080">
        <p>제목 <input type="text" name="title"></p>
        <p>배우 <input type="text" name="actor"></p>
        <input type="submit">
    </form>`)
    res.end(`</body></html>`);
}

//#region 2. post 방식으로 처리
// var server = http.createServer(function(req, res){
//     // body에서 데이터를 추출하여 저장
//     if(req.method.toLowerCase() === 'post'){
//         addDramaItem(req, res);
//     }else{
//         showDramaListUsingPost(res);
//     }
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

// function addDramaItem(req, res){
//     // req의 body 데이터는 'data'와 'end' 이벤트로 받는다.
//     var body = '';
//     req.on('data', function(chunk){
//         body += chunk;
//         console.log('body: ', body) // title=조승우&actor=비밀의 숲
//     });
//     req.on('end', function(){
//         var qs = querystring.parse(body);
//         console.log('qs: ', qs)     //{ title: '조승우', actor: '비밀의 숲' }
//         if(qs.title && qs.actor){
//             dramaList.push({title: qs.title, actor: qs.actor});
//         }
//         res.writeHead(302, {'Location': 'http://localhost:8080'});
//         res.end();
//     });
// }
// //#endregion

// function showDramaListUsingPost(res){
//     res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
//     res.write(`<html><body><h1>My Favorite Drama</h1><ul>`);

//     // forEach() 메서드: 주어진 함수를 배열 요소 각각에 대해 실행
//     dramaList.forEach(function(item){
//         res.write(`<li>${item.title}(${item.actor})</li>`);
//     });
//     res.write('</ul>');
//     res.write(`---------------------------------------------------
//     <h2>Add Drama</h2>
//     <form method="post" action="http://localhost:8080">
//         <p>제목 <input type="text" name="title"></p>
//         <p>배우 <input type="text" name="actor"></p>
//         <input type="submit">
//     </form>`)
//     res.end(`</body></html>`);
// }
