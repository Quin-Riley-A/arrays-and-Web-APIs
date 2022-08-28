function loadStuff(){
  let form = document.querySelector("form");
  form.addEventListener("submit", parseData);
}

window.addEventListener("load", loadStuff);

function parseData(event) {
  event.preventDefault();
  let prompt = "prompt";
  let n = 1;
  let newStr;
  let newArr = [];
  let arrElem;

  while (n < 4) {
    newStr = prompt + n;
    newArr.push(document.getElementById(newStr)).value;
    console.log(newArr);
    n++;
  }

  //
  let prompt1 = document.getElementById(prompt1).value;
  let prompt2 = document.getElementById(prompt2).value;
  let prompt3 = document.getElementById(prompt3).value;

  let valArr = [prompt1, prompt2, prompt3];
}