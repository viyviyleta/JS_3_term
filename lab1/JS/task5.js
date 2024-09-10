let correctAnswer = ["марина", "марина федоровна", "кудлацкая марина федоровна"];
let isCorrect = false;
 
do
{
    let userAnswer = prompt("Введите имя преподователя", "").trim();
    if (correctAnswer.includes(userAnswer.toLowerCase()))
    {
        alert('Правильный ответ!');
        isCorrect = true;
    }
    else
    alert('Неправильно, попробуй еще раз!');
} while(!isCorrect);
