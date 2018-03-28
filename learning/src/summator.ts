// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...arg: number [] ) : number | string  {
    return arg.reduce (function (prevValue, curValue) {
       return prevValue + curValue;
    });
  }
summator(2,3,4,5);