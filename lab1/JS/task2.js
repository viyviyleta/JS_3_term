/* Задание 2
заадем размеры для решения задачи */
let small_square = 5;
let large_side_square = 45;
let small_side_square = 21;
let result;
//Проверяем удовлетворяет ли условию, если нет, тогда выводим ошибку, если да, то правильный ответ
if (small_side_square >= small_square && large_side_square >= small_square) 
    {
    result = Math.floor(large_side_square / small_square) * Math.floor(small_side_square / small_square);
    }
      else
       {console.log("Ошибка");}
//Выводим ответ
 console.log(result);

