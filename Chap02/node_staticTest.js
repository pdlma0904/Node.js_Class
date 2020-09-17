// node_static 서드파티 모듈을 사용하여 정적 서버를 만든다.

var static = require("node-static");

//정적 파일들이 저장된 디렉토리 경로에 서버 생성
var file = new static.Server("./public");

require("http")
  .createServer(function (request, response) {
    request
      .addListener("end", function () {
        file.serve(request, response, function (e, res) {
          if (e && e.status === 404) {
            // If the file wasn't found
            file.serveFile("/not-found.html", 404, {}, request, response);
          }
        });
      })
      .resume();
  })
  .listen(3000);
