let numbers = "";
let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("input");
Array.from(buttons).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      numbers = eval(numbers);
      input.value = numbers;
    } else if (e.target.innerHTML == "Clr") {
      numbers = "";
      input.value = numbers;
    } else {
      numbers = numbers + e.target.innerHTML;
      input.value = numbers;
    }
  });
});
