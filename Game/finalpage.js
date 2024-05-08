
// Result Web page Js

let LocalStore = JSON.parse(localStorage.getItem('Results'))


let flag = 0;
for(let i = 1; i <= Object.keys(LocalStore).length; i++){

    if(LocalStore[i].CorrectBox == LocalStore[i].SelectedBox){
        flag++;
    }

}

console.log(flag)


let prograssBar = document.querySelector('body > div > div.ProgressBar > div')
let progresStatus = flag / 5 * 100;
prograssBar.style.width = `${progresStatus}%`


// Question Solved and Total 

let TotalQuestionSolved = document.querySelector('#TotalQuestionSolved')
let TotalQuestionRemind = document.querySelector('#TotalQuestionRemind')

TotalQuestionSolved.innerText = flag;
TotalQuestionRemind.innerText = Object.keys(LocalStore).length;