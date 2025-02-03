// 1.
//  Отобразите в строке через пробел числа от n до 10 по возрастанию используя рекурсию
//  Входные: 0 → Результат: 0 1 2 3 4 5 6 7 8 9 10
//  Входные: 2 → Результат: 2 3 4 5 6 7 8 9 10
//  Входные: 5 → Результат: 5 6 7 8 9 10

// let str='';
// function add(n)
// {
//     if(n==11) return str
//     return n +' '+ add(n+1)
// }
// console.log(add(0));

//  2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
//  Входные: 5 → Результат: 4 2 0

// let str = '';

// function displayNumbers(n) {
//     if (n < 0) return str;  
//     if (n % 2 === 0) {
//         str += n + ' '; 
//     }
//     return displayNumbers(n - 1);  
// }

// console.log(displayNumbers(5));  


//  3. На входе число n. Вычислитесуммунатуральных чисел от 1 до n используя рекурсию
//  Входные: 5 → Результат: 15
//  Входные: 3 → Результат: 6
//  Входные: 10 → Результат: 55

// let i = 1;
// let sum1=0;
// function sum(n)
// {
//     if (n <= 0) return 0;  
//     return n + sum(n - 1);  
// }
// console.log(sum(5));


//  4. Отобразите четные числа от 5 до 0 по убываю используя рекурсию
//  Входные: 5 → Результат: 4 2 0


// let str = '';

// function displayNumbers(n) {
//     if (n < 0) return str;  
//     if (n % 2 === 0) {
//         str += n + ' '; 
//     }
//     return displayNumbers(n - 1);  
// }

// console.log(displayNumbers(5));  

//  5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
//  Входные: 2, 5 → Результат: 32
//  Входные: 3, 4 → Результат: 81

// function power(n,step)
// {
//     if (step === 0) return 1;
//     return n * power(n, step - 1);
// }
// console.log(power(2,5));


// 6. На входе массив array. Посчитайтеколичество элементов массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 20, 30] → Результат: 3

// function len(arr)
// {
//     if(arr.length==0) return 0;
//     return 1+len(arr.slice(1));
// }

// let a = len([1, 2, 3, 4]);
// console.log(a);

// let n = 0;
// function len(arr){
//     if(arr[n]===undefined) return n;
//     n++;
//     return len(arr);
// }

// let a = len([1, 2, 3, 4]);
// console.log(a);

//  7. Вычислить факториал числа используя рекурсию
//  Входные: 4 → Результат: 24
//  Входные: 5 → Результат: 120
//  Входные: 3 → Результат: 6

// let fact = 1 ;
// function factorial(n){
//     if(fact==n) return 1
//     fact++;
//     return fact * factorial(n);
// }
// console.log(factorial(4));

// function factorial(n){
//     if(n==0) return 1;
//     return factorial(n-1)*n
// }
// console.log(factorial(4));

//  8. Вычислите сумму массива чисел статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 10
//  Входные: [10, 20, 30] → Результат: 60

// let sum = 0;
// let n = 0;
// function sumArr(arr)
// {
//     if(arr[n]==undefined) return sum;
//     sum+=arr[n];
//     n++;
//     return sumArr(arr);
// }
// console.log(sumArr([1, 2, 3, 4]));

// let sum = 0;
// function sumArr(arr){
//     if(arr.length==0) return 0;
//     return arr[0]+sumArr(arr.slice(1))
// }
// console.log(sumArr([1, 2, 3, 4]));

// function sumArr(arr){
//     if(arr.length==0) return 0;
//     return arr.pop()+sumArr(arr);
// }
// console.log(sumArr([1, 2, 3, 4]));

//  9. Реализуйтепоиск максимального числа статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 5, 8] → Результат: 10

// let max = -Infinity;
// let n = 0;
// function findMax(arr){
//     if(arr[n]==undefined) return max;
//     if(arr[n]>max) max = arr[n];
//     n++
//     return findMax(arr)
// }
// console.log(findMax([1, 2, 3, 4]));

// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе 
// стороны), используя рекурсию.
//  Входные: "madam" → Результат: True
//  Входные: "hello" → Результат: False
//  Входные: "racecar" → Результат: True

// function palindrom(str){
//     if(str=='') return true;
//     if(str[0]!=str[str.length-1]) return false
//     return palindrom(str.slice(1,str.length-1))
// }
// console.log(palindrom('mad'));

//  11.
//  На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
//  Входные: 123 → Результат: 6
//  Входные: 456 → Результат: 15
//  Входные: 987 → Результат: 24

// function find(n){
//     let str = String(n);
//     if(str.length==0) return 0
//     return +str[0] + find(str.slice(1));
// }
// console.log(find(123));

// function find(n,a){
//     let str = String(n);
//     if(str[a]==undefined) return 0;
//     return +str[a]+find(n,a+1);
// }
// console.log(find(123,0));

//  12. *На входе вложенный список, например [1, [2, [3]], 4]. Вычислите сумму всех чисел в этом списке, 
// используя рекурсию.
//  Входные: [1, [2, [3]], 4] → Результат: 10
//  Входные: [5, [6, [7, [8]]]] → Результат: 26

// let sum = 0;
// function func(arr){
//     let arr1 = arr.flat(Infinity);
//     if(arr1.length == 0) return 0;
//     else return arr1.pop() + func(arr1.slice(0, arr1.length));
// }

// console.log(func([5, [6, [7, [8]]]]))

// Задача 1: Найти факториал числа
// Тесты
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1

// let i = 1;
// const n = 5;
// function fact(){
//     if(i==n) return 1;
//     i++;
//     return i*fact();
// }
// console.log(fact());

// Задача 2: Найти сумму чисел в массиве
// Тесты
// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, -2, 5])); // 13
// console.log(sumArray([])); // 0

// function sum(arr)
// {
//     if(arr.length == 0) return 0;
//     return arr[0]+sum(arr.slice(1));
// }
// console.log(sum([1, 2, 3, 4]));

// let i = -1;
// function sumAr(arr){
//     if(i==arr.length-1) return 0;
//     i++;
//     return arr[i]+sumAr(arr)
// }
// console.log(sumAr([1, 2, 3, 4]));

// Задача 3: Найти максимальное число в массиве
// Тесты
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// console.log(findMax([-10, -5, -3])); // -3
// console.log(findMax([42])); // 42

// let max = -Infinity;
// function findMax(arr){
//     if(arr[0]>max) max = arr[0];
//     if(arr.length == 0) return max;
//     return findMax(arr.slice(1));
// }
// console.log(findMax([1, 5, 3, 9, 2]));

// Задача 4: Посчитать количество элементов в массиве
// Тесты
// console.log(countElements([1, 2, 3])); // 3
// console.log(countElements([])); // 0
// console.log(countElements([42])); // 1

// let count = 0;
// function countElements(arr){
//     if(arr.length==0) return count;
//     count++;
//     return countElements(arr.slice(1));
// }
// console.log(countElements([1, 2, 3])); 

// Задача 5: Проверить, содержится ли элемент в массиве
// Тесты
// console.log(contains([1, 2, 3], 2)); // true
// console.log(contains([1, 2, 3], 4)); // false
// console.log(contains([], 1)); // false

// let flag = false;
// function contains(arr,el){
//     if (arr.length == 0) return flag;
//     if(arr[0]==el) {
//         flag = true;
//         return flag;
//     }
//     return contains(arr.slice(1),el)
// }
// console.log(contains([1, 2, 3], 4));

// Задача 6: Проверить, является ли массив отсортированным
// Тесты
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 3, 2])); // false
// console.log(isSorted([5])); // true

// function isSorted(arr) {
//     if (arr.length <= 1) return true;
//     if (arr[0] > arr[1]) {
//         return false; 
//     }
//     return isSorted(arr.slice(1));
// }

// console.log(isSorted([1, 2, 3, 4])); 

