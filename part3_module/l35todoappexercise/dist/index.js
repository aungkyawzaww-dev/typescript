"use strict";
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task, done) {
        const newTodo = {
            id: this.tasks.length + 1,
            task,
            done
        };
        this.tasks.push(newTodo);
        this.saveToLocalStorage();
    }
    listTask() {
        this.tasks.forEach(task => console.log(`${task.id}. [${task.done ? "x" : " "}] ${task.task}`));
    }
    getTasks() {
        return this.tasks;
    }
    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.tasks));
    }
}
const todoObj = new TodoList();
todoObj.addTask("Have to go", false);
todoObj.addTask("Have to study", false);
todoObj.addTask("Have to eat", false);
todoObj.listTask();
console.log(todoObj);
console.log(todoObj.getTasks().map(task => task.id));
