/**
 * 函数
 * ts允许指定函数的输入和输出值的类型
 * 声明函数时，可以在每个参数后面加上类型注解
 * 当参数具有类型注释时，将检查该函数的参数
 * 你还可以添加返回类型注释。 返回类型注释出现在参数列表之后
 */

function add(num: number): number {
    return num + num  * 2
}
console.log('函数的使用',add(2))

/**
 * 对象类型的参数
 * 可以通过? 表示可选
 */
function printCoord(pt: {x: number,y?: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

console.log('函数的使用',printCoord({x: 2,y: 5}))
console.log('函数的使用',printCoord({x: 32}))

/**
 * 联合类型: 由两种或多种其他类型组成的类型
 * TypeScript 只有在对联合的每个成员都有效的情况下才允许操作
 * 解决方案是用代码缩小联合
 */

function printId(id: number | string) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log('id的类型',typeof id)
    }
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

printId(234)
welcomePeople(['Mr zhao','Mr han'])

/**
 * 类型别名
 * 任何类型的名称
 * 和接口类型的区别
 * interface 的几乎所有功能都在 type 中可用
 * 主要区别在于无法重新打开类型以添加​​新属性，而接口始终可扩展
 */

type ID = number | string

type Point = {
    x: number;
    y: number;
  };
   
// Exactly the same as the earlier example
function printCoor(pt: Point) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}

printCoor({ x: 100, y: 100 });

//  以下方式是错误的  类型别名一旦创建后就无法修改
// type Point = {
//     ts
// }

interface Personone {
    name: string,
    age: number
}

// 以下方式是正确的 可以向接口中添加新字段
interface Personone {
    sex: string
}

let per: Personone = {
    name: 'Mr zhao',
    age: 31,
    sex: 'male'
}
console.log('测试接口',per)

/**
 * 类型断言
 */