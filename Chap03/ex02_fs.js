var fs = require("fs");

// 1. 동기식 파일 읽기
try {
  var data = fs.readFileSync("./readme.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}

// 2.비동기식 파일 읽기
fs.readFile("./readme.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 3. 비동기식 파일 쓰기
fs.writeFile("./readme.txt", "안녕하세요", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  fs.readFile("./readme.txt", (err, data) => {
    console.log(data.toString());
  });
});

//4. 파일 내용 추가하기
fs.appendFile("./readme.txt", "/nGSM", (err) => console.log(err));

// 5. 파일 존재 여부 확인
fs.access("./readme.txt", fs.F_OK | fs.R_OK, (err) => {
  if (err) return;
  console.log("파일 존재");
});

// 6. 디렉토리 생설하기
fs.mkdir("./testsDir", (err) => console.log(err));
