"use strict";
// // The main types is: Number, String, Boolean and Any
// let age: number = 5 // Number 
// let company: string = "company 1" // String 
// let isPublished: boolean = true // bollean true or false
// let x: any = 'hello' // can be anything 
// // Arrays 
// let ids: number[] = [1, 2, 3, 4, 5, 6] // define an array of numbers 
// let companies: string[] = ["company 1", "company 2"] // define an array of strings
// let arr: any[] = [1, "r", true] // do not specify an especific type, so can be multiple types
// //Tuple 
// let person: [number, string, boolean] = [2, "two", true] // specify an especific order of types
// // Tuple Array
// // combine the two so define an array of tuples 
// let employee: [number, string][]
// employee = [
//   [1, "John"],
//   [2, "Smith"]
// ]
// //Union 
// let digit: number | string // that  permit to more than one type to be used
// digit = 3 // this is valid 
// digit = "three" // this is valid 
// // Enum (enumerate types)
// enum Direction1 {
//   Up, 
//   Down, 
//   Left,
//   Right
// }
// //Objects 
// const user: {
//   id: number, 
//   name: string
// } = {
//   id: 1,
//   name: "name"
// }
// // or for a better redable soluction 
// type User = {
//   id: number,
//   name: string
// }
// const user2: User = {
//   id: 2,
//   name: "name2"
// }
// //Type Assertion
//   //  used to specify a more specific type
// let cid: any = 1
// let customerId = <number>cid // using angle brackets
// let customerId1 = cid as number // using "as", both ways works
// //Fucntions 
//   // Has to specify the paramters and the return value
// function addNum(x: number, y: number): number {
//   return x + y
// }
// // void 
//   // specify an function that don't have a return value
// function log(message: string | number): void{
//   console.log(message)
// }
// // Interface
//   //use to specify Objects and has the "redonly" property wich throw an error if someone try to sign any value.
// interface UserInterface {
//   readonly id: number 
//   name: string
//   age?: number // set this property to be optional
// }
// // defining function structure with interface
// interface MathFunc {
//   (x: number, y:number): number
// }
// const add: MathFunc = (x:number, y:number): number => x + y
// const sub: MathFunc = (x: number, y:number): number => x - y
// //Classes 
// class Person {
//   id: number
//   name: string
//   private balance: number
//   constructor(id: number, name: string, ){
//     this.id =  id,
//     this.name = name
//     this.balance = 0
//   }
//   balanceInquiry(): void{
//     console.log(this.balance)
//   }
//   deposit(amount: number){
//     this.balance += amount
//     console.log(this.balance)
//   }
// }
// interface PersonInterface {
//   id: number
//   name: string
//   balanceInquiry(): void
//   deposit(amount: number): void
// }
// class Person2 implements PersonInterface{
//   id: number
//   name: string
//   private balance: number
//   constructor(id: number, name: string, ){
//     this.id =  id,
//     this.name = name
//     this.balance = 0
//   }
//   balanceInquiry(): void{
//     console.log(this.balance)
//   }
//   deposit(amount: number){
//     this.balance += amount
//     console.log(this.balance)
//   }
// }
// //SubClass
// class Employee extends Person2 {
//   position: string 
//   constructor(id: number, name: string, occupation: string){
//     super(id, name)
//     this.position = occupation 
//   }
//   view():void{
//     console.log(`id: ${this.id} name:${this.name} occupation:${this.position}`)
//   }
// }
