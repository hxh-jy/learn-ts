/**
 * 定义联合类型
 * number | string
 * 联合类型的操作只能是共有的部分
 * 解决方案 1. 类型断言 2. 缩小类型联合
 */
function printId(id) {
    console.log(id);
    if (typeof id === 'string') {
        console.log(id.toUpperCase()); // ok
    }
    //   console.log(id.toUpperCase()) // 报错，因为number类型没有toUpperCase方法
}
printId(1);
printId('1');
