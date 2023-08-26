// class Person {
//     public pub: String = '公共属性（类、子类、对象中都可以修改）'
//     protected protect: String = '保护属性(类、子类可以修改、对象不可以)'
//     private pri: String = '私有（类、子类、对象都不可以）'

//     static sta: String = '静态，不属于实例，属于类的属性'
//     readonly read: String = '只读属性'

//     constructor(pub: String,protect: String,pri: String) {
//         this.pub = pub
//         this.protect = protect
//         this.pri = pri
//     }
// }

// class son extends Person {
//     constructor(pub: String,protect: String,pri: String) {
//         super(pub,protect,pri)
//         this.pub = pub
//         this.protect = protect
//         // this.pri = pri 不可以使用
//     }
// }
// let person = new Person('public','protect','private')
// console.log('类实例对象:>>>>',Person.sta)
// console.log('测试实时更新',person.read)
// console.log('测试在对象中修改',
//         person.pub = 'sdf')

/**
 * 定义一个抽象类的关键字是abstract 
 * 抽象类只能被其他类继承，不能用于创建实例
 * abstract开头的方法叫抽象方法，抽象方法体只能定义在抽象类中
 * 继承抽象时的抽象方法必须要实现
 */

console.log('测试抽象类')

abstract class Person {
    public name: string
    public sex: string
    constructor(name: string,sex: string) {
        this.name = name
        this.sex = sex
    }
    abstract run(): void
}

class Son extends Person {
    protected age: number
    constructor(name: string,sex: string,age: number) {
        super(name,sex)
        this.name = name
        this.sex = sex
        this.age = age
    }
    run() {
        console.log('狗在跑')
    }
}
console.log('打印son实例,webpack自动更新',new Son('Mr zhao','male',31))