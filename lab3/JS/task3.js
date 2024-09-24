/*Напишите функцию, которая на вход принимает массив из студентов, 
где студент — это объект с полями «имя», «возраст» и «номер группы» 
{name: string, age: number, groupId: number}, 
а на выходе возвращает объект, где ключ — это номер группы, 
а значение — массив из студентов старше 17 лет.*/
let students = [
    { name: 'Violetta', age: 18, groupId: 7 },
    { name: 'Pavel', age: 17, groupId: 9 },
    { name: 'Vlad', age: 19, groupId: 8 },
    { name: 'Anna', age: 22, groupId: 7 },
    { name: 'Kirill', age: 16, groupId: 3 }
  ];
  
    function groupStudentsByAge(students) 
    {
      const result = {};
    
      students.forEach(student => 
        {
        if (student.age > 17) 
        {
          const groupId = student.groupId;
    
          if (result[groupId]) 
          {
            result[groupId].push(student);
          } 
          else 
          {
            result[groupId] = [student];
          }
        }
      }
      );
    
      return result;
    }
  
  let groupedStudents = groupStudentsByAge(students);
  console.log(groupedStudents);