const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAMEKEY = "username";

// 3번째
function onLoginSubmit(event) {
  event.preventDefault();
  //event가 원래 하는 행동을 멈춰주기! = preventDefault
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //loginForm에 HIDDEN_CLASSNAME을 추가해라.
  const username = loginInput.value;
  //loginInput의 value값을 username이라는 변수로 저장한다.
  localStorage.setItem(USERNAMEKEY, username);
  //username 값을 username이라는 key와 함께 local storage에 저장한다.
  // 인터넷 브라우저 > f12 > application > Local Storage > Key,Value값에 저장
  paintGreetings(username);
  //그 이후 paintGreetings함수를 호출한다.
  //onLoginSubmit함수에서는 유저정보가 input으로부터 오고있어서
  //paintGreetings의 username에서는 유저가 form안에 있는 input에 입력한 유저명을 받고있다.
}

// 4번째
function paintGreetings(username) {
  //paintGreetings은 username이라는 인자를 받고있다.
  greeting.innerText = `Hello ${username}`;
  //이 함수는 비어있는 h1요소안에 `Hello ${username}`;이라는 텍스트를 추가한다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //hidden이라는 클래스명을 제거한다.
}

// 1번째
const saveUsername = localStorage.getItem(USERNAMEKEY);
//saveUsername은 유저가 처음 왔을때 input값에다가 submit한 값. ex)hyeonguk

// 2번째
if (saveUsername === null) {
  //saveUsername이 null일때 = 아무것도 submit 되지 않았을때(유저가 처음 들어왔을때)
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //로그인폼에 HIDDEN_CLASSNAME의 클레스를 지워라.
  loginForm.addEventListener("submit", onLoginSubmit);
  //로그인폼에 submit 됐을때 onLoginSubmit을 실행시켜(8번째 줄로)
} else {
  paintGreetings(saveUsername);
  //paintGreetings의 saveUsername은 유저정보가 local storage로부터 오고있다.
  //조건이 거짓이라 paintGreetings(saveUsername);이 실행이 된다면 26번째 줄로 가라.
}
