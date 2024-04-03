#! /usr/bin/env node
import inquirer from "inquirer";
//Arrey:
let todolist = [];
let condition = true;
//loop:
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you went to add in your todo?"
        },
        {
            name: "moretodo",
            type: "confirm",
            message: "Do you went add more in your todo?",
            default: "fasle",
        }
    ]);
    const { todo, moretodo } = answer;
    console.log(answer);
    condition = moretodo;
    if (todo) {
        todolist.push(todo);
    }
    else {
        console.log("\nkindly add valid input\n");
    }
    if (todolist.length > 0) {
        console.log("your todo list :");
        todolist.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log(" No todo found");
    }
}
;
