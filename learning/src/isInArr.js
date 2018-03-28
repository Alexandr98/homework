// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(arr) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arg.length; i++) {
        arr.indexOf(arg[i]);
        if (!arr.indexOf(arg[i])) {
            return false;
        }
    }
    return true;
}
isInArray([1, 2, 3], 2, 3);
