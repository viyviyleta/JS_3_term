let russianMark;
let mathMark;
let englishMark;

russianMark = prompt("Ваша оценка по русскому языку", '');
mathMark = prompt("Ваша оценка по математике", '');
englishMark = prompt("Ваша оценка по ангглийскому языку", '');

if( russianMark > 3 && mathMark > 3 && englishMark > 3)
{
    alert('Вы спешно сдали все экзамены! Вы переходите на следующий курс:)');
}
else
{
    if(russianMark < 4 && mathMark < 4 && englishMark < 4)
        {
        alert('Вы отчислены:( До встречи в следующем году!');
        }

else 
{
    if(russianMark < 4 || mathMark < 4 || englishMark < 4)
        {
            alert('У вас есть пересдачи. Удачи!');
        }
}
}