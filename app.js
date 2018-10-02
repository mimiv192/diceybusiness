// const Max = 500;
// let container = document.getElementById('square-container');
// class Square {
//     constructor (x,y,size){
//         this.div = document.createElement('div');
//         this.div.classList.add('square');
//         this.div.style.left = `${x}px`;
//         this.div.style.top = `${y}px`;
//         this.div.style.width = `${size}px`;
//         this.div.style.height = `${size}px`;
//         this.div.addEventListener('click', () => {
//             this.newNum();
//             this.updateLocation();
        
//         });
// 7       this.newNum();
//         this.updateLocation();
//         container.appendChild(this.div);
//     }
//     updateLocation () {
//         let xVal = randomVal (0,MAX);
//         let yVal = randomVal (0,MAX);
//         this.div.style.left = `${xVal}px`;
//         this.div.style.top = `${yVal}px`;
//     }

//     //newNum () {
//       //  let ranNum = `num(${randomVal(0,6)},${randomVal(0,6)},${randomVal(0,6)}`

//     }

// }



// let sqButton = document.getElementById('sq-button');
// sqButton.addEventListener('click', insertSquare);

// function insertSquare () {
//     alert('clicked!');
    

 //   {
// var elem = document.getElementById('newDie');
// this.div.addEventListener('click', addSquare);
// }

// function randomVal(min,max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }



// class Die {
//     constructor (randomNum){
//         this.randomNum = randomNum;
//         this.div= document.createElement('div')
//         this.div.className= "die"
//     }

// }
// let myDie = new Die (Math.floor (Math.random()*6+1))

// let newDie = document.getElementById('newDie');
// newDie.addEventListener('click',insertSquare);

let dice = []
class Die {
    constructor () {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.innerText = Math.floor(Math.random())
        document.body.appendChild(this.div);
        this.div.addEventListener('click',() => this.roll());

        this.roll();
    };
    
    roll () {
        this.div.innerText = Math.floor(Math.random() * 6 + 1);
    }
}

function addElement(){
let die = new Die ();
console.dir(new Die())
let d = new Die
}

let dieBtn = document.querySelector('button#die');
let rollBtn = document.querySelector('button#roll')

dieBtn.addEventListener('click', () => {
    let d = new Die()
    dice.push(d)
})

rollBtn.addEventListener('click', () => {
    dice.forEach(die => die.roll())
})



// var newdiv = document.createElement("div1");
// newdiv.appendChild(document.createTextNode("x"));
// document.body.appendChild(div1);


// //notes
// let container= document.getElementById('container');
// let generateButton = document.getElementById('generateDice');
// //let g = document.getElementsByClassName('blah');
// let rollButton = document.getElementById('rollDice');
// let sumButton= document.getElementById('sumDice');
// let diceArray = [];


// class Dice {
//   constructor (){
//   this.value = 'hello';  
//   this.div =document.createElement('div');
//   this.div.innerText = this.value;
//   container.appendChild(this.div);
//   this.div.className = 'dice';

//   this.div.addEventListener(click, function (){
//       console.log(this)
//       this.roll();
  
  
// });
// this.div.addEventListener('dblclick', () => {
//     container.removeChild(this.div);
//     diceArray.splice(diceArray.indexOf(this),1)
// }  
// });
//   this.roll ();
//   container.appendChild(this.div);
// }
// roll(){
//     this.value=Math.floor(Math.random()* 6 + 1);
//     this.div.innerText=this.value;
// }
// sumButton.addEventListener('click', () => {
//     let sum=0;

//     diceArray.forEach((dice) => {
//         sum += dice.value;
//     //   alert (
//     //  `the sum is ${diceArray.reduce ((acc,curr)=> {
//     //      return acc.value + curr.value;
//     //  }, 0)}`,
//     );
// });
//      console.log(sum);   
//     });
//     }
// });


// RollButton.addEventListener('click', () => {
//     diceArray.forEach ((dice) => {
//         dice.roll();
//     });
// });
// }
// generateButton.addEventListener('click', () => {
//     diceArray.push(new Dice());
// });
// console.log(new Dice());
