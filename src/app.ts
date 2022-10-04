//Basic Types
let id: number=5
let company:string='Abiy Media'
let isPublished:boolean=true
let x:any='hello'
let ids:number[]=[1,2,3,4,5]
let arr:any[]=[1,true,'Hello']
//Tuple
let person:[number,string,boolean]=[1,'bread',true]
//Tuple Array
let employees:[number,string][]
employees=[
    [1,'Brad'],
    [1,'John'],
    [1,'Jill']
]
//union if u want a particular varaible use more than one type
let pid:string|number=22
pid='22'
//enum allow us to define set of named constants
enum directions{
    Up=1,
    Down,
    Left,
    Right
}
enum directions2{
    up='Up',
    Down="Down",
    Left="Left",
    Right="Right",
}
console.log(directions.Up)
//Objects 
type users={
    id:number,
    name:string
}
const users:users={
    id:1,
    name:'John'
}
//Type Assertion is explictly telling the compiler that
// we want treat entity in different type
let cid:any=1
//let customerId=<number>cid
let customerId=cid as number

//functions

function addNum(x:number,y:number):number{
    return x+y
}
function logs(message:string|number):void{
    console.log(message)
}
//Interfaces is kind of like custome type // 
// specfic structur to an object or function
interface UserInterface{
    readonly id:number,
    name:string
    age?:number
}
const user1:UserInterface={
    id:1,
    name:'John'
}

//we can't use interface in unions  types only use for permitives
//interface Point=number|string; we cann't use like this
type Point=number|string
const p1:Point=1

interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(x:number,y:number):number=>x+y
const sub:MathFunc=(x:number,y:number):number=>x-y
interface PersonInterface{
    id:number,
    name:string
    register():string
}
//classes
class Person implements PersonInterface{
    id:number
    name:string
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    register(){
        return  `${this.name} is now registered`
    }
}
//const brad=new person(1, 'Abiy')

class Employee1 extends Person{
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position=position
    }
}
const empw=new Employee1(1,'shawn','Developer')
console.log(empw.register)
//Generic basiclly used to build reusable components
//it is a place holder for a type
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray=getArray<number>([1,2,3,4])
let stArray=getArray<string>(['brad','john','jill'])