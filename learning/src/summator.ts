// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...arg: number [] | string [] ) : number | string  {
    return arg.reduce (function (prevValue: number | string, curValue: number | string) {
       return prevValue + curValue;
    });
  }
summator(2,3,'sdfsdfsd',5);