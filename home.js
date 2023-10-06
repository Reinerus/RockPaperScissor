function Winner(){
    for(i = 0; i < 10; i++){

    }
}



var numYou = 0;
var numComputer = 0;
var numTie = 0;


//user picks rock
function Rock(x){
    let random  =  Math.floor(Math.random() * 3);
    let yourChoice = document.getElementById('your choice');
    yourChoice.innerHTML = 'Your Choice: Rock';
    
    
    //computer and user tie
    if (random === 0){
        let computerChoice = document.getElementById('computer choice');
        computerChoice.innerHTML = ''
        let tie = document.getElementById('tie');
        numTie++;
        tie.innerHTML = `Tie- ${numTie}`;
        
    }

    //Computer picks paper and Wins 
    else if (random === 1){
        let computer = document.getElementById('computer');
        numComputer++;
        computer.innerHTML = `Computer- ${numComputer}`;
    }
    //computer picks scissors and loses
    else if (random === 2){
        let score = document.getElementById('you');
        numYou++;
        score.innerHTML = `You- ${numYou}`;
    }
}


//User picks paper
function Paper(){
    let random  =  Math.floor(Math.random() * 3);
    
    //computer picks rock and loses
    if (random === 0){
    let score = document.getElementById('you');
    numYou++;
    score.innerHTML = `Score: ${numYou}`;
    }

    // //Computer and user tie 
    else if (random === 1){
    let tie = document.getElementById('tie');
    numTie++;
    tie.innerHTML = `Ties: ${numTie}`;
    }
    // //computer picks scissors and Wins
    else if (random === 2){
    let computer = document.getElementById('computer');
    numComputer++;
    computer.innerHTML = `Score: ${numComputer}`
    }
}



// User picks scissors
function Scissors(){
    let random = Math.floor(Math.random()*3);
    //Computer picks rocks and wins
    if (random === 0){
        let computer = document.getElementById('computer')
        numComputer++
        computer.innerHTML = `Score: ${numComputer}`
    }
    //computer picks paper and user wins
    else if(random === 1){
        let tie = document.getElementById('tie');
        numTie++;
        tie
    }
    // computer picks scissors and ties
    else if(random === 2){
        ctp++;
    }
}


