let $ = document;

let inputQuestion = $.querySelector(".send-input");
let h1 = $.querySelector(".H1");
let answer = $.querySelector(".answer");
let inputName = $.createElement("input");
let userName = "";
let btn = $.createElement("button");

let dive = $.querySelector(".div");
let myTime = new Date();

let newName = "";

function questionAnswer() {
  if (inputQuestion.value === "سلام") {
    answer.innerHTML = "سلام به شما ";
    inputQuestion.value = "";
  }
  if (
    inputQuestion.value === "چه خبر" ||
    inputQuestion.value === "خوبی" ||
    inputQuestion.value === "چطوری"
  ) {
    answer.innerHTML = "خوبم شما چطوری";
    inputQuestion.setAttribute("placeholder", "اسمشو بپرس");
    inputQuestion.value = "";
  }
  if (inputQuestion.value === "اسمت چیه") {
    if (newName === "") {
      inputQuestion.setAttribute("placeholder", "");
      inputQuestion.value = "######################";
      answer.innerHTML = "<< منو بابک ساخته اسم ندارم  تو اسم برام بذار >>";
      btn.innerHTML = "<< اینجا بنویس بزن روش ";
      dive.append(inputName, btn);
    }
    if (newName) {
      answer.innerHTML = newName + "    :)";
      answer.style.color = "red";
      // h1.style.color = "green";
      h1.innerHTML = "Chat Bot " + "( " + newName + " )";
    }
  }
  if (inputQuestion.value === "اره" || inputQuestion.value === "آره") {
    answer.innerHTML = "خب بپرس دیگه :)";
    inputQuestion.value = "";
  }
  if (inputQuestion.value === "نه" || inputQuestion.value === "خیر") {
    inputQuestion.setAttribute(
      "placeholder",
      "ببین عصبانییش میکنی!!! خب بگو آره "
    );
    answer.innerHTML = "به جهنم";
    inputQuestion.value = "";
  }
  if (
    inputQuestion.value === "ساعت چنده" ||
    inputQuestion.value === "امروز چندمه"
  ) {
    let myHour = myTime.getHours();
    let myMinute = myTime.getMinutes();
    let mySecond = myTime.getSeconds();
    answer.innerHTML = myHour + ":" + myMinute + ":" + mySecond;
  }
  if (inputQuestion.value === "ممنون" || inputQuestion.value === "خوبم") {
    answer.innerHTML = "خداروشکر";
    inputQuestion.value = "";
  }
}

$.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    //questionAnswer();
  }

  if (event.keyCode === 27) {
    inputQuestion.value = "";
  }
});

inputQuestion.addEventListener("keydown", questionAnswer);

btn.addEventListener("click", function () {
  newName = inputName.value;
  userName = inputName.value;
  dive.remove();
  inputQuestion.value = "";
  answer.innerHTML = "حالا اسم دارم میخوای یه بار دیگه بپرسی ؟";

  console.log(newName, userName);
  // function questionAnswer()
});
