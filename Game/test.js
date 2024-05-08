// // let audio = new Audio('./audio/bgMusic.mp3')
// // audio.play();
// let button = document.querySelector('button')
// console.dir(button);

// let AnswersLength = Object.keys(Answers);


// for(let j = 1; j <= AnswersLength.length; j++ ){
//     AnswerArray[j] = Answers[j];
// }

// console.log(AnswerArray)

// AnswerArray.map((Value,Key)=>{
//     Value.addEventListener('click',(objectOfOptionBox)=>{

//         LocalStore.SelectedBox = objectOfOptionBox.target.id
//         LocalStore.CorrectBox = objectOfOptionBox.target.id
//         localStorage.setItem('Results',JSON.stringify(LocalStore)); 

//     })
// })


// Code of Funcnal.js

let Sound = document.querySelector('[alt="Sound"]');
let Muted = document.querySelector('[alt="Muted"]');


// Back ground Music Work Started 
var audio = new Audio('./audio/bgMusic.mp3');
document.addEventListener('DOMContentLoaded', () => {
    // audio.play();
})


Sound.addEventListener('click', () => {
    Muted.style.display = "block"
    Sound.style.display = "none"
    audio.play();
})
Muted.addEventListener('click', () => {
    Muted.style.display = "none"
    Sound.style.display = "block"
    audio.pause();
})

// Back ground Music Ended


// Showing the Question and Answer in UI

// Questions

let Questions = {
    1: 'what is Js?',
    2: 'When js in invented?',
    3: "How many type's of Data Type we have!!!",
    4: "why we use Data Type's",
    5: "How to print a Data In Console in JS?",
}

// Options 

let Answers = {
    1: {
        1: "Programming Language",
        2: "It is an Language",
        3: "It is an Computer",
        4: "I don't Know"
    },
    2: {
        1: "1995",
        2: "2003",
        3: "2004",
        4: "I don't Know"
    },
    3:
    {
        1: "3",
        2: "2",
        3: "7",
        4: "I don't know"
    },
    4: {
        1: "To Store a Data or Value",
        2: "To parke an car",
        3: "To Communicate with Computer",
        4: "I don't know"
    },
    5: {
        1: "Console.log('Data')",
        2: "print('Data')",
        3: "printf('Data')",
        4: "I don't know"
    }
}



let Question = document.querySelector('.subQuestionsDiv h5');
let Answer = document.querySelectorAll('.opetion1 h5');
let nextbtn = document.querySelector('#next');
let previousbtn = document.querySelector('#previous');

let QuestionIncrementer = 1;
let AnswerIncrementer = 1;

let lengthOfQuestions = Object.keys(Questions);


// Next Button Section Stated and Question Calculation



nextbtn.addEventListener('click', () => {
    Question.innerHTML = Questions[QuestionIncrementer];
    let AnswerSelectionObject = Answers[QuestionIncrementer];
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].innerHTML = AnswerSelectionObject[AnswerIncrementer];
        AnswerIncrementer++;
    }
    AnswerIncrementer = 1;

    if (+QuestionIncrementer == +lengthOfQuestions.length) {
        // console.log("entered")
        nextbtn.style.display = 'none';

    }
    QuestionIncrementer++;
    previousbtn.style.display = 'inline-block';
    console.log(QuestionIncrementer)
})


// Previous Button Section Started
previousbtn.addEventListener('click', () => {
    QuestionIncrementer = QuestionIncrementer - 1;
    Question.innerHTML = Questions[QuestionIncrementer];
    let AnswerSelectionObject = Answers[QuestionIncrementer];
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].innerHTML = AnswerSelectionObject[AnswerIncrementer];
        AnswerIncrementer++;
    }
    AnswerIncrementer = 1;

    if (+QuestionIncrementer == 1) {
        console.log("entered")
        previousbtn.style.display = 'none';

    }
    nextbtn.style.display = 'inline-block';
})

// Local Storeage Section is Started

// Answer's

let Ans = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1
}

let OptionBox = document.querySelector('.Options');

let LocalStroeageSchema = 'a';
let c = 0;
for (let j = 1; j <= 5; j++) {

    let temp = ` "${j}" : { "CorrectBox" : "${Ans[j]}", "SelectedBox" : "","QuestionNo" : ""}`


    if (c < 1) { LocalStroeageSchema = temp + ',' }
    else if (j == 5) { LocalStroeageSchema += temp }
    else { LocalStroeageSchema += temp + ',' }
    c++

}

let check = `{ ${LocalStroeageSchema} }`

// Sample Output of Check 

// -->  '{ "1" : {"name":"suhail","age":"1"} }'

let LocalStore = JSON.parse(localStorage.getItem('Results')) || JSON.parse(check);

let temp = 1;

OptionBox.addEventListener('click', (OptionObject) => {

    LocalStore[temp].SelectedBox = OptionObject.target.id;
    localStorage.setItem('Results', JSON.stringify(LocalStore))
    temp++;

})