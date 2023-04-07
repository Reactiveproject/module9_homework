//Задание 9_1
/*Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

// +1 часть объекта к заданию для унификации

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  <student>
    <name lang="cn">
      <first>Виктор</first>
      <second>Сидоров</second>
    </name>
    <age>44</age>
    <prof>runner</prof>
  </student>
</list>
`;

let list = new NewObject(xmlString);

function NewObject(xmlData) {
  const xmlDOM = new DOMParser().parseFromString(xmlData, "text/xml");
  const listNode = xmlDOM.querySelector("list");
  const students = listNode.querySelectorAll("student");

  let result = [];

  students.forEach((students) => {
    let nameNode = students.querySelector("name");
    let firstName = students.querySelector("first").textContent;
    let secondName = students.querySelector("second").textContent;
    let age = students.querySelector("age").textContent;
    let prof = students.querySelector("prof").textContent;
    let langAttr = nameNode.getAttribute("lang");

    result.push({
      name: firstName + " " + secondName,
      age: age,
      prof: prof,
      lang: langAttr,
    });
  });
  return result;
}

console.log("list", list);
