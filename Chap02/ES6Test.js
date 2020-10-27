//#region 1 변수
// // 1-1. var 변수(var 변수는 함수 스코프)
// // 반복문이 끝난 후에도 변수 i가 살아있다.
// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log("i = ", i);

// b = 5; // 선언없이 변수 사용 가능
// //var b = 6;    // 변수를 나중에 선언해도 에러 발생 안 함.
// //var b = 7;    // 변수를 재선언해도 에러 발생 안 함.
// console.log(b);

// //1-2. const, let 변수(블록 스코프)
// // const c  // 에러(초기화 필수)
// const c = 3; // const 변수(상수로 작동하여 재선언과 재할당 모두 불가)
// // c = 1;  // error

// const d = { a: 1, b: 2, c: 3 };
// console.log(d);
// // g=[1,2,3]  // 에러
// d.a = 4; // 객체는 그 안의 값을 바꿀 수 있다.
// console.log(d);

// e = [1, 2, 3]; // 리스트도 객체이다.
// console.log(e);
// e[0] = "hello";
// e[1] = "world";
// console.log(e);
// // e = [4,5,6]     // 에러: 메모리 주소에 대한 값이 바뀌기 때문에 에러
//#endregion

//#region 2. 템플릿 문자열(백틱)
// a = 1;
// b = 2;
// sum = a + b;
// console.log(a + " + " + b + " = " + sum);
// console.log(`${a} + ${b} = ${sum}`);
//#endregion

//#region 3. 객체 리터럴
// 3-1 이전 객체 문법
// var sayNode = function () {
//   console.log("Node");
// };
// var es = "ES";
// var oldObject = {
//   sayNode: sayNode,
//   sayJs: function () {
//     console.log("JS");
//   },
// };
// oldObject[es + 6] = "ES6";

// // 3-2 새로운 객체 문법
// const newObject = {
//   sayNode,
//   sayJs() {
//     console.log("JS");
//   },
//   [es + 6]: "ES6",
// };
//#endregion

//#region 4. 화살표 함수(익명 함수 표현법)
// 함수 선언문
// function add1(a, b) {
//   return a + b;
// }

// // 함수 표현식
// const add2 = function (a, b) {
//   return a + b;
// };

// // 화살표 함수
// const add3 = (a, b) => a + b; // { }가 없으면 return 문으로 인식
//#endregion

//#region 5. 비구조화 할당
const obj = {
  status: { name: 'node', value: 'js' },
  objFunc: () => {
    console.log('node.js');
  },
};
// 예전 방식
// const status = obj.status;
// const objFunc = obj.objFunc;

// es6 방식
const { status, objFunc } = obj;

console.log(status);
objFunc();

// 리스트에서의 비구조와 할당
var list = ['nodejs', {}, 10, true];
// // 예전 방식
// var one = list[0];
// var two = list[1];
// var three = list[list.length - 1];

// es6 방식
const [one, two, , three] = list;
console.log(one, two, three);

var [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`a = ${a}, b = ${b}, rest = ${rest}`);
//#endregion
