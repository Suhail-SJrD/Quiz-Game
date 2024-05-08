let Sound = document.querySelector('[alt="Sound"]');
let Muted = document.querySelector('[alt="Muted"]');


// Back ground Music Work Started 
var audio = new Audio('./audio/bgMusic.mp3');
document.addEventListener('DOMContentLoaded', () => {
    audio.play();
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

// Time 

let time = {
    1: 30,
    2: 30,
    3: 30,
    4: 30,
    5: 30
}


let Question = document.querySelector('.subQuestionsDiv h5');
let Answer = document.querySelectorAll('.opetion1 h5');
let nextbtn = document.querySelector('#next');
let linkbtn = document.querySelector('#link');
let previousbtn = document.querySelector('#previous');

let one = document.querySelector('#first-Circle')
let two = document.querySelector('#second-Circle')
let three = document.querySelector('#thred-Circle')
let four = document.querySelector('#fourth-Circle')

let focusOne = document.querySelector('[id = "1"]')
let foucsTwo = document.querySelector('[id = "2"]')
let focusThree = document.querySelector('[id = "3"]')
let focusfour = document.querySelector('[id = "4"]')

let focusID;




// Next Button Section Stated and Question Calculation

// Answer's

let Ans = {
    1: 1,
    2: 4,
    3: 3,
    4: 2,
    5: 1
}

let LocalStroeageSchema = 'a';
let c = 0;
for (let j = 1; j <= 5; j++) {

    let temp = ` "${j}" : { "CorrectBox" : "${Ans[j]}", "SelectedBox" : "","QuestionNo" : "1"}`


    if (c < 1) { LocalStroeageSchema = temp + ',' }
    else if (j == 5) { LocalStroeageSchema += temp }
    else { LocalStroeageSchema += temp + ',' }
    c++

}

let check = `{ ${LocalStroeageSchema} }`

// Sample Output of Check 

// -->  '{ "1" : {"name":"suhail","age":"1"} }'

let LocalStore = JSON.parse(localStorage.getItem('Results')) || JSON.parse(check);

let LocalStoreageQuestionIncrementer = 2;

let QuestionIncrementer = 1;
let AnswerIncrementer = 1;

let lengthOfQuestions = Object.keys(Questions);


let completedQuestions = document.querySelector('#completedQuestions')
let totalQuestions = document.querySelector('#totalQuestions')


let Mnits = document.querySelector
    ('#minits')
let Seconds = document.querySelector('#seconds')

let optionBoxMovementIncrement = 1;
let CompeltedQuestionTemp = optionBoxMovementIncrement;

let SecondsCounter = 1;
let minits = 0;
let ClearingInterval;


nextbtn.addEventListener('click', () => {

    Question.innerHTML = Questions[QuestionIncrementer];

    // Updating the Questions and Total Questions
    completedQuestions.innerText = CompeltedQuestionTemp;
    totalQuestions.innerText = lengthOfQuestions.length

    // Updating the time

    let usedToChangeColor = 0;
    ClearingInterval = setInterval(() => {
        if (SecondsCounter == 60) {
            SecondsCounter = 1;
            minits++;
        }
        else if (minits == 1) {
            Mnits.innerText = minits;
        }
        SecondsCounter++;
        Seconds.innerText = SecondsCounter

        if (usedToChangeColor <= 10) {
            document.body.style.backgroundColor = "#CCE2C2"
        }
        else if (usedToChangeColor >= 10 && usedToChangeColor <= 20) {
            document.body.style.backgroundColor = "#D4D69F8C"
        }
        else {
            document.body.style.backgroundColor = "#DBADAD"
        }
        usedToChangeColor++


    }, 1000);

    setTimeout(() => {
        SecondsCounter = 1;
        minits = 0;
        let correctAnsFromLocalStore = +LocalStore[optionBoxMovementIncrement].CorrectBox;

        switch (+correctAnsFromLocalStore) {
            case 1: {

                one.style.display = "inline-block"
                one.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 2: {

                two.style.display = "inline-block"
                two.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 3: {

                three.style.display = "inline-block"
                three.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 4: {

                four.style.display = "inline-block"
                four.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
        }
        clearInterval(ClearingInterval);
    }, (+time[CompeltedQuestionTemp]) * 1000);

    CompeltedQuestionTemp++;


    // Local Storage Setting up the Question Number
    if (QuestionIncrementer >= 2) {
        LocalStore[LocalStoreageQuestionIncrementer].QuestionNo = LocalStoreageQuestionIncrementer;
        localStorage.setItem('Results', JSON.stringify(LocalStore))
        LocalStoreageQuestionIncrementer++;

        switch (+LocalStore[optionBoxMovementIncrement].CorrectBox) {
            case 1: {

                one.style.display = "none"
                one.parentElement.style.border = " 1px solid gray"
            }
                break;
            case 2: {

                two.style.display = "none"
                two.parentElement.style.border = " 1px solid gray"
            }
                break;
            case 3: {

                three.style.display = "none"
                three.parentElement.style.border = " 1px solid gray"
            }
                break;
            case 4: {

                four.style.display = "none"
                four.parentElement.style.border = " 1px solid gray"
            }
                break;
        }



        switch (+focusID) {
            case 1: {

                // one.style.display = "none"
                focusOne.style.border = " 1px solid gray"
            }
                break;
            case 2: {

                foucsTwo.style.border = " 1px solid gray"
            }
                break;
            case 3: {

                focusThree.style.border = " 1px solid gray"
            }
                break;
            case 4: {

                focusfour.style.border = " 1px solid gray"
            }
                break;
        }

        optionBoxMovementIncrement++;
    }



    let AnswerSelectionObject = Answers[QuestionIncrementer];
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].innerHTML = AnswerSelectionObject[AnswerIncrementer];
        AnswerIncrementer++;
    }
    AnswerIncrementer = 1;

    if (+QuestionIncrementer == +lengthOfQuestions.length) {
        // console.log("entered")
        nextbtn.style.display = 'none';
        linkbtn.style.display = 'inline-block'

    }
    QuestionIncrementer++;
    previousbtn.style.display = 'inline-block';
    // console.log(QuestionIncrementer)
})


// Previous Button Section Started
previousbtn.addEventListener('click', () => {


    LocalStoreageQuestionIncrementer--;
    QuestionIncrementer = QuestionIncrementer - 1;
    Question.innerHTML = Questions[QuestionIncrementer];
    let AnswerSelectionObject = Answers[QuestionIncrementer];
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].innerHTML = AnswerSelectionObject[AnswerIncrementer];
        AnswerIncrementer++;
    }
    AnswerIncrementer = 1;

    let correctAnsFromLocalStore = +LocalStore[optionBoxMovementIncrement].CorrectBox;

    switch (+correctAnsFromLocalStore) {
        case 1: {

            one.style.display = "inline-block"
            one.parentElement.style.border = "2px solid #35BD3A"
        }
            break;
        case 2: {

            two.style.display = "inline-block"
            two.parentElement.style.border = "2px solid #35BD3A"
        }
            break;
        case 3: {

            three.style.display = "inline-block"
            three.parentElement.style.border = "2px solid #35BD3A"
        }
            break;
        case 4: {

            four.style.display = "inline-block"
            four.parentElement.style.border = "2px solid #35BD3A"
        }
            break;
    }

    let selectedAnsFromLocalStore = +LocalStore[optionBoxMovementIncrement].SelectedBox;

    switch (+selectedAnsFromLocalStore) {
        case 1: {

            // one.style.display = "none"
            focusOne.style.border = " 1px solid gray"
            one.style.display = "none"
        }
            break;
        case 2: {

            foucsTwo.style.border = " 1px solid gray"
            two.style.display = "none"
        }
            break;
        case 3: {

            focusThree.style.border = " 1px solid gray"
            three.style.display = "none"
        }
            break;
        case 4: {

            focusfour.style.border = " 1px solid gray"
            four.style.display = "none"
        }
            break;
    }
    optionBoxMovementIncrement--;


    if (+QuestionIncrementer == 1) {
        console.log("entered")
        previousbtn.style.display = 'none';

    }
    nextbtn.style.display = 'inline-block';



})

// Local Storeage Section is Started



let OptionBox = document.querySelector('.Options');



let temp = 1;
let flagToSelect = true;

OptionBox.addEventListener('click', (OptionObject) => {
    // Validation the Answer

    if (QuestionIncrementer >= 2) {
        // console.log("Entered ")
        LocalStore[temp].SelectedBox = OptionObject.target.id;
        localStorage.setItem('Results', JSON.stringify(LocalStore))

        let parsedObject = JSON.parse(localStorage.getItem('Results'));
        let switchKey = +parsedObject[optionBoxMovementIncrement].CorrectBox;

        focusID = +OptionObject.target.id

        switch (switchKey) {
            case 1: {

                one.style.display = "inline-block"
                one.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 2: {

                two.style.display = "inline-block"
                two.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 3: {

                three.style.display = "inline-block"
                three.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
            case 4: {

                four.style.display = "inline-block"
                four.parentElement.style.border = "2px solid #35BD3A"
            }
                break;
        }


        if (+focusID == LocalStore[temp].CorrectBox) {
            let correctAudio = new Audio('./audio/success.mp3')
            correctAudio.play();

        }
        else {
            OptionObject.target.style.border = "2px solid red"
            let failAudio = new Audio('./audio/fail.mp3')
            failAudio.play();
        }
        temp++;

        // Stoping the timer

        SecondsCounter = 1;
        minits = 0;
        clearInterval(ClearingInterval);

    }





})

