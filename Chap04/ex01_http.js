var http = require('http')

//#region 1. http 서버 구동 방식
// var server = http.createServer();

// // 클라이언트의 요청이 있으면 발생
// server.on('request', function(req, res){
//     res.write('<h1> Welcom ');
//     res.end('to my server')
// })

// server.on('listening', ()=>console.log('8080 포트에서 대기중'))

// server.listen(8080)
//#endregion

//#region 2. http 서버 구동 방식
// var server = http.createServer(function(req, res){
//     res.write('<h1> Welcom ');
//     res.end('to my server')
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion

//#region 3. request, response 메시지
// var server = http.createServer(function(req, res){
//     console.log('req.headers', req.headers)
//     console.log('req.method', req.method)
//     console.log('req.url', req.url)

//     res.statusCode = 200;
//     res.statusMessage = 'OkOk'
//     res.setHeader('Content-Type', 'text/plane;charset=utf-8')
//     res.writeHead(200, 'Okey', {'Content-Type': 'text/html;charset=utf-8',
//     'myName':'dongyun'})

//     res.end('<h1> 안녕하세요 반갑습니다.</h1>')
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion

//#region 4. html 파일을 응답으로 제공
// var server = http.createServer(function(req, res){
//     res.end(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>안녕하세요. 이동윤 홈페이지 입니다.</h1>
//         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFRcXFxUVFRUVFRYVFxcXGBcYFRcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx4tLS0tLS0rLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIAQIAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECBAYDBwj/xABBEAABAwIDBQYFAgUDAAsAAAABAAIRAwQFITESQVFhcQYigZGx8BMyocHRQlIjM3Lh8QdishQVJFNzdIKSosLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgMBAAIDAAAAAAAAAAECESExAxJBIhNhBDKB/9oADAMBAAIRAxEAPwDBpJJ1moydJOmDJQnSSBKhe3kd1uu/kul/cbIgalColMJMpl2niVabSaxoeH97cIUrUD5SfAaf3XK+12RoPPxQTjVrOccySucq1Ro90mFVITCTCiFnWc3Q+eaHNciVlctEB3v31SpwQZcg5P18fvn5Sq17Y7wPEK/sMcNMuIMxzncpimW8xx5ff3op2emdY51M5eSKUKweJClf2YI2m+I9+iEtcWGR4805R0MwmUKFUOEj/C6JkZKE6SQMmTpIBkydMmCSTpJAkoTpQmCTVHACU6o4nWgQgB1WoXEk71BJJMnezcNoTorlxbzmPpn5lDmBG7SgAyWjPnx5JU44UWyNkyud1ZR7lM17pRSmdpuZ8Tkp6VJtnX0yFCFoL7CnNBcMxx99UGqUyDoql2mzSVpdOYQZMe9yM0L0OE6ceH9kCCmwkaHw/CVgl00BzG03xH4CF4hS3jeoWV4WmDoVfrgOHI/R3Lql0fYTaVix3I6o0EErM3880Qw2tLY4eioltJOlCAikpFMgIpJ06QRSSTpgkoTpkBF5QW6qbRnj6aIjf1Yb9EHJRBSSSSTJ1oDOSjdrWLoEZHLlHv8ACFWtGSFrMGw/LbcMgN/vVZ5ZaaYYWhF1Z5yB+SVbw6wcfDyHTmtPRsA5wECT9B+Vp7LBGtbkI+6zuddGPinYJbYMDRcHamZ3nQEZ8cisXj2DljpDTHKSJGvvkvZzZhrY6Hyj7IHd4XILSOYO8e8/NKZWHl45XirqWcHLmoOaQcxK2+O4CWmQJadCAgLbKTGhHyzvHA8lpPIwy8VgdRobQ4j6/wCVas3EEsPSeerSPfFWnW2wJblOnI8FSqVAXA6HQ+/eqe9p1pDEGZgjRwjxGn0hVbCpsvHPLz9hXLsy08jHl7CFk5yriK0iShbv2mg8QukIMyaFJMgjJJ4SSNBOknTIlFymuVcwEAJxKrLo4KoFOs6SSoJkdOwSYUUQwW1L6gyyCVuocm7oawbDZc0EfMQSP9s5z5eq1VywgMaAM+8d+p2WfWXdGFUcLYS+RqTl/TBj1J8QilFhqV+mnRo2W+r1y27rvwx1BvArATtHPgD71WjpOG5U7SjDQFZp7giLq050rlUpAwd4UhkpEJpCr+wa4EEZFedY5h/w37TRoZ8N69XqDJZbtHYyCQMlJ63GHuy1zY3HwPe1PgY8llrk973qP8LQYzS2QOazdw+Z4rbByeTh2qO15wfP/I8kOfqrdN0gHqPpI+/kq1TUrWMaJ4NU7pbwMoigmG1Nl455e/ojiRwxTQpJkAySdMgIp0k4TIypYjUge/f+VeQXE6kuQFJJIqdNuvT+yZILV9nLeWbLY2nangN5+uXOFlFr+zlQinDRAOruSz8vTTxf7D9q4NBcN0wBpGTRHgEV7LtBJcSJJ4jqs9dWJqODG1CBqYiAOo1KL2PZl2zlVA8P7rDh2S1uQ9u4gnqu7GwsJX7P3rBNOqD0dH0I+66Wta7Zk+SinK3JepByFYbcucO9qiDnwEHT1HIffs2mwVUxTEiwd0SsxeX96+RTZl0zQLdAnail3qg/bH1n8LE1H5laHHba4DnGrkcpEjgSNOUrNVNVt444/Nd1ashLX+B+33+irnVXsPpfw3nwHkfv6KhVOZWjE7HwQVo6TpAKzMo/hz5YPLyyRTi0mTpJGZMnSQEU6ZOmEKuhQC5dLiffJGr10NKBDVEKoFE+z9AVKppu/Wx7R/VEj0VBzPRXMM7tVjjmARPTRLLo8e45V7XZMEQRkRzGq9M7J4eHW7QRqEAx3B4BeOp4EcQeIWt7GvBos6LDPL2jq8eHrk53mFOpd5oLo3DVC7J17cvLWOdTYCQSMiIEwI3nmvRm0gQhVaxLHbTJHT3monDazc1vTyul2nvKZj41UvDhk4hzNmDtAtcJmY+q9Hw+9eRs127NTZBy0II1E+RCg/DaRqfENJhfM7RZmXcSJgnnCLW9kajg90k8+YV5WXqIwwyx7qdmFZupDV3p2+ydF3xGhAHMJaXazIaJlyyXaPtZXpO2abfhMcwua/YD3vkO2SASA1pIiczBmNx31axDmuHERlwOqFY3htOs0NqM2g35ZyIHAObBjRGOp2nOZZT815Je39eqC+o8uOQOQ5ncI3IQ4yVu+0toWtDaTNlrdwGozkycyc1iGszHMrfCy9OTyY3G8jFo2KBjhP1QJ+qPW5/gv6O+/wCEBKqM6Yo1gp7h5FBUXwI5OHMIpQUSSSSUZJOkgIJJJ0BUxI91BGnNG8T+RAgnCq7TZn73/wCFctaXHoeoP9wqVv8AaPwiVc9yeh85DvWfAKacaOhjrG0TTuA4SHBjw2WlrdnUjMHOMxuGeeRHsXcjYAByBMdJyWKs7sCdqkKpNN1MAuLYnR0jeM/NHuxdbZcafArLLHUdGHktykr1S1q5IgyCECtHolSes46tbW/+it4Lq2GrkKi51qmSvadOm1JXW/HcHRUqD5Kv347g6InSb3A+g4JVbcFU7SqZIREOUqBsUwprmmeC8Txiz+DXLDoHiOhK95xCp3SvFe2rv+0k8h6lX47+mfnx/G1Vhig//wBQ9+aBovWqRbgfuJP1QgLeOKkUUwF2bhyCFq/grv4kcQnSHUkklKjJJ0kBBOkkgKuIDuHqPVASjmJO7vj6ZoFKcKu1q+DCNUGyNniMigLdUTt6pAg8PZSyEcCSx3QopgN1sXAP7v7/AGVeu0PG0DmPNVWyIcNWkeI9+qm8xcurt7VZPkAorRKy3Zy+FSm0g7gtLQdkud3yrrSmr0SWEgTGahTertKqnCrL3HaelTe1pJz3wdkdXRA8VZxjtdSp0tpzhyG8lGalnTdMtaZmchn1WfHYy1B+IKQ5A6CeA3Jjim7O4gLh0tmA3PkToOvJHHOhcbZjKbdloAHACFC4rJGrYlV7pXivaqvtXDzwIHkF6j2gvthjjyXjdevtvc47yStPHOduf/Iy4kTvqmjBugeWv1VRO4yZSK3jkpirGHuioDw9N6rkLraHvjqihqElzoOloXRSoySSdAQSSSQA3F3ZeH4QdEcXfnHvJDU4mptV22dmB1A655KkxTafoinBOm7Zz9z79VYZDj1kf29Y6Ku8S0cx9dPyoMJaY4EfZZrjS9mL40n/AA3aHNv4XoljcghebttviAEa8d++PqFocAxMz8Opk8fUcQsLeXZh02b60IZeY8+npQqOJ0MQ0+KtUcxKa7p7bYhDSa3yztftPdgyaTm8mifOFSu+29XTYcSBnstIz55ZK7c4gKEtqZDP5mg6iMjBQ+pjVCPnad8AAn0Rt1euGuLIladsqziGuoPO1k2AZ9FoqVy5wBc0tO8GMkBwao+o/wCK4FrB8s6nmumP4uKbCZTv9OTKyb5Au3uK5fDBzOqw25dr66NV5cd5XM6eS6McdR5/ky9stuYC6taubV2ofMFVQ5OblKZroMrtUGS4JwNBYVMldQHDq8ZefT36o5TdIUqSSTpIDmmJUiuNy6GlAAb2pLun+VwTnMzxKIWWFVakbFJ7pMS1pInhMQnvRSbUtn36rqynvW+7P/6dVHuBr91kaA97z0CJY52Qt7Wg+ptHJpMZTJBgSoua542GwultQODvvn910xKh3qrgMgYHhA9WlWsKIptc865ho1l2Xnn91euMMPwqIOtV7p4kanwA+pWVvLXHFY7P0iX7J3bJPiJ9SjOOYLtDbZk4ZgjVR7NW3fqv3bYA6NER5grYfAkLL66ZNRjcHxx9MNbcAtBMNf8AoccxBO45HIrZ2ts+oAWkAHeRJjiFm7q0+am8B1N0y1w5zqNPXRaTCMRY1rWnIAADoBCVro/ivr7Y8rowhsfxX7XUADwA1Q27wagDIptPVsHwkZ+C1Ns0EbUzO/VdK1q1whwBCv13OHN/Jq8sFiNm9rSWUiRyj0XkPaW+qPqFj2uYGn5XNLT1IK+hbyzq0h/B77f2PzjodYXn/wDqVhVWrQc/4UOYQ/una7onaO7cSfBXh+bynyz2x4rySm1drlmyAPEq5So7LR+5xAHKd/vkuOKjMRpJA6CAt98uHSk1WbQS8dPQLgAu9vkTyB9U6Irk+qgnITFMnS3dDgj9o73zWcBRvD3z7980qcE0lEJJGJ4t2dubb+bTGyTAe1wLD1J+XxXS37EXFw2XVKVNh/3bZ+giOhXs91SD2kESOay952QB71rVdQJEkNzYT/Tu8FFtaesZzBP9N2Un7TntqwNC3ug8dc1tLexdTaA1tMbhkRkMtBoFmXf9ZUoDqbKozghpkx/SRCpVsbvXDKjs67qp66OU7XJptLh7mNJqVWNEHdw4SV5j2z7RsruFOmS5oMk6h7t0D9o15rnc2V3dHv8AxHiRucG+A3rR4P2XfSzp2/f/AO8qBszxG2Yb/wCw9UhzQHBOz7yG17r+FSA7lMiXP4Q3eTOvNaO6tahb8ZzAHZCmzfTZO/nnJPTgjuH9nKu38SoWuf8AucXOd4bgjFXCu4QTJgpa2qWRmcIsPh09nzPE7yj1FmSrWbxAyV9pELOOgMvMND3A8TDhyOU9VTb2UYCXOrPbTbJI2oEDMkngj0Zgc0N7ZXYp2j27Ql2y2JEwTLsuEA+adk1yrDyZTLWN7E+zxokNfbvLqbi5snagls7jwIiUfXm+DYvFtSa3IAEHdJ1dHLPxla3AsQ2+79OB9z5Iwzm9J8vhysufYtVKBYpVGy6dIM9EWvKkArCdsMabRtajie89rmMHF7gQPLMnoryvxjhxzXk9I7VXk1pd4nP8KhfHut6lW7HIVDxafsFRudB4/ZbTtyVxadF2pjI9PuP7LiG5e94U5yI5kfQ/hUTkc9TH1TOaOMpEb0xKZGRPDHacx9QYQxW7N+XQ/hKiD5KSgx0gJJKfRblzoty8/VdYUGaefqobGawQOi5Ptwdw0VgZDwTkeiA4st2tEAcOq7BqZ33UggHaEnaJwEimAUW4BPIlM5oCtVcnkcRPv6KtfWzXthwy6keixyjowu9bLY2dlxOpWK7a6ad4uOW4+9pGK+Gsa4PBdtNmCXOMTqBJWd7SipVbAeNrd73rK2/V385e05EMFsH1qdAQBsjvCdNPwFq7GlTZVaGHMAk9AC31K85w+pitFgc00S0DQtMnqZRDCseuC0uIZJ1MkRyA2dFE/M32jHz3Kevxse1OMMo0nOc4DL6rwntDjj7qrJnYZkxvq48zl5In22xn4vdL9p05gfK3jnvO7zWXtRJK6vFjbPasPLlr8QRDu7lwgqhW0XY1x8ufsKDBOXVazhhULYAkT08ZyT1sj4k+oTUB78FK4PHx6yU/pK79AoEKRM5qCoiVqx1I45+Sqwulu6HA80UDlu8gRwSXOqzNJSp9LSot08EnGB4JyO7HJQ2Sfp4Jz90z9EvygGd91Vq29Z2lYM1+VgPT5iVbH3/KcJWHLoNqYZWOl1UGm5oznPQKm+yvG/Lc7UHRzRB65I+ubznmc0vWH70OrMMhx13xoeKi6sIV97ZQu6pFp5bvwllFYX4HYhUWFxq9iqz+tv8AyC2d+wwsRiWHOdVYf97T/wDIFZ1rehnttem3tRsnvPAA5SPwvMK+MV3N2XVXbPAQ0HrsgLY/6nXRe+mwaNb/APkfQLBuYn/jYSY7cV3OjsG1PISeijQlp8kUsLF3walSN0eWvvktHe9lyaYcG5ACeIaRqOYInot7mfpe2RqUtrguTBxRC+tHUZDhnpPvw80NNSQUTlNmj0xB8YTV943ZH7/cqVB0zKUySPDyVJVdPe5MQpO4KJVEfcno+/NJokJU8igD4nemRmjZNqMa4yDG7fmf8eCSz2vT3eoJB6J3n35Jjok77pNUne/NN+UvykN3vcgHG73uTjcojd73Jxu97kA4QLtC2psyzgUdB0TVGAiClZuHLqsXgnaF9N3wrqYmG1Du5O4jn7GqqsDh6H7qji+CNqA5LPWlxWs3bJBfS/aSe7/SdyiW48Vdm+YNXFvMoPd2YBBjePVHad4yq3bYeo/UOoVTEG5Dm4fn7KfJPzVTLhhcYw741So7g4NHg1s/UlBz2e5Lc4ZbzTk6ufUPgajo+kK3b2QLxO4z5KcJqSHJPUHr4EKdqykBm4gdT8x+6MYlitraMivUaDGTB3qhHJoz8dFne3XaFxqMt7Y95pO24atdlDWcxnJ5ws07s2/YNa4cQN+973HIDPMuK14jG21V7U4/SrZU6Ja39LnETuyLRIiJGqyp1RW7w54LmkRpI1DT+2d5AyJ4oW7KW7wtcdMMt/TU6kT0XWk+SOZVZO3JVpK1eUxuVSEQ+HtDUnLf75qtUp90EJSnUaf3UXfMV0pM096pi3NMPRuz2yaDC6JjmnSsGFtJgA/SElk0exT6hL8rntZ+ScHMdfsmt0B0SCi0+hT/AIKAkDolwTJT9kBI+/NSXC4uGtGZz3DUnwQzEKlWqwhh2DkQJ1IMw4j9JiDHFK1UxtX62JMGTe+ZIyOQIMEE8QQRCFXFB1TN+Q4DIf3XO1qsY6WCW1C4kzk2o0AEbJEidl08wd5XK8xIucGU83HQTAA4k7hzUWtccdOtKyY3gDx0K5XFu0/qPmVUr2FaDFZpd/Q4t8JIJ8kCvLa/BOxUpugaFhBmRkO918lP9L1Ox+1bsN2QdMgCNy54ndOZTlg77+62M4J1d4D6kLra2DSJNR7uIJAjkYErpRoipVn9LBsjw4e9ycTnZoBwLs4GVdt2Z2Zz8V0xlxe8uaPkPw6I1AqkHafG8NB+juARrE7xtPaILZDRAJA7znQ0ecIRXuqNOrSbt7QYxzjshzs8hJIkD9WvFPWmNu1a/wAIbRtHzGTHZnXcZ6zK8crulziP3L0Htv2tfdA06NNzaLZ2nkiahG4Ro1AMewIUKFI/qc521vnLI+oWmHDLPlmSpN0KaFKpxC1ZLto/KDx9QpfC1A4ny1VW1qwffGVcqXIBy3j8rOzlUVmsjLp9VZpW8vHCNTxXS1pBwG8nd45IxaUPiVWsbuyP3StORs8Jp/wWZfpE9YhJHLOx2WNHAJkl6aZrs12afX7KrT1y3GFYZ9vwhVdGn09VMfZQG/wUm70wff5/ZQu6uwwu4Cep3KY1HvghOP3GlMb+8em4evkErdQ5N1DDztN2nGXHOV3qVIGWqF0apyaMuaJsohvPqs5W4c/DHVHS5xa0nNrCW7WnzHXcNIRC3sGMEAAe953qdWuGiSYWM7RduqdIljJc7lonqDdrX17imwSSB1QB+M0nPIa4OPLNYcsvb4g7D2sO+DEciYCu1+z9aiS9hcwBrA1jSHbZDoeTvB2c8uCmjevjVXVcNl4yIGX90RwwjYBGe0J81gvi3JJa6XtPAZt6jVbfsxQcyhTD/maCPCTA8oVYozce0JawNLgNnaBOUzsxA4nPdqsziVvVurgBzdjapjZpz8rQfmqEfM7P5dM4M5haDE2Ouao/ZTdkNZOhcfrHieCt16Ap1qdQD5QaZPJ0Ha8wEI0z+NYE2mLa3aJL6jdrLczvO8yPouvb/CNq2dAzZDx4a+EFaK8tf49u8/pfHmxwGvNWcfo7VGrOfcPoVUia+dHMAcMsiqxR3F8ONNw4OBe3pJH1hBKrSDmtcbthlNGATtfmmYJMBWrShLoOR4lO0otYfViSNdwW77C4Uf5jhnP1WZ7PYWTWfTIEtgydwzn7LfU78/yLNu0QIdV/RT4/1HXILK9tcR66xu3onYqVGBwAyLgDB0SVS17OUabYc3acc3Of3nEnUknokmf/AForTf8A1f8A1Vpn2CSSU6VXYaeKcb0kkyONQs1iZ/jP6t/4tSSUZ9NMO1Vuvii86dEklDdyvRks5YW7HXryWNJDGRLQY+fTgkki9nj01LkOxHQdUkkUgm7+dqNWp7h6FJJPFjn2ezyaY4n1U6w7r+h9Akkq+F9SrnueB+hyVnFP5NX/AMM/8SkkqQ8j7TD+V/5el9SsPe6+CSSeHbPyJ4WJqtnmtNRpN+ADsido5wJ3pkkZ9jB1w5o/6ZsxkSARuIgZEL1uxpNaIa0ARoAANUklMXOlm4GfgmSSVE//2Q==" alt="">
//     </body>
//     </html>`)
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion

//#region 5. html 파일을 응답으로 제공
// var fs = require('fs')
// var server = http.createServer(function(req, res){
//     fs.readFile('./test.html', (err, data)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.end(data)
//     })
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion 

//#region 6. routing 처리
var fs = require('fs')
var server = http.createServer(function(req, res){
    console.log('req.url', req.url)
    if(req.url === '/'){
        fs.readFile('./test.html', (err, data)=>{
            if(err){
                console.log(err)
                return
            }
            res.end(data)
        })
    }else if(req.url === '/second'){
        res.write('<h1>Second page</h1>')
        res.end(`<h1><a href='/third'>third page</a></h1>`)
    }else if(req.url === '/third'){
        res.end('<h1>Third page</h1>')
    }
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion

