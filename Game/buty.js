let StartButton = document.querySelector('.Button-icon button');

StartButton.addEventListener('click',()=>{
    var audio = new Audio('./audio/bgMusic.mp3');
    audio.play();
},{once:true})