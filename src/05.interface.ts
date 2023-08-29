/**
 * 接口类似于抽象类
 * 区别： 接口中的所有方法和属性都没有实值
 * 接口可以限制一个对象的接口，对象只有包含接口中定义的所有属性和方法才能匹配接口
 * 可以让一个类去实现接口，实现接口时类中要包括接口中的所有属性
 */
interface Test {
    name: string;
    sayHello(): void;
}

function fn(test: Test) {
    test.sayHello()
}
fn({name: '孙悟空',sayHello() {
    // console.log('自动更新成功',this.name)
}})
