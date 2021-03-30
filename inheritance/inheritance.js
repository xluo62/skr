// 手写继承:
// 实现方式: 寄生组合式
// 说明: 其它方式的继承会在一次实例中调用两次父类的构造函数或有其它缺点

// 先实现自身属性的继承
//再进行原型链的链接 链接原型链上的方法
const create = require("../object/create");
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log("我的名字叫: ", this.name);
};
function Student(name, age, price) {
  Person.call(this, name, age);
  this.price = price;
}
//返回一个空对象，它的原型对象为Person
Student.prototype = create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.sayPrice = function () {
  console.log("我的身价是每月: ", this.price);
};
//这么写不符合ecma规范
//Student.prototype.__proto__ = Person.prototype;

const s = new Student("tom", 23, 12000);
console.log(s.name, s.age, s.price);
s.sayPrice();
s.sayName();
console.log(s.constructor, s);
/* 
    问题1: student的原型对象包含几个必要的属性
    问题2: Student构造函数多执行了1次
    */

/* 
    寄生组合式继承: 寄生 + prototype + call
    1. 构造函数中用call借用父类型构造函数, 得到父类型的属性
    2. 指定新的原型对象, 得到父类型原型对象上的方法
    3. 寄生处理: 去除原型对象上多余的属性
    */
