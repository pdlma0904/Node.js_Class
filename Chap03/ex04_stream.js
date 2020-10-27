const fs = require("fs");

//#region 1. write stream
// 1-1 텍스트 파일 쓰기
// const ws = fs.createWriteStream("./stream.txt");
// ws.write("스트림은 Node.js에서\n");
// ws.write("스트리밍 데이터로 작업하기 위한\n");
// ws.write("추상 인터페이스입니다.\n");
// //ws.end("마지막");

// ws.on("finish", () => console.log("finish 이번트 발생"));

// //1-2. 터미널에서 입력받은 텍스트를 파일로 쓰기
// //터미널 표준 입력 이벤트 : readable
// process.stdin.on("readable", () => {
//   console.log("읽을 데이터 있음");
//   let data;

//   while ((data = process.stdin.read()) !== null) {
//     ws.write(data);

//     //exit가 입력되면 빠져나가기
//     if (data.toString() === "exit\r\n") {
//       console.log("입력종료");
//       ws.end();
//       break;
//     }
//   }
// });

//#endregion

//#region 2. read stream
// const rs = fs.createReadStream("./stream.txt", { highWaterMark: 8 });
// const data = [];

// //chunk(버퍼)가 들어올 때마다 data 이벤트 추가
// rs.on("data", (chunk) => {
//   data.push(chunk); //data 리스트에 추가
//   console.log("chunk", chunk, chunk.length);
// });

// //end 이번트 : 더이상 읽을 데이터가 없으면 발생하는 이벤트
// rs.on("end", () => {
//   console.log("end : ", Buffer.concat(data).toString("utf8"));
// });

// //error 처리
// rs.on("error", (err) => console.log(err.message()));
//#endregion

//#region 3. pipe

const rs = fs.createReadStream("./stream.txt");
const ws = fs.createWriteStream("./stream2.txt");

rs.pipe(ws);

//pipe chain
const z = require("zlib").createGzip(); //파일 압축 스프팀
const w = fs.createWriteStream("file.txt.gz");

rs.pipe(z).pipe(w);

//#endregion
