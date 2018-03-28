// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.

function isInArray(arr: number[], ...arg: number[] ) : boolean {
     for(let i = 0; i < arg.length; i++){
       arr.indexOf(arg[i]);
      if(!arr.indexOf(arg[i])) {
        return false;
      }
    } 
    return true; 
  }  
  isInArray([1,2,3], 2,3);