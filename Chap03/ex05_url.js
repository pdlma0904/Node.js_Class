//url은 두 가지 형태로 제공됨

const urlString =
  'https://www.google.com/search?q=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94&rlz=1C5CHFA_enKR904KR904&oq=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94&aqs=chrome..69i57j0i131i433j0j0i131i433j0i433j69i61l2j69i60.1418j0j7&sourceid=chrome&ie=UTF-8';

//#region 1. WHATWG 방식(full url만 가능)
// var myURL = new URL(urlString);
// console.log(myURL);

// //searchParams 추출 가능
// console.log(myURL.searchParams);
// console.log(myURL.searchParams.get("query"));
// console.log(myURL.searchParams.has("query"));
// console.log(myURL.searchParams.getAll("query"));
// console.log(myURL.searchParams.keys());
// console.log(myURL.searchParams.values());
//#endregion

//#region 2. Node.js 레거시 API(부분 url도 가능)
var url = require('url');

//url 파싱
var myURL = url.parse(urlString);
//console.log(myURL);

//qeurystring 모듈 사용
// const qeurystring = require('querystring');
// const query = qeurystring.parse(myURL.query);
// console.log(query);
// console.log(qeurystring.stringify(query));

var parseUrl = url.parse('/?num1==100&num2==200');
console.log(parseUrl);

//#endregion
