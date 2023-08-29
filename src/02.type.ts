/**
 * ts的类型
 * number 任意数字
 * string 任意字符串
 * boolean  布尔值
 * 字面量
 * any 任意类型
 * unknown  类型安全的any
 * void 空值 （没有值 undefined）
 * never 没有值
 * object 
 * array
 * enum 枚举
 * tuple ts新增类型 固定数组的长度
 */

let num: number = 2
let isBollean: boolean = false
let str: string = 'sdf'

/**
 * 字面量
 *  可以确定变量的取值范围
 *   可以指定变量的类型
 */
let color: 'red' | 'blue' | 'green'
let math: 13 | 23 | 'df'
let d: any = 4
d = 'hello'

/**
 * 数组的定义有以下两种方式
 */
let list: number[] = [1,3,4]
let arr: Array<number> = [13,432,45]

/**
 * tuple 固定长度的数组
 */

let tu: [string,number]
tu = ['dfasf',123]

let len = (<string>str).length
// console.log('以上方式属于类型断言',len)