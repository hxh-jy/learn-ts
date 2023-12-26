/**
 * 类型别名
 * 用来给一个类型起个新名字
 * 语法: type 新名字 = 旧名字
 * 作用: 简化类型书写
 * 可以使用类型别名为任何类型命名
 */
// type ID = number | string
function printCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printCoord({ x: 1, y: 2 });
/**
 * 类型别名和接口的区别
 */ 
