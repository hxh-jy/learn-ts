// class Person {
//     public pub: String = '公共属性（类、子类、对象中都可以修改）'
//     protected protect: String = '保护属性(类、子类可以修改、对象不可以)'
//     private pri: String = '私有（类、子类、对象都不可以）'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log('测试抽象类');
var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, sex, age) {
        var _this = _super.call(this, name, sex) || this;
        _this.name = name;
        _this.sex = sex;
        _this.age = age;
        return _this;
    }
    Son.prototype.run = function () {
        console.log('狗在跑');
    };
    return Son;
}(Person));
console.log('打印son实例,webpack自动更新', new Son('Mr zhao', 'male', 31));
