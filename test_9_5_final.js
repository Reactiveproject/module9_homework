//Задание 9_5 Финальное

/*Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом 
— выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом 
— выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами 
— выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;

Если числа попадают в диапазон от 1 до 10 — 
сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
где GET-параметр page — это число из первого input, 
а GET-параметр limit — это введённое число второго input.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки 
из последнего успешно выполненного запроса (использовать localStorage).
*/

const btnNode = document.querySelector(".button");
const outData = document.querySelector(".image");

const localData = JSON.parse(localStorage.getItem("myJSON"));

if (localData) {
  displayResult(localData);
}

async function useRequest(dataOne, dataTwo, callback) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${dataOne}&limit=${dataTwo}`
  );
  let result = await response.json();

  localStorage.setItem("myJSON", JSON.stringify(result));

  callback(result);
}

function checkValue(a, b) {
  let resOne = "";
  let resTwo = "";

  if (a > 10 || a < 1 || isNaN(a)) {
    resOne = "Номер страницы вне диапазона от 1 до 10";
  }

  if (b > 10 || b < 1 || isNaN(b)) {
    resTwo = "Лимит вне диапазона от 1 до 10";
  }

  result = resOne + resTwo;

  if (resOne && resTwo) {
    result = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
  return result;
}

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((data) => {
    const cardBlock = `
          <div class="card"> 
            <img src="${data.download_url}"
              style="width:300px"
            />
        `;
    cards = cards + cardBlock;
  });

  outData.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
  let inputOne = +document.querySelector(".input_one").value;
  let inputTwo = +document.querySelector(".input_two").value;

  checkValue(inputOne, inputTwo);

  if (result) {
    outData.innerHTML = result;
  } else {
    useRequest(inputOne, inputTwo, displayResult);
  }
});
