// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.

function getUnique(...arg: string[]) : void {
    let res:string[] = []
    arg.forEach(function(value,index,arg){
      if (arg.indexOf(value) === index)
      return res.push(value);
    });
  }
//   let arr = ['a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', '7',]; 
getUnique('a','a','a','b','b','b','c','c','c','c','7');