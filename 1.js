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