// console.log("Hello Word Using Node baby!!!!");



// const a=12
// console.log(a);
// if(a>10){
//     let b=23;
//     a=40;
//     console.log("a inside conditionn "+a);
// }
// console.log("a outside condition"+a);

// let a=12;
// let b="12";
// console.log(typeof a);
// console.log(typeof b);
// let today=Date();
// console.log(today);

// if(a==b){// == checks on value!!!...
//     console.log("Welcome!")
// }
// else{
//     console.log("Bhaggg Bsdk!!!")
// }


// if(a===b){// === checks on value as well as its typee baby !!!!...
//     console.log("Welcome!")
// }
// else{
//     console.log("Bhaggg Bsdk!!!")
// }

// let myname="Avinash";
// let college="ABES EC";
// let result=`Hi , my name is ${myname} and I am doing Engineering from ${college}.`;
// console.log(result)


//                          //Objects in JS
//                 //key:value
// let key="sname";
// const students={
//     sname:"Aviii",
//     course:"B-TECH",
//     college:"ABES EC"
// }
// console.log(students)
// console.log("Name: "+students.sname+" Course: "+students.course);

// const {sname}=students;
// console.log(sname);
// students["key"]="Rahul"; //students["sname"]="ulluu"; also works..!!!
// console.log(students);

// const students=[
//     {
//         sname:"Aviii",
//         course:"B-TECH",
//         college:"ABES EC"
//         },
//     {
//         sname:"ram",
//         course:"B-H",
//         college:"ABES CH"
//         }
// ]

// console.log(students[1].sname + " and "+ students[1].college);


//                   FUNCTIONNNNN!!!!!!

// function greeting(msg="Avinash"){
//     console.log("Hello "+msg +" How are You!!!");
// }
// //greeting("Greetings");

// function sum(a,b,c){
//     return a+b;

// }
// let data=sum(4,10,9);// automatically discard 9..!! 
// console.log(data);
// console.log(sum(1,2));

// function summ(a,b,c){
//     return a+b+c;

// }
// let dataa=summ(4,10,9); 
// console.log(dataa);
// console.log(summ(1,2,8));


//                                Function Callback!!!..

// function cCompiler(){
//     return "CCompiler Selected";
// }
// function javaCompiler(){
//     return "Java Compiler Selected";
// }
// function selectLang(clbk){
//     console.log("you have :" +clbk())
// }

// selectLang(cCompiler);


// function selectLang(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "CCompiler Selected";
//         }
//         data =cCompiler();
//     }
//     if(language=="java"){
//         function javaCompiler(){
//             return "Java Compiler Selected";
//         }
//         data=javaCompiler();
//     }
//     return data;
// }

// let result=selectLang("c");
// console.log(result);




console.log("Hello World");
let parent=document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerText="Changed data through JS";
parent[0].innerHTML="<h2>Changed data through JS</h2>";