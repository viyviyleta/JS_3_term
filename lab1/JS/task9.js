// let days_OfWeek = {
//     1: 'Понедельник',
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье",
// }

// let userDayumber = prompt("Введите номер дня недели (1-7)", "");

// if (userDayumber >= 1 && userDayumber <=7)
// {
//     alert("Под этим номером " + days_OfWeek[userDayumber]);
// }
// else
// {
//     alert("Неверно введен номер дня.");
// }

let days_OfWeek = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];

let userDayumber = prompt("Введите номер дня недели (1-7)", "");

if (userDayumber >= 1 && userDayumber <=7)
{
    alert("Под этим номером " + days_OfWeek[userDayumber-1]);
}
else
{
    alert("Неверно введен номер дня.");
}