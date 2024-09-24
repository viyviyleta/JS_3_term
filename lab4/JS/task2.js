/*2.Используя коллекцию Set создайте список студентов. О каждом студенте содержится информация: номер зачетки, группа, ФИО. Создайте функции, которые:
- добавляют студента, 
- удаляют по номеру, 
- фильтруют список по группе, 
- сортируют по номеру зачетки. 
*/
let students = new Set();

// Функция добавления студента
function addStudent(student) {
    students.add(student);
}

// Функция удаления студента по номеру зачетки
function deleteStudent(studentId) {
    students.forEach((student) => {
        if (student.studentId === studentId) {
            students.delete(student);
        }
    });
}

// Функция фильтрации студентов по группе
function filterStudent(group) {
    console.log(`Студенты группы ${group}:`);
    students.forEach((student) => {
        if (student.group === group) {
            console.log(student);
        }
    });
}

// Функция сортировки студентов по номеру зачетки
function sortStudent() {
    return Array.from(students).sort((a, b) => a.studentId - b.studentId);
}

// Добавляем студентов
addStudent({ studentId: 4, group: "A", fio: "Бабич Виолетта" });
addStudent({ studentId: 7, group: "A", fio: "Гузич Диана" });
addStudent({ studentId: 6, group: "B", fio: "Белько Максим" });



// Фильтрация по группе "A"
filterStudent("A");

// Удаляем студента с номером зачетки 7
deleteStudent(7);

// Фильтрация по группе "A" после удаления
filterStudent("A");

// Сортировка студентов по номеру зачетки
console.log("Отсортированные студенты:");
console.log(sortStudent());
