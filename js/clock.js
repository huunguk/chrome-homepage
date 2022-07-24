const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 5000);
//setInterval(호출하려는 function 이름, 매 호출 사이에 얼마나 기다릴 시간(ms기준))
//1000ms = 1초
//계속해서 반복

//setTimeout(sayHello, 5000);
//setTimeout(호출하려는 function 이름, 매 호출 사이에 얼마나 기다릴 시간)
//한번만

//padstart (문자열만 사용가능, Number은 X)
//ex) "1".padStart(2,"0")
//길이가 1인 문자가 있다. padStart를 사용해서 padding을 추가해달라고(string 앞쪽 부분) js에 요청
//문자열의 길이는 2자리가 돼야하고, 만약 길이가 2자리가 안된다면 앞쪽에 "0" 추가한다.

//padEnd (문자열만 사용가능, Number은 X)
//ex) "1".padEnd(2,"0") => 10
