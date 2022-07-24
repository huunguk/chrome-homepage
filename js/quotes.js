const quotes = [
  {
    quote:
      "You’ll have bad times, but it’ll always wake you up to the good stuff you weren’t paying attention to.",
    author: "Good Will Hunting",
  },
  {
    quote: "Great power always comes with great responsibility.",
    author: "The Sound of Music",
  },
  {
    quote:
      "Suddenly, time travel seems almost unnecessary, because every detail of life is so delightful.",
    author: "About Time",
  },
  {
    quote: "It’s not your fault.",
    author: "Good Will Hunting",
  },
  {
    quote:
      "hope is good thing, maybe the best of things. And no good thing ever dies.",
    author: "The Shawshank Redemption",
  },
  {
    quote: "Call me by your name and I'll call you by mine",
    author: "call me by your name",
  },
  {
    quote: "Live life as if there were no second chance.",
    author: "About Time",
  },
  {
    quote:
      "I tried to live everyday as if it was the final day of extraordinary, ordinary life.",
    author: "About Time",
  },
  {
    quote: "Let them swim in the deepest ocean or glid over the highest cloud.",
    author: "Harry Potter",
  },
  {
    quote: "Don't rush, Don't stop",
    author: "Harry Potter",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.random() 0에서 1사이의 랜덤한 숫자 > Array 길이만큼 숫자를 곱해줌 > 이번 경우에는 10이 곱해짐
// >floor함수로 값을 내렸다.(9.8>9)>그리고 나서 그게 quotes Array 내부에서 무엇인지 탐색한다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/* 
Math.random은0부터 1까지의 랜덤 숫자를 제공한다.
1~10까지의 숫자의 값을 가지고 오고 싶으면
Math.random() * 10 ! 
소수점을 제외한 정수만 가지고 오고 싶다면
1. Math.round(1.1) => 1  (숫자에 반올림)
2. Math.ceil(1.1) => 2 , (1.0) => 1 (숫자를 천장까지 높여준다)
3. Math.floor(1.9) => 1 (숫자를 마루까지 내려준다)
*/
