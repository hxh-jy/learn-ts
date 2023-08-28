class Person {
    public pub: String = '公共属性（类、子类、对象中都可以修改）'
    protected protect: String = '保护属性(类、子类可以修改、对象不可以)'
    private pri: String = '私有（类、子类、对象都不可以）'

    static sta: String = '静态，不属于实例，属于类的属性'
    readonly read: String = '只读属性'

    constructor(pub: String,protect: String,pri: String) {
        this.pub = pub
        this.protect = protect
        this.pri = pri
    }
}

class son extends Person {
    constructor(pub: String,protect: String,pri: String) {
        super(pub,protect,pri)
        this.pub = pub
        this.protect = protect
        // this.pri = pri 不可以使用
    }
}
let person = new Person('public','protect','private')
console.log('类实例对象:>>>>',Person.sta)
console.log('测试实时更新',person.read)
console.log('测试在对象中修改',
    '自动更新功能的测试',
        person.pub = 'sdf')