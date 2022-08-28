function loadStuff(){
  let form = document.querySelector("form");
  form.addEventListener("submit", parseData);
}

window.addEventListener("load", loadStuff);

function parseData(event) {
  event.preventDefault();

//   let prompt = "prompt";
//   let n = 1;
//   let newStr;
//   let newArr = [];

//   while (n < 4) {
//     newStr = prompt + n; // === "prompt" + 1 === "prompt1
//     newArr.push((document.getElementById(newStr)).value);
//     n++;
//   }
  
  let prompt1 = document.getElementById("prompt1").value;
  let prompt2 = document.getElementById("prompt2").value;
  let prompt3 = document.getElementById("prompt3").value;

  let valArr = [prompt1, prompt2, prompt3];
  let newArr = [];
  newArr.push(valArr[1]);
  newArr.push(valArr[0]);
  newArr.push(valArr[2]);
  const body = document.querySelector("body");
  body.append(document.createElement("ul"));
  const list = document.querySelector("ul");
  list.append(document.createElement("li"));
  list.append(document.createElement("li"));
  list.append(document.createElement("li"));
  const li = ((document.querySelectorAll("li"))[0]);
  const li2 = ((document.querySelectorAll("li"))[1]);
  const li3 = ((document.querySelectorAll("li"))[2]);
  li.append(newArr[0]);
  li2.append(newArr[1]);
  li3.append(newArr[2]);

}