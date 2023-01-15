
let inputNumber = document.getElementById("input-number");
let addButton = document.getElementById("add-button");
let saveButton = document.getElementById("save-button");
let numberList = document.getElementById("number-list");
let numbers = [];

addButton.addEventListener("click", function () {
  numberList.innerHTML = "";
  numbers.push(inputNumber.value);
  numbers.sort((a, b) => a - b);

  numbers.forEach((number) => {
    let newSpan = document.createElement("span");
    newSpan.innerHTML = number + " ";
    numberList.appendChild(newSpan);
  });
});

saveButton.addEventListener("click", function () {
  let jsonString = JSON.stringify({ numbers });
  let a = document.createElement("a");
  let file = new Blob([jsonString], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = "numbers.txt";
  a.click();
});