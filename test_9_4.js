//Задание 9_4

/*
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — 
делать запрос c помощью fetch по URL https://picsum.photos/200/300, 
где первое число — ширина картинки, второе — высота.
*/

const btnNode = document.querySelector(".button");
const outData = document.querySelector(".random_image");

async function useRequest(dataOne, dataTwo, callback) {
  const res = await fetch(`https://picsum.photos/${dataOne}/${dataTwo}`);
  callback(res);
}

displayResult = (data) => {
  outData.innerHTML = `<div><img src="${data.url}"/></div>`;
};

btnNode.addEventListener("click", () => {
  let inputOne = document.querySelector(".input_one").value;
  let inputTwo = document.querySelector(".input_two").value;
  const outOfRange = `<p>одно из чисел вне диапазона от 100 до 300 </p>`;

  if (inputOne > 300 || inputOne < 100) {
    outData.innerHTML = outOfRange;
  } else if (inputTwo > 300 || inputTwo < 100) {
    outData.innerHTML = outOfRange;
  } else {
    useRequest(inputOne, inputTwo, displayResult);
  }
});
