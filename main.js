"use strict";
const display = document.querySelector("#display");
const menu = document.createElement("div");
const start = document.createElement("button");
let width = window.innerWidth;
let height = window.innerHeight;
let size = 1.6;
let moneyOne = 3;
let moneyTwo = 3;
let newFace;
let newFace2;
let move = 1;
let error = 1;
let currentFace = 1;
let currentFace2 = 1;
let playerCount = 1;
let posX =  width/25;
let startPosX = width/8.4;
let posY =  height/25;
let posOverlay = 2;
let diceLeft = 0.8;
let idDice = "1";
const game = document.createElement("div");
const exit = document.createElement("button");
const cube1 = document.createElement("div");
const cube2 = document.createElement("div");
const rotations = {
	1: 'rotateX(0deg) rotateY(0deg)',
	2: 'rotateX(0deg) rotateY(-90deg)',
	3: 'rotateX(0deg) rotateY(-180deg)',
	4: 'rotateX(0deg) rotateY(90deg)',
	5: 'rotateX(-90deg) rotateY(0deg)',
	6: 'rotateX(90deg) rotateY(0deg)'
};
const cards = [
	{},
	{	name:"Пшеница",price:1,src: "https://coolzzzer.github.io/machiKoro/1.jpg",type:2,value:1,view:"колос"},
	{	name:"Ферма",price:1,src: "https://coolzzzer.github.io/machiKoro/2.jpg",type:2,value:1,view:"корова"},
	{	name:"Пекарня",price:1,src: "https://coolzzzer.github.io/machiKoro/2-3.jpg",type:1,value:1,view:"магазин"},
	{	name:"Кафе",price:2,src: "https://coolzzzer.github.io/machiKoro/3.jpg",type:3,value:1,view:"чаша"},
	{	name:"Магазин",price:2,src: "https://coolzzzer.github.io/machiKoro/4.jpg",type:1,value:3,view:"магазин"},
	{	name:"Лес",price:3,src: "https://coolzzzer.github.io/machiKoro/5.jpg",type:2,value:1,view:"шестеренка"},
	{	name:"Стадион",price:6,src: "https://coolzzzer.github.io/machiKoro/6-стадион.jpg",type:4,value:2,view:"башня"},
	{	name:"Телестанция",price:7,src: "https://coolzzzer.github.io/machiKoro/6-телестанция.jpg",type:4,value:5,view:"башня"},
	{	name:"Сырзавод",price:5,src: "https://coolzzzer.github.io/machiKoro/7.jpg",type:1,value:3,view:"завод"},
	{	name:"Мебель",price:3,src: "https://coolzzzer.github.io/machiKoro/8.jpg",type:1,value:3,view:"завод"},
	{	name:"Шахта",price:6,src: "https://coolzzzer.github.io/machiKoro/9.jpg",type:2,value:5,view:"шестеренка"},
	{	name:"Ресторан",price:3,src: "https://coolzzzer.github.io/machiKoro/9-10.jpg",type:3,value:2,view:"чаша"},
	{	name:"Яблони",price:3,src: "https://coolzzzer.github.io/machiKoro/10.jpg",type:2,value:3,view:"колос"},
	{	name:"Овощебаза",price:2,src: "https://coolzzzer.github.io/machiKoro/11-12.jpg",type:1,value:2,view:"яблоко"}
];
const startCards = [
	{	name:"вокзал",price:4,src: "https://coolzzzer.github.io/machiKoro/вокзал-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/вокзал.jpg"},
	{	name:"супер",price:10,src: "https://coolzzzer.github.io/machiKoro/супер-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/супер.jpg"},
	{	name:"парк",price:16,src: "https://coolzzzer.github.io/machiKoro/парк-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/парк.jpg"},
	{	name:"радио",price:22,src: "https://coolzzzer.github.io/machiKoro/радио-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/радио.jpg"},
	{	name: "Пропуск",price:0, type: 4, src:"https://coolzzzer.github.io/machiKoro/пропуск.png"}
]
const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
function isMobileDevice() {
	return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}
