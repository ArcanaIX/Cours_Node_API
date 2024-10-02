const process = require("process");
const fs = require("node:fs");
const bcrypt = require("bcrypt");

if (!fs.existsSync("./todo.txt")) {
    fs.writeFileSync("./todo.txt", "");
}

function addTodo() {
    let str = "";
    for(index in process.argv) {
        if (index >= 3) {
            str += process.argv[index] + " ";
        }
    }

    fs.appendFileSync("./todo.txt", str + "\n");
}

function readTodo() {
    let file = fs.readFileSync("./todo.txt", "utf-8");
    console.log(file);
}

function removeLineTodo(index) {
    let file = fs.readFileSync("./todo.txt", "utf-8");
    let lines = file.split("\n");
    lines.splice(index - 1, 1);
    fs.writeFileSync("./todo.txt", lines.join("\n"));
}

function removeTodo() {
    fs.unlinkSync("./todo.txt");
}

function addEncryptTodo() {
    let str = "";
    for(index in process.argv) {
        if (index >= 3) {
            str += process.argv[index] + " ";
        }
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(str, salt, (err, hash) => {
            fs.appendFileSync("./todo.txt", hash + "\n");
        });
    });

}

switch (process.argv[2]) {
    case "add":
        addTodo();
        break;

    case "read":
        readTodo();
        break;

    case "encrypt":
        addEncryptTodo();

    case "delete":
        removeTodo()
        break;

    case "deleteLine":
        removeLineTodo(parseInt(process.argv[3]))
}
