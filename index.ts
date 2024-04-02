#! /usr/bin/env node


import inquirer from "inquirer";
   //Arrey:
let todolist =[];

let condition = true;
      //loop:
while(condition){

    const answer = await inquirer.prompt(
    [
        {
        name :"todo" ,
        type :"input" ,
        message : "What you went to add in your todo?"
    },
    {
        name :"moretodo",
        type :"confirm",
        message : "Do you went add more in your todo?",
        default : "fasle",
    }
]

);
//       Arrey:
todolist.push( answer.todo);
//       loop:
condition = answer.moretodo;
//       console arrey: 
console.log(todolist);

}