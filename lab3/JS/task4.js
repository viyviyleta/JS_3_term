 /*4.Вам дана строка, состоящая из символов ASCII. 
 Переведите символы в код - число total1, 
 замените все цифры 7 на 1 - число total2. 
 И вычтите из total1 число total2.*/
 let stringASCII = 'ABC';
 let total1 = '';
 
 for (let i = 0; i < stringASCII.length; i++) {
     let num = stringASCII.charCodeAt(i);
     total1 += num;
 }
 
 console.log('Total1 (ASCII-коды):', total1);
 
 let total2 = total1.replace(/7/g, '1'); //глобальная замена
 let subtraction = parseInt(total1) - parseInt(total2);
 
 console.log('Substraction (разность):', subtraction);
 