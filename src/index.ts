let sales =123_456_789;
let course: string='Typescript'; 
let is_published: boolean =true;
let level;
level=1
level="a"
let numbers:number[]=[1,2,3];
//intializing tuple
let user:[number,string]=[1,'Abiy']

// //intializing enum
// const small=1;
// const medium=2;
// const large=3;
enum Size {Small=1, Medium, Large};
let mySize: Size=Size.Medium;
console.log(mySize);

function calculateTax(income:number, taxYear=2022):number{//it anotets the return value is number
  
    if(taxYear<2022)
     return income * 1.2
    return income * 1.3
}
calculateTax(10_000)


//intializing an object 
let employee:{
    readonly id:number,
    name:string
    retire:(date:Date)=>void
}={
    id:3,
    name:'Abiy',
    retire:(date:Date)=>{
        console.log(date)
    }
}

//using type aliases
type Employee={
    readonly id:number,
    name:string
    retire:(date:Date)=>void
}
let emp:Employee={
    id:3,
    name:'Abiy',
    retire:(date:Date)=>{
        console.log(date)
    }
}

function KgToLbs(weight: number | string):number{
//we use here narrowing
if( typeof weight==='number')
return weight*2.2;
else
return parseInt(weight)*2.2;
}
KgToLbs(10);
KgToLbs('10kg');

//work on intersactions
type Draggable={
    drag:()=>void
}
type Resizable={
    resize:()=>void
}
type UIWidget= Draggable & Resizable;
let textBox: UIWidget={
    drag:()=>{},
    resize:()=>{}
}

//using literal types
type Quantity=50 | 100
let quantity: Quantity=100
type Metric='cm'|'inch'


//optional chaning
type Customer={
    BirthDate:Date,
};
function getCusotmer(id:number):Customer | null | undefined{
    return id===0? null: {BirthDate:new Date()}
}
let customer=getCusotmer(1)
//optional property access operator
console.log(customer?.BirthDate);

//Optional element access operator
//customers?.[0]
//Optional call Operator
//let log:any=(message:string)=>console.log(message)
let log: any=null;
log?.('a');