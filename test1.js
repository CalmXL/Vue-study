/* 
  引用变量赋值
*/

// const o1 = {m : 1}
// const o2 = o1

// // o2.m = 3

// const o3 = o1
// const o4 = o3
// // const o4 = {m : 3}

// // console.log(o1)
// // console.log(o2)

// console.log(o3.m, o4.m) // 1 , 3

// function fn(o4){
//   // o4.m = 3
//   o4 = {m : 1}
// }

// fn(o4)
// console.log(o3.m, o4.m)// 3, 3

// function setName(obj){
//   obj.name = 'kobe'
// }

// function setName2(obj){
//   obj.name = 'kobe'
//   var obj = new Object()
//   obj.name = 'Jame Leborn'
// }

// const obj = {name : 'curry'}

// setName2(obj)
// console.log(obj.name)

let a = 3
let b = a

b = 4
console.log(a,b)