let playerOne = {name: "player1",money:8,
	startCard1:0,startCard2:0,startCard3:0,startCard4:0,
	b1:0,b2:0,a2_3:0,c3:0,a4:0,b5:0,d6_1:0,
	d6_2:0,a7:0,a8:0,b:0,c9_10:0,b10:0,a11_12:0
}
let playerTwo = {name: "player2",money:200,
	startCard1:0,startCard2:0,startCard3:0,startCard4:0,
	b1:0,b2:0,a2_3:0,c3:0,a4:0,b5:0,d6_1:0,
	d6_2:0,a7:0,a8:0,b:0,c9_10:0,b10:0,a11_12:0
}

function buldField(){
	if (isMobileDevice()) {
		if(width<height){
			alert("Для комфортной игры, переверните телефон")
		}
	}
	display.style.backgroundColor = "green"
	display.style.height = height + "px";
	display.style.width = width + "px";
	display.style.position = "absolute";
	display.style.left = 0;
	display.style.top = 0;
	display.appendChild(menu);
	display.appendChild(game);
	menu.appendChild(start);
	game.style.display = "none";
	exit.style.display = "none";
	start.innerHTML = "Начать";
	exit.innerHTML = "Выход";
	display.appendChild(exit);
}
function startGame(){
	menu.style.display = "none";
	game.style.display = "block"
	exit.style.display = "block";
	buldGameField();
	playerTwoRoll.style.display = "none";
	playerOneRoll.style.display = "none";
	alert(`Ход ${playerOne.name}`)
}
function exitGame(){
	menu.style.display = "block";
	game.style.display = "none";
	exit.style.display = "none";
}
function buldGameField(){
	createDice(cube1);
	for (let i = 1;i<=cards.length-1;i++){
		for (let j = 1;j<=5;j++){
			addCards(cards, i);
		}
		posX+= width/11;
		if(i % 7 === 0){
			posY+= width/12;
			posX = width/25;
		}
	}	
createPlayerField(25,playerOne,"moneyCountOne","playerOneRoll");
createPlayerField(25 + width/2.1,playerTwo,"moneyCountTwo","playerTwoRoll");
}
function createDice(cube){
	const dice = document.createElement("div");
	dice.style.position = "absolute";
	dice.style.left = width*diceLeft + "px";
	dice.style.top = height*0.1 + "px";
	dice.setAttribute("class", "dice");
	dice.setAttribute("id", "dice");
	dice.style.width = width/20 + "px";
	dice.style.height = width/20 + "px";
	dice.style.perspective = width/4 + "px";
	dice.style.display = "flex";
	dice.style.justifyContent = "center";
	dice.style.alignItems = "center";
	
	cube.setAttribute("id", `cube${idDice}`);
	cube.setAttribute("class", "cube");
	for(let i = 1; i<=6;i++){
		const face = document.createElement("div");
		face.setAttribute("class", `face`);
		face.style.width = width/40 + "px";
		face.style.height = width/40 + "px";
		face.style.fontSize = width/24 + "px";	
		face.style.backgroundColor = "rgb(230, 230, 230)";	
		face.style.position = "absolute";
		face.style.padding = "0px";
		face.style.display = "flex";
		face.style.justifyContent = "center";
		face.style.alignItems = "center";


		face.innerHTML = diceFaces[i-1];
		if(i==1){
			face.style.transform = `rotateY(${0}deg) translateZ(${width/80}px)`;
		}else if(i==2){
			face.style.transform = `rotateY(${90}deg) translateZ(${width/80}px)`;
		}else if(i==3){
			face.style.transform = `rotateY(${180}deg) translateZ(${width/80}px)`;
		}else if(i == 4){
			face.style.transform = `rotateY(${-90}deg) translateZ(${width/80}px)`;
		}else if(i == 5){
			face.style.transform = `rotateX(${90}deg) translateZ(${width/80}px)`;
		}else if(i == 6){
			face.style.transform = `rotateX(${-90}deg) translateZ(${width/80}px)`;
		}
		cube.appendChild(face);
	}
	dice.appendChild(cube)
	game.appendChild(dice)
	diceLeft=0.9;
	idDice = "2"
}
function createPlayerField(posX,player,moneyCountId,playerRoll){
const playerField = document.createElement("div");
const moneyCount = document.createElement("div");
const roll = document.createElement("button");
roll.setAttribute("id", playerRoll);

playerField.setAttribute("id", "playerFieldOne")
moneyCount.setAttribute("id", `${moneyCountId}`);
moneyCount.innerHTML = `Имя: ${player.name} - Количество монет: ${player.money}`;
playerField.style.position = "absolute"
playerField.style.width = width/2.3 +"px";
playerField.style.height = height - height/3 +"px";
playerField.style.top = height/3 +"px";
playerField.style.left = posX +"px";
playerField.style.background = "#FFE4B5";
roll.style.position = "absolute"
roll.innerHTML = "Бросок кубика";
game.appendChild(playerField);
playerField.appendChild(moneyCount);
playerField.appendChild(roll);
for (let i = 0;i<=startCards.length-1;i++){
	posOverlay = width/14;
	posY = height/2.4;
	if (i == startCards.length-1){
		addCards(startCards,i,`skipId${playerRoll}`);
	}else{
		addCards(startCards,i);
	}
}
playerCount = 2;
}
function addCards(cards,i,id="img"){
	const img = document.createElement('img');
		img.setAttribute("src",cards[i].src);
		img.setAttribute("name",cards[i].name)
		img.setAttribute("id",id)
		img.style.width = width/17 + "px";
		img.style.height = width/13 + "px";
		img.style.borderRadius = width/150 + "px";
		img.style.position = "absolute";
		if((i==0)&&(playerCount==2)){
			img.style.left = posX+startPosX + "px";
			posX+=startPosX
		}else{
			img.style.left = posX + "px";
		}
		
		img.style.top = posY + "px";
		img.style.cursor = 'pointer';
		img.style.zIndex = 1;
		posX+= posOverlay;
		game.appendChild(img);

		function mouseOver(event){
			event = event || window.event;
			img.style.borderRadius = width/100 + "px";
			img.style.width = width/5.5 + "px";
			img.style.height = width/4 + "px";
			img.style.zIndex = 2;
		}
		function mouseOut(event){
			event = event || window.event;
			img.style.borderRadius = width/150 + "px";
			img.style.width = width/17 + "px";
			img.style.height = width/13 + "px";
			img.style.zIndex = 1;
		}
		function mouseDown(event){
			event = event || window.event;	
			event.preventDefault();
		}
		function clickCard(player,moneyCount){
			if(player.money<cards[i].price){
				alert("недостаточно монет");
				return error = 1;
			}else{
				if(cards[i].type == 0){
					if(player.money >= startCards[i].price){
						if(i === 0){
							player.startCard1 = 1;
						} else if(i === 1){
							player.startCard2 = 1;
						} else if(i === 2){
							player.startCard3 = 1;
						} else if(i === 3){
							player.startCard4 = 1;
						}
						updateDisplay(startCards)
						img.setAttribute("src",startCards[i].srcBuy);

					}
				}else if(cards[i].type == 1){
					if(player.money >= cards[i].price){
						console.log(player.money);
						if(i === 3){
							player.a2_3 += 1;
						} else if(i === 5){
							player.a4 += 1;
						} else if(i === 9){
							player.a7 += 1;
						} else if(i === 10){
							player.a8 += 1;
						} else if(i === 14){
							player.a11_12 += 1;
						}
						player.money -= cards[i].price;
						moneyCount.innerHTML = `Имя: ${player.name} - Количество монет: ${player.money}`;
						img.removeEventListener("click", transitionMove);
						return error = 0;
					}
					
				}
			}
		}
		function updateDisplay(cards) {
			if(move==1){
				playerOne.money -= cards[i].price;
				moneyCountOne.innerHTML = `Имя: ${playerOne.name} - Количество монет: ${playerOne.money}`;
			}else if(move==2){
				playerTwo.money -= cards[i].price;
				moneyCountTwo.innerHTML = `Имя: ${playerTwo.name} - Количество монет: ${playerTwo.money}`;
			}
			img.removeEventListener("click", transitionMove);
			return error = 0;
		}
		function transitionMove(event){
			event = event || window.event;
			const playerOneRoll = document.querySelector(`#playerOneRoll`);
			const playerTwoRoll = document.querySelector(`#playerTwoRoll`);
			const moneyCountOne = document.querySelector('#moneyCountOne');
			const moneyCountTwo = document.querySelector('#moneyCountTwo');

			playerTwoRoll.addEventListener("mouseup", rollDice);
			playerOneRoll.addEventListener("mouseup", rollDice);
			if(playerOne.startCard1 == 1){
				playerOneRoll.addEventListener("mouseup", rollDice2);
				playerOneRoll.addEventListener("touchend ", rollDice2);
			}else if(playerTwo.startCard1 == 1){
				playerTwoRoll.addEventListener("mouseup", rollDice2);
				playerTwoRoll.addEventListener("touchend ", rollDice2);
			}	
			if((clickCard(playerOne,moneyCountOne) == 1)||(clickCard(playerTwo,moneyCountTwo) == 1)){
			}else{
				if(move == 1){
					clickCard(playerOne,moneyCountOne);					
					move++;
					alert(`Ход ${playerTwo.name}`);
					removeRollDice(playerTwoRoll,playerOneRoll)
				}else if(move == 2){
					clickCard(playerTwo,moneyCountTwo)
					move--;
					alert(`Ход ${playerOne.name}`)
					removeRollDice(playerOneRoll,playerTwoRoll)
				}
			}


			const skip1 = document.querySelector("#skipIdplayerOneRoll");
			const skip2 = document.querySelector("#skipIdplayerTwoRoll");
			skip1.addEventListener("click", removeRollDice);
			skip2.addEventListener("click", removeRollDice);

			function removeRollDice(player1, player2){
				player1.style.display = "block";
				player2.style.display = "none";
			}
			function rollDice() {
				newFace = Math.floor(Math.random() * 6) + 1;			
				cube1.style.transform = rotations[newFace];
				playerOneRoll.style.display = "none";
				playerTwoRoll.style.display = "none";
				setTimeout(() => {
						cube1.style.transform = rotations[newFace];
						currentFace = newFace;
				}, 1000);
				return newFace;
			}
			function rollDice2() {
				newFace2 = Math.floor(Math.random() * 6) + 1;		
				cube2.style.transform = rotations[newFace2];
				playerOneRoll.style.display = "none";
				playerTwoRoll.style.display = "none";
				setTimeout(() => {
						cube2.style.transform = rotations[newFace2];
						currentFace2 = newFace2;
				}, 1000);
				return newFace2;
			}


			function createPromiseAll(player){
				function createWinСondition(startCard,result){
					return new Promise( (resolve,reject) => {
						if (startCard >= 1){
							resolve(result)
						}
						
					});
				}
				const win1 = createWinСondition(player.startCard1,1);
				const win2 = createWinСondition(player.startCard2,2);
				const win3 = createWinСondition(player.startCard3,3);
				const win4 = createWinСondition(player.startCard4,4);
				win1
				.then(result =>{
					createDice(cube2)
				})
				Promise.all([win1,win2,win3,win4])
				.then(result => {
					alert(player.name + " win!!!")
				})
			}
			createPromiseAll(playerOne);
			createPromiseAll(playerTwo);
		}
		if(!isMobileDevice){
			img.addEventListener("touchstart",mouseOver)
			img.addEventListener("touchend",mouseOut)
			img.addEventListener("touchstart",mouseDown)
			img.addEventListener("dblclick", transitionMove)
		}else{
			if(img.id == "img"){
				img.addEventListener("mouseover",mouseOver)
				img.addEventListener("mouseout",mouseOut)
				img.addEventListener("mousedown",mouseDown)
			}
			img.addEventListener("click", transitionMove)
		}
		
}
buldField()
start.addEventListener("click", startGame);
exit.addEventListener("click", exitGame);