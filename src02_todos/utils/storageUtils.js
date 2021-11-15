/* 
  数据存储工具模块
*/

/* 
  localStorage对象:
    1.使用方法存储数据
      localStorage.setItem("name", "kobe")
    2.使用属性存储数据
      localStorage.book = "西游记"
    3.使用方法读取数据
      var name = localStorage.getItem("name")
    4.使用属性读取数据
      var book = localStorage.book 
*/
export function setItem(todos){
  localStorage.setItem('todo_keys', JSON.stringify(todos))
}

export function getItem() {
  return JSON.parse(localStorage.getItem('todo_keys') || '[]')
}