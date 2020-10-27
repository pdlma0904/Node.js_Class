// 버퍼 객체는 고정 길이 바이트 시퀀스를 나타내는 데 사용되는 저장 공간
const buffer = Buffer.from("버퍼 시퀀스에 담긴 데이터"); //문자열을 버퍼 객체롤 생성
console.log("buffer : ", buffer);
console.log("length : ", buffer.length);
console.log("toString() : ", buffer.toString("utf8"));

// 버퍼의 데이터 합치기
const array = [
  Buffer.from("버퍼 "),
  Buffer.from("데이터 "),
  Buffer.from("시퀀스 "),
];

const buffer2 = Buffer.concat(array);
console.log("concat() : ", buffer2.toString());
