let user = {
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11}
]

let user4 = {
    name: 'Masha',
    age: 19,
    studies:{
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams:{
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            {maths: true, mark: 8},
            {programming: true, mark: 4}
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};

let store = {
    state: { // 1 уровень
        profilePage: { // 2 уровень
            posts: [ // 3 уровень
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
};

// 1.Выполнить глубокое копирование всех объектов и массивов. Использовать spread оператор. 

let userCopy = {...user};

let numbersCopy = {...numbers};

let user1Copy = {...user1, location: {...user1.location}};

let user2Copy = {...user2, skills: [...user2.skills]};

let arrayCopy = array.map(item => ({...item}));

let user4Copy = {...user4, 
    studies: {...user4.studies, 
        exams: {...user4.studies.exams}}};

let uesr5Copy = {...user5, 
    studies: {...user5.studies, 
        department: {...user5.studies.department}, 
        exams: [...user5.studies.exams.map(exam => ({...exam}))]}};

let user6Copy = {...user6,
     studies: {...user6.studies, 
        department: {...user6.studies.department}, 
        exams: [...user6.studies.exams.map(exam => ({...exam, 
            professor: {...exam.professor}}))]
        }};

let user7Copy = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {...user7.studies.department},
        exams: [...user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: [...exam.professor.articles.map(article => ({...article}))]
            }
        }))]
    }
}; 

let storeCopy = {
    ...store,
    state: {
        ...store.state,
        profilePage: {
            ...store.state.profilePage,
            posts: store.state.profilePage.posts.map(post => ({...post})), 
        },
        dialogsPage: {
            ...store.state.dialogsPage,
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({...dialog})), 
            messages: store.state.dialogsPage.messages.map(message => ({...message})), 
        },
        sidebar: [...store.state.sidebar] 
    }
};     

//2.Обратитесь к копии объекта user5 и измените значение свойства group на 12, а оценку по программированию измените на 10.
uesr5Copy.studies.department.group = 12;
uesr5Copy.studies.exams.find(exam => exam.programming).mark = 10

console.log("Значеиние объекта: ");
console.log(user5.studies.department.group);
console.log(user5.studies.exams.find(exam => exam.programming).mark);

console.log("Значеиние копии: ");
console.log(uesr5Copy.studies.department.group);
console.log(uesr5Copy.studies.exams.find(exam => exam.programming).mark);

//3.Обратитесь к копии объекта user6 и измените имя преподавателя.
user6Copy.studies.exams.find(exam => exam.programming).professor.name = "Elena Vladimirovna";

console.log("Значеиние объекта: ");
console.log(user6.studies.exams.find(exam => exam.programming).professor.name)

console.log("Значеиние копии: ");
console.log(user6Copy.studies.exams.find(exam => exam.programming).professor.name);

//4.Обратитесь к копии объекта user7 и измените количество страниц на 3 для статьи “About CSS” преподавателя Petr Ivanov.
let petrIvanov = user7Copy.studies.exams.find(exam => exam.professor.name === 'Petr Ivanov').professor;
let cssArticle = petrIvanov.articles.find(article => article.title === 'About CSS');
cssArticle.pagesNumber = "new Value";

console.log("Значеиние объекта: ");
console.log(user7.studies.exams.find(exam => exam.professor.name === 'Petr Ivanov').professor);

console.log("Значеиние копии: ");
console.log(petrIvanov);

//5.Замените все сообщения в объекте store на “Hello”
storeCopy.state.profilePage.posts.forEach(post => post.message = 'Hello'); 
storeCopy.state.dialogsPage.messages.forEach(message => message.message = 'Hello'); 

console.log("Значение объекта: ");
console.log(store.state.profilePage.posts);
console.log(store.state.dialogsPage.messages);

console.log("Значение копии: ");
console.log(storeCopy.state.profilePage.posts);
console.log(storeCopy.state.dialogsPage.messages);