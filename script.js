let content = document.querySelector(".content");

let road = document.querySelector(".road");

let buttons = document.querySelectorAll("button");

road.style.border = "3px solid black";

let white = document.querySelectorAll(".white");
let black = document.querySelectorAll(".black");

black.forEach(function(blackBlock){
    blackBlock.style.backgroundColor = "black";
})

buttons[0].addEventListener('click', function(){
    for(let arrow = 0; arrow<white.length; arrow++){
        white[arrow].innerHTML = "";
        let img = document.createElement('img');
        img.src = "arrow.svg";
        white[arrow].append(img);
    }
})

buttons[1].addEventListener('click', function(){
    for(let arrow = 0; arrow<white.length; arrow++){
        white[arrow].innerHTML = "";
        let img = document.createElement('img');
        img.src = "arrow.svg";
        img.style.transform ='rotate(180deg)';
        white[arrow].append(img);
    }
})