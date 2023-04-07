//Задание 9_2
/*Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.*/

// JS-объект:

// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }

// +1 часть объекта к заданию для унификации

const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   },
   {
    "name": "Ivan",
    "age": "55",
    "prof": "teacher"
   }
  ]
 }`;

let list = new NewObject(jsonString);

function NewObject(jsnData) {
  const data = JSON.parse(jsnData);

  console.log(data);

  const list = data.list;

  let result = [];

  list.forEach((list) => {
    result.push({
      name: list.name,
      age: list.age,
      prof: list.prof,
    });
  });
  return result;
}
console.log("list", list);
