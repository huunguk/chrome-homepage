const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //toDos array의 내용을 localstorage에 넣는다.
  //JSON.stringify는 어떤 JS object나 array또는 어떤JS 코드건 간에 그걸 string으로 만들어준다.
}

function deletToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //toDo의 id가 li의 id와 다른걸 넘기고 싶다.
  //즉 우리가 클릭한 li.id와 다른 toDo(id)는 남겨두고 싶다.
  //toDo.id는 number타입이고, li.id는 string 타입이다. 그래서 parseInt로 문자열을 숫자로 바꿔준다.
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //span의 텍스트는 handleToDoSubmit에서 온 newTodo가 된다.
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  //li는 span이라는 자식을 갖게 됐다.
  li.appendChild(button);
  //li는 button이라는 자식을 갖게 됐다.
  toDoList.appendChild(li);
  //마지막으로 li를 toDoList에 추가하는것이다.
}

function handleToDoSubmit(event) {
  //Javascript가 방금(toDoForm.addEventListener("submit", handleToDoSubmit);)발생한 event를
  //handleToDoSubmit 함수의 첫번재 인자로 준다.
  event.preventDefault();
  const newTodo = toDoInput.value;
  //input의 현재 value를 새로운 변수에 복사하는것
  toDoInput.value = "";
  //newToDo 변수와는 아무 상관이 없다.
  //input에서 value를 얻어서 paintToDo라는 function에 값을 보낸다.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  //toDos의 함수에 newTodo값을 저장
  paintToDo(newTodoObj);
  //위에 입력값을 paintToDo에 넣어서 호출한다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //JSON.parse를 안에 넣으면 string을 array로 변환 해준다.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //parsedToDos가 가지고 있는 각각의 item에 대해(forEach) sayHello함수를 실행해줘라고 말함.
  //즉, forEach는 array의 각 item에 대해 function(sayHello)을 실행하게 해준다.
  //sayHello item 갯수만큼 실행한다.
  //forEach함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
}
