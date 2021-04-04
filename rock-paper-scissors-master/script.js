var opponent;
var opponentColor;
var opponentImg;
var arr = [['rock', 'hsl(349, 71%, 52%)', 'images/icon-rock.svg'], ['scissors', 'hsl(39, 89%, 49%)', 'images/icon-scissors.svg'], ['paper', 'hsl(230, 89%, 62%)', 'images/icon-paper.svg']]
var num1;
var deg = 0;

function checkResult(player, playerColor, playerImg) {
  num1 = Math.floor((Math.random() * arr.length) +  0);
  opponent = arr[num1][0]
  opponentColor = arr[num1][1]
  opponentImg  = arr[num1][2]
  console.log(`opponent => ${opponent}`, `|| player => ${player}`)
   if(player === 'scissors') {
     if(opponent === 'rock') {
      result('you lose');    
     } else if(opponent === 'scissors') {
      result('draw');
     } else if(opponent === 'paper') {
      result('you win');
     }
   } else if(player === 'rock') {
     if(opponent === 'paper') {
       result('you lose');
     } else if(opponent === 'rock') {
       result('draw');
     } else if(opponent === 'scissors') {
       result('you win');
     }
   } else if(player === 'paper') {
     if(opponent === 'scissors') {
      result('you lose');
     } else if(opponent === 'paper') {
      result('draw');
     } else if(opponent === 'rock') {
      result('you win');
     }
   }
  slider(2);
  document.querySelector('.result').style.transition = 'all 1s';
  document.querySelector('.result').classList.add('transformColumn2');
  document.querySelector('.result .column1 .choice').innerHTML = `<img src=${playerImg}>`;
  document.querySelector('.result .column1 .choice').style.border = `10px solid ${playerColor}`
  document.querySelector('.result .column3 .choice').style.border =  `10px solid ${opponentColor}`;
  document.querySelector('.result .column3 .choice').style.backgroundColor = '#fff';
  document.querySelector('.result .column3 .choice').style.pointerEvents = 'auto'
  document.querySelector('.result .column3 .choice').innerHTML = `<img src=${opponentImg}>`;
  document.querySelector('.result .column2').classList.add('transformColumn2');
}

function slider(num) {
  if(num === 1) {
    document.querySelector(`.select`).style.left = '0%';
    document.querySelector('.result').style.left = '100%';
  } else {
    document.querySelector(`.select`).style.left = '-100%';
    document.querySelector('.result').style.left = '0%';
  }
}


function rules() {
  var div = document.getElementById('rules');
  if(div.classList.contains('moveRules')) {
    div.classList.remove('moveRules') 
    document.querySelector('main').style.pointerEvents = 'auto'
    document.querySelector('footer').style.pointerEvents = 'auto'
  } else {
    div.classList.add('moveRules')
    document.querySelector('main').style.pointerEvents = 'none'
    document.querySelector('footer').style.pointerEvents = 'none'
  }
}

function playAgain() {
  slider(1)
  document.querySelector('.result').style.transition = 'all 2s';
  document.querySelector('.result').classList.remove('transformColumn2');
  document.querySelector('.result .column1 .choice').innerHTML = `<p>Picking<span class="loading"></span></p>`;
  document.querySelector('.result .column1 .choice').style.border = `7px inset rgb(255, 255, 255)`;
}

function result(str) {
  Array.from(document.querySelectorAll('#result')).forEach(elem => elem.innerHTML = str);
  var score = parseInt(document.querySelector('#score').innerHTML)
  console.log(score, typeof score)
  if(str === 'you lose') {
    if(score > 0) {
      document.querySelector('#score').innerHTML = score--;
      console.log('lose')
    }
  } else if(str === 'you win') {
    score++;
    console.log('win', str, score)
  }
  document.querySelector('#score').innerHTML = score;
}