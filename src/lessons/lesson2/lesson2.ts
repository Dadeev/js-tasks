console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9 :
const sum = (x: number) => (y: number) => x + y;


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3 :
function makeCounter() {
    let i = 1;
    return () => i++
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение:
function SuperMakeCounter(number: number) {
    return {
        i: number,
        increase() {
            return this.i + 1
        },
        decrease() {
            return this.i - 1
        },
        reset() {
            return this.i = 0
        },
        set(number2: number) {
            return this.i = number2
        }

    }
}

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion :
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n :
// 1 С использованием цикла :
function sumTo(n: number) {
    let sum = 0;
    for (let i = n; i >= 1; i--) {
        sum += i;
    }
    return sum;
}

// 2 Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1 :
function sumTo2(n: number) {
    return n > 1 ? n + sumTo(n - 1) : n
}

//3 С использованием формулы арифметической прогрессии.
function sumTo3(n: number) {
    return n * (n + 1) / 2;
}

// 4 / Вычислить факториал:
function factorial(n: number): number {
    return n !== 1 ? n * factorial(n - 1) : n;
}

//5 Последовательность чисел Фибоначчи :
function fib(n: number): number {
    return n < 2 ? n : fib(n - 1) + fib(n - 2)
}

// Допустим, у нас есть односвязный список:
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//6 Напишите функцию printList(list), которая выводит элементы списка по одному:
function printList(list: any) {
    console.log(list.next)
    if (list.nex) {
        printList(list.next)
    }
}

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};