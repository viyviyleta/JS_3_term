class Task {
    constructor(id, title, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    getCompletion() { 
        this.isCompleted = !this.isCompleted;
    }
}

console.log("Работа с Task: ");

let task1 = new Task(1, "Встать в 7 утра!");

console.log(task1.isCompleted);

task1.getCompletion();
console.log(task1.isCompleted);

task1.setTitle("Почистить зубы");
console.log(task1.title);

class TodoList {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks =[];
    }

    setList(newTitle) {
        this.title = newTitle;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    filterTaskByStatus(isCompleted) {
        return this.tasks.filter(task => task.isCompleted === isCompleted)
    }
}

console.log("Работа с TodoList: ");

let dailyTask = new TodoList(1, "Дела на этот денек");
dailyTask.addTask(new Task(1, "Проснуться, желательно, в 8 утра!"));
dailyTask.addTask(new Task(2, "Умыться :)"));
dailyTask.addTask(new Task(3, "Прочитать 2 главы книги"));

let workingList = new TodoList(2, "Список лаб на день");
workingList.addTask(new Task(1, "Повторить 10 лабу по JS"));
workingList.addTask(new Task(2, "Подговить 10 лабу по ООП"));
workingList.addTask(new Task(3, "Доделать метод в 11 лабе по ООП"));

dailyTask.setList("Ежедневные дела");

dailyTask.tasks[0].getCompletion();
workingList.tasks[1].getCompletion();

dailyTask.tasks.forEach(task => console.log(task.title, task.isCompleted));

let filterTask = dailyTask.filterTaskByStatus(true)
console.log("Выполненные задачи: ", filterTask);

console.log("Все задачи из второго списка задач: ");
workingList.tasks.forEach(task => {
    console.log(`${task.title} - ${task.isCompleted ? "Выполнено" : "Не выполнено"}`);
});


   