//  Задача 7: Преобразовать массив в строку (через запятую)
// // Тесты
// console.log(arrayToString([1, 2, 3])); // "1,2,3"
// console.log(arrayToString([])); // ""
// console.log(arrayToString([42])); // "42"

// function arrayToString(arr) {
//     if (arr.length === 0) return '';
//     if (arr.length === 1) return arr[0].toString();
//     return arr[0] + ',' + arrayToString(arr.slice(1));
// }
// console.log(arrayToString([1, 2, 3])); 

// Задача 8: Подсчитать количество гласных в строке
// Тесты
// console.log(countVowels("hello")); // 2
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("aeiou")); // 5

// function countVowels(str) {
//     if (str.length === 0) return 0;
//     let count = 'aeiou'.includes(str[0]) ? 1 : 0;
//     return count + countVowels(str.slice(1));
// }
// console.log(countVowels("hello")); // 2
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("aeiou")); // 5


// Задача 9: Удалить все вхождения элемента из массива
// Тесты
// console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
// console.log(removeElement([5, 5, 5], 5)); // []
// console.log(removeElement([], 1)); // []

// let arr1=[];
// function removeElement(arr,el){
//     if(arr.length == 0) return arr1;
//     if(arr[0]!=el) arr1.push(arr[0])
//     return removeElement(arr.slice(1),el);
// }
// console.log(removeElement([1, 2, 3, 2, 4], 2));

// Задача 10: Найти первое четное число в массиве
// Тесты
// console.log(findFirstEven([1, 3, 5, 4])); // 4
// console.log(findFirstEven([1, 3, 5])); // null
// console.log(findFirstEven([])); // null

// function findFirstEven(arr){
//     if(arr.length == 0) return null;
//     if(arr[0]%2==0) return arr[0];
//     return findFirstEven(arr.slice(1))
// }
// console.log(findFirstEven([1, 3, 5, 4])); // 4

// Задача 11: Подсчитать количество слов в строке
// Тесты
// console.log(countWords("hello world")); // 2
// console.log(countWords("")); // 0
// console.log(countWords("a b c")); // 3

// let count = 0;
// function countWords(str){
//     if(str.length == 0) return count;
//     count++
//     return countWords(str.slice(1))
// }
// console.log(countWords("hello world".split(' '))); 

// Задача 12: Вычислить сумму квадратов элементов массива.
// Тесты:
// console.log(sumOfSquares([1, 2, 3])); // 14
// console.log(sumOfSquares([0, 4, -2])); // 20

// function sumOfSquares(arr){
//     if(arr.length==0) return 0;
//     return arr[0]*arr[0] + sumOfSquares(arr.slice(1))
// }
// console.log(sumOfSquares([1, 2, 3])); // 14
// console.log(sumOfSquares([0, 4, -2])); // 20

// Задача 13: Найти индекс первого отрицательного элемента в массиве. (Если отрицательного нет верните -1)
// Тесты:
// console.log(findFirstNegativeIndex([3, 5, -2, 7])); // 2
// console.log(findFirstNegativeIndex([1, 2, 3])); // -1

// let index = -1;
// let i = 0;
// function findFirstNegativeIndex(arr){
//     if(i == arr.length-1) return index;
//     i++;
//     if(arr[i]<0) {
//         index = i;
//         return index;
//     }
//     return findFirstNegativeIndex(arr);
// }
// console.log(findFirstNegativeIndex([1, 2, 3])); // -1

// Задача 14: Преобразовать строку, заменяя пробелы на дефисы.
// Тесты:
// console.log(replaceSpaces("hello world")); // "hello-world"
// console.log(replaceSpaces("a b c")); // "a-b-c"

function replaceSpaces(str) {
    if (str.length == 0) return str;
    if (str[0] == ' ') {
        return '-' + replaceSpaces(str.slice(1));
    }
    return str[0] + replaceSpaces(str.slice(1));
}
console.log(replaceSpaces("hello world"));
console.log(replaceSpaces("a b c")); 