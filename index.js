// 1. Sonlardan tashkil topgan massiv toq elementlari sonini topuvchi funksiya yozing.
/*
let arr = [1,2,3,4,5,6];
let counter = 0;
function test(arr) {
    for (const i of arr) {
        if (i % 2 ==1) {
            counter++
        }
    }
    return counter;
}
// let res = test(arr);
// console.log(res);
*/

// 2. Berilgan matndan sonlarni ajratib oluvchi funksiya yozing.  sa2lom1 => [2, 1]
/*
let str = 'sa4lo5m7';
function test (str) {
    let arr = [];
    for (const iterator of str) {
        if (iterator > 0) {
            arr.push(iterator)
        }
    }
        return arr
}
let res = test(str)
console.log(res);
*/

// 3. Berilgan matnda nechta so’z borligini aniqlovchi funksiya yozing.
// let str = 'salom shox';
// function test(str) {
//     let res = str.split(' ').length
//     return res
   
// }
// console.log(test(str)); 


// 4. Berilgan massivdagi eng kichik elementni topuvchi funksiya yozing
// let arr = [1,2,3,4,5,6,7];
// let a = arr[0];
// let b;
// function test(arr) {
//     for (const i of arr) {
//         if (i > a ) {
//             b=a
//         }
//     }
//     return b
// }
// let res = test(arr);
// console.log(res);

// 5. Berilgan yozuvni teskari tartibga aylantiruvchi funksiya yozing.
// let str = 'salom';
// function test(str) {
//     return str.split('').reverse().join('')
// }
// console.log(test(str));


// 6. Berilgan sonning raqamlari kopaytmasini topuvchi funksiya yozing
// let num = 12345;
// function test(num) {
//     let res = String(num).split('');
//     let p = 1;
//     res.forEach(function (value) {
//         p *= value;
//     })
//     return p
// }
// console.log(test(num));

// 7. Sonlardan tashkil topgan massivni kattadan kichikga qarab saralovchi funksiya yozing
// let arr = [1,2,3,4,5,6];
// let res = arr.sort(function (a,b) {
//     return b-a;
// })
// console.log(arr);

// 8. Berilgan matndan berilgan yozuvni o’chiradigan funksiya yozing.
// let a = 'assalomu alekum';
// let res = a.replace('assalomu','');
// console.log(res);

// 9. Berilgan massivdagi barcha elementlarni katta harflarga o'zgartiruvchi funksiya yozing.
// let arr = ['salom','shox','valilullo'];
// let res = arr.map(function (value) {
//     if (typeof value == 'string') {
//         return value.toUpperCase();
//     }
// })

// 10-misol
// 10. Berilgan massivdagi faqat toq sonlarni qaytaruvchi funksiya yozing.
// let arr = [1,2,3,4,5,6,7,8,9];
// function test(arr) {
//     let res = [];
//     for (const iterator of arr) {
//         if (iterator % 2 == 1) {
//             res.push(iterator)
//         }
//     }
//     return res
// }
// console.log(test(arr));

//11. Berilgan massivdagi eng uzun so'zni qaytaruvchi funksiya yozing.
// let arr = ['salom','shox','valilullo'];
// let res= arr.map(function (value) {
//     if (typeof value == 'string') {
//         return value.toUpperCase();
//     }
// })
// console.log(res);

// let arr = ['salom','valilullo',1234567898978];
// function test(arr) {
//     let res = ''
//     for (const iterator of arr) {
//         if (iterator.length > res.length && typeof iterator == 'string' ) {
//             res = iterator
//         }
        
//     }
//     return res
// }
// console.log(test(arr));


// 11. Berilgan massivdagi eng uzun so'zni qaytaruvchi funksiya yozing.
// let arr = ['salom','shox','valilullo'];
// function test(arr) {
//     let a = arr[0]
//     arr.forEach(function (value) {
//         if (a.length <   value.length) {
//             a = value
//         }
        
//     }) 
//     return a
// }
// console.log(test(arr));

// 12-misol
// 12. Berilgan massivdagi barcha sonlarni yig'indisini qaytaruvchi funksiya yozing.
// let arr = [1,2,3,4,5,6,7,8,9];
// function name(arr) {
//     let sum = 0;
//     for (const iterator of arr) {
//         sum += iterator
//     }
//     return sum
// }
// console.log(name(arr));

// 13-misol
// 13. Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan funksiya yozing.
// let arr = [1,-2,3,4,-5,6,-7];
// function test(arr) {
//     let res = [];
//     for (const iterator of arr) {
//         if (iterator > 0 ) {
//             res.push(iterator)
//         }
//     }
//     return res
// }
// console.log(test(arr));

// 14. Berilgan massivdagi har bir so'zning uzunligini qaytaruvchi funksiya yozing.
// let arr = ['salom','xush kelibsiz','marxamat'];
// function test(arr) {
//     let a = [];
//     for (const iterator of arr) {
//         a.push(iterator.length)
//     }
//     return a
// }
// console.log(test(arr));


// function boshXarfKattaQil(arg) {
//     let res = arg.map(function(value) {
//         return value[0].toUpperCase() + value.slice(1);
//     })
//     return res;
// }
// let test = ["salom", "javascript"];
// console.log(boshXarfKattaQil(test));


// 15 misol

// let res = [1,2,3,4,5];
// function name(arg) {
//   let sum = 0;
//   for (const iterator of arg) {
//     sum += iterator **2

//   }
//   return sum
// }
// console.log(name(res));

// 16 misol


// let arr = [1,2,3,2,4,5,2,7];
// let res = [];
// arr.forEach(function(value, index){
//   let is = arr.find(function(valuef,indexf){
//    return value == valuef && index != indexf

// })
// if(!is){
//  res.push(value)

// }
// return res
// })

// console.log(res);

// 17 misol

//  let str = [1,2,3,4,5,6];

// function sum(arg) {
//     let reversed = [];

//     for (let i = arg.length - 1; i >= 0; i--) {
//         reversed += arg[i];
//     }

//     return reversed;
// }
// console.log(sum(str));   

// 18 misol
// 19 misol
// 20 misol

// let arg = ['salom','xayr','olma'];
// function name(arg) {
//     let sum = arg.map(function(v){
//      return v[0].toUpperCase() + v.slice(1)

//     })
//      return sum
// }
// console.log(name(arg));

// 21 misol

// let str = 'salom     xayr         ';
// function name(arg) {
//     return arg.split(' ').join('');
// }

// console.log(name(str));