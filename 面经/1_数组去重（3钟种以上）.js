// 1. 双重循环

var array = [1, 1, 2, 3]

function uniqure1(arr) {
  var res = []
  var aLen = arr.length
  for (var i = 0; i < aLen; i++) {
    for (var j = 0, rLen = res.length; j < rLen; j++) {
      if (arr[i] === res[j]) {
        break;
        // 跳出当前循环
      }
    }
    if (j === rLen) {
      res.push(arr[i])
    }
  }
  return res
}
console.log(uniqure1(array))
// 2. indexof

// 使用indexof简化内层循环，
var array = [1, 1, 2, 3]

function unique2(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i]
    if (res.indexOf(current) === -1) {
      // indexOf获取当前元素索引
      res.push(current)
      // push推入数组
    }
  }
  return res
}

console.log(uniqure2(array))

// indexOf
// 定义和用法
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// stringObject.indexOf(searchvalue, fromindex)
// 参数1：必需。规定需检索的字符串值。
// 参数2：可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
var str = "Hello world!"
document.write(str.indexOf("Hello") + "<br />")
document.write(str.indexOf("World") + "<br />")
document.write(str.indexOf("world"))

// 3. 排序后去重

function unique(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i];
  }
  return res;
}

console.log(unique3(array));

// concat：
// concat() 方法用于连接两个或多个数组。
// 语法：arrayObject.concat(arrayX, arrayX, ......, arrayX)
// 参数：必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
// 返回值是一个新数组
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

document.write(arr.concat(arr2))