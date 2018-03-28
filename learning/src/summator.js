// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.reduce(function (prevValue, curValue) {
        return prevValue + curValue;
    });
}
summator(2, 3, 'sdfsdfsd', 5);
