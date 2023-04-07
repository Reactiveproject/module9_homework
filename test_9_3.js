//Задание 9_3

/*
Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, 
где get-параметр limit — это введённое число.

Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.

После получения данных вывести ниже картинки на экран.
*/

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

const resultNode = document.querySelector(".j-result");
const btnNode = document.querySelector(".j-btn-request");

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img src="${item.download_url}"
            style="width:100px"
          />
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
  const dataInput = +document.querySelector("input").value;

  if (dataInput > 10 || dataInput == 0) {
    resultNode.innerHTML = "<p>Число вне диапазона от 1 до 10</p>";
  } else {
    useRequest(
      `https://picsum.photos/v2/list/?limit=${dataInput}`,
      displayResult
    );
  }
});
