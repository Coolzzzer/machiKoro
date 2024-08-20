"use strict";
const display = document.querySelector("#display");
const menu = document.createElement("div");
const start = document.createElement("button");
const startHiddenWindow = document.createElement("div");
let width = window.innerWidth;
let height = window.innerHeight;
let size = 1.6;
let moneyOne = 3;
let moneyTwo = 3;
let newFace;
let newFace2;
let move = 1;
let currentFace = 1;
let currentFace2 = 1;
let playerCount = 1;
let posX =  width/25;
let startPosX = width/8.4;
let posY =  height/25;
let posOverlay = 2;
let diceLeft = 0.8;
let idDice = "1";
let idElem;
let nameElem;
let posBuyX = height/10;
let posBuyY = width/8;
let imgAll;
const game = document.createElement("div");
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
const fieldMarking = {
	xColumn: width/14,
	yRow: height/6,
	yStartPlayer: width/2.7,
	xStartOnePlayer : width/25,
	xStartTwoPlayer : width/1.94
}
const cards = [
	{},
	{	name:"Пшеница",price:1,src: "https://coolzzzer.github.io/machiKoro/1.jpg",type:2,value:1,view:"колос",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Ферма",price:1,src: "https://coolzzzer.github.io/machiKoro/2.jpg",type:2,value:1,view:"корова",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Пекарня",price:1,src: "https://coolzzzer.github.io/machiKoro/2-3.jpg",type:1,value:1,view:"магазин",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Кафе",price:2,src: "https://coolzzzer.github.io/machiKoro/3.jpg",type:3,value:1,view:"чаша",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Магазин",price:2,src: "https://coolzzzer.github.io/machiKoro/4.jpg",type:1,value:3,view:"магазин",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Лес",price:3,src: "https://coolzzzer.github.io/machiKoro/5.jpg",type:2,value:1,view:"шестеренка",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Стадион",price:6,src: "https://coolzzzer.github.io/machiKoro/6-стадион.jpg",type:4,value:2,view:"башня",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Телестанция",price:7,src: "https://coolzzzer.github.io/machiKoro/6-телестанция.jpg",type:4,value:5,view:"башня",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Сырзавод",price:5,src: "https://coolzzzer.github.io/machiKoro/7.jpg",type:1,value:3,view:"завод",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Мебель",price:3,src: "https://coolzzzer.github.io/machiKoro/8.jpg",type:1,value:3,view:"завод",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Шахта",price:6,src: "https://coolzzzer.github.io/machiKoro/9.jpg",type:2,value:5,view:"шестеренка",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Ресторан",price:3,src: "https://coolzzzer.github.io/machiKoro/9-10.jpg",type:3,value:2,view:"чаша",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Яблони",price:3,src: "https://coolzzzer.github.io/machiKoro/10.jpg",type:2,value:3,view:"колос",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0},
	{	name:"Овощебаза",price:2,src: "https://coolzzzer.github.io/machiKoro/11-12.jpg",type:1,value:2,view:"яблоко",quantity:5,posXFirstBuy: 0,posYFirstBuy: 0,count:0}
];
const startCards = [
	{	name:"вокзал",price:4,src: "https://coolzzzer.github.io/machiKoro/вокзал-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/вокзал.jpg"},
	{	name:"супер",price:10,src: "https://coolzzzer.github.io/machiKoro/супер-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/супер.jpg"},
	{	name:"парк",price:16,src: "https://coolzzzer.github.io/machiKoro/парк-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/парк.jpg"},
	{	name:"радио",price:22,src: "https://coolzzzer.github.io/machiKoro/радио-.jpg",type:0,srcBuy: "https://coolzzzer.github.io/machiKoro/радио.jpg"},
	{	name:"Пропуск",price:0, type: 4, src:"https://coolzzzer.github.io/machiKoro/пропуск.png"}
]
const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
let playerOne = {name: "player1",money:8,count: 0,
	startCard1:0,startCard2:0,startCard3:0,startCard4:0,
	b1:0,b2:0,a2_3:0,c3:0,a4:0,b5:0,d6_1:0,
	d6_2:0,a7:0,a8:0,b9:0,c9_10:0,b10:0,a11_12:0,
}
let playerTwo = {name: "player2",money:200,count: 0,
	startCard1:0,startCard2:0,startCard3:0,startCard4:0,
	b1:0,b2:0,a2_3:0,c3:0,a4:0,b5:0,d6_1:0,
	d6_2:0,a7:0,a8:0,b9:0,c9_10:0,b10:0,a11_12:0,
}
function isMobileDevice() {
	return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
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
	start.innerHTML = "Начать";
}
function startGame(){
	menu.style.display = "none";
	game.style.display = "block"
	buldGameField();
	alert(`Ход ${playerOne.name}`);
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
createPlayerField(25,playerOne,"moneyCountOne","playerOneRoll","playerOneHiddenField");
createPlayerField(25 + width/2.1,playerTwo,"moneyCountTwo","playerTwoRoll","playerTwoHiddenField");

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
function createPlayerField(posX,player,moneyCountId,playerRoll,playerHiddenField){
const playerField = document.createElement("div");
const hiddenField = document.createElement("div");
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

hiddenField.setAttribute("id", playerHiddenField)
hiddenField.style.position = "absolute"
hiddenField.style.width = width/2.3 +"px";
hiddenField.style.height = height - height/3 +"px";
hiddenField.style.top = height/3 +"px";
hiddenField.style.left = posX +"px";
hiddenField.style.zIndex = 2;
hiddenField.style.opacity = 0.7;
hiddenField.style.display = "none"
hiddenField.style.background = "black";
roll.style.position = "absolute"
roll.innerHTML = "Бросок кубика";
game.appendChild(playerField);
game.appendChild(hiddenField);
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
		img.setAttribute("name",cards[i].name);
		img.setAttribute("id",id);
		img.setAttribute("price", cards[i].price)
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

		if(!isMobileDevice){
		}else{
			if(img.id == "img"){
				img.addEventListener("mouseover",mouseOver)
				img.addEventListener("mouseout",mouseOut)
				img.addEventListener("mousedown",mouseDown)
			}
		}
				img.addEventListener('click', () => {
					idElem = img.id;
					nameElem = img.name
					controllerGame(nameElem,idElem);
					createPromiseAll(playerOne);
					createPromiseAll(playerTwo);})
	}
buldField();

function controllerGame (nameElem,idElem){
	const hiddenOneField = document.querySelector("#playerOneHiddenField");
	const hiddenTwoField = document.querySelector("#playerTwoHiddenField");
	const moneyCountOne = document.querySelector('#moneyCountOne');
	const moneyCountTwo = document.querySelector('#moneyCountTwo');
	const playerOneRoll = document.querySelector(`#playerOneRoll`);
	const playerTwoRoll = document.querySelector(`#playerTwoRoll`);
	playerTwoRoll.addEventListener("click", rollDice);
	playerOneRoll.addEventListener("click", rollDice);
	function updateDisplay(player,moneyCount) {
		alert(`Ход ${player.name}`)
		moneyCount.innerHTML = `Имя: ${player.name} - Количество монет: ${player.money}`;
	}
	function rollDice() {
		newFace = Math.floor(Math.random() * 6) + 1;			
		cube1.style.transform = rotations[newFace];				
		setTimeout(() => {
				cube1.style.transform = rotations[newFace];
				currentFace = newFace;
		}, 1000);
		return newFace;
	}
	function rollDice2() {
		newFace2 = Math.floor(Math.random() * 6) + 1;		
		cube2.style.transform = rotations[newFace2];
		setTimeout(() => {
				cube2.style.transform = rotations[newFace2];
				currentFace2 = newFace2;
		}, 1000);
		return newFace2;
	}
	function buyCards(player,xStartPlayer,hidden1Field,hidden2Field,playerRoll,moneyCount){
		function animationCards(i,atr){
			const arrayCards = document.getElementsByName(nameElem);
			let nextRow = 0;
			if(cards[i].count == 0){
				if(player.count == 0){
					cards[i].posXFirstBuy = 0;
				} else if(player.count == 1){
					cards[i].posXFirstBuy = fieldMarking.xColumn;
				} else if(player.count == 2){
					cards[i].posXFirstBuy = fieldMarking.xColumn*2;
				} else if(player.count == 3){
					cards[i].posXFirstBuy = fieldMarking.xColumn*3;
				} else if(player.count == 4){
					cards[i].posXFirstBuy = fieldMarking.xColumn*4;
				} else if(player.count == 5){
					cards[i].posXFirstBuy = fieldMarking.xColumn*5;
				} else if(player.count == 6){
					cards[i].posXFirstBuy = 0;
					nextRow = fieldMarking.yRow
				} else if(player.count == 7){
					cards[i].posXFirstBuy = fieldMarking.xColumn;
					nextRow = fieldMarking.yRow
				} else if(player.count == 8){
					cards[i].posXFirstBuy = fieldMarking.xColumn*2;
					nextRow = fieldMarking.yRow
				} else if(player.count == 9){
					cards[i].posXFirstBuy = fieldMarking.xColumn*3;
					nextRow = fieldMarking.yRow
				} else if(player.count == 10){
					cards[i].posXFirstBuy = fieldMarking.xColumn*4;
					nextRow = fieldMarking.yRow
				} else if(player.count == 11){
					cards[i].posXFirstBuy = fieldMarking.xColumn*5;
					nextRow = fieldMarking.yRow
				}
				cards[i].posYFirstBuy = 0;
			}else	if(cards[i].count == 1){
				cards[i].posYFirstBuy = 2.5;
			} else if(cards[i].count == 2){
				cards[i].posYFirstBuy = 5;
			} else if(cards[i].count == 3){
				cards[i].posYFirstBuy = 10;
			} else if(cards[i].count == 4){
				cards[i].posYFirstBuy = 12.5;
			}
			cards[i].count++
			let posXCard = xStartPlayer + cards[i].posXFirstBuy;
			let posYCard = fieldMarking.yStartPlayer + cards[i].posYFirstBuy +nextRow;
			arrayCards[cards[i].quantity-1].style.top = posYCard + "px";
			arrayCards[cards[i].quantity-1].style.left = posXCard + "px";
			cards[i].quantity--;
			console.log("move" + move + " player:" + player.name + " name:" + cards[i].name + " x:" + cards[i].posXFirstBuy + " y:" + cards[i].posYFirstBuy + " atr:"+ atr + " cards.c:"+ cards[i].count + " player.c:"+ player.count)
			player.atr++;
			player.count++;
		}
		function animationStandardCards(i){
			const arrayCards = document.getElementsByName(nameElem);
			arrayCards[move-1].setAttribute("src", startCards[i].srcBuy);
			arrayCards[move-1].setAttribute("price", "buy");
		}
		if(idElem == "img"){	
			if(nameElem == "Пшеница"){
				animationCards(1,player.b1)
			}else if(nameElem == "Ферма"){
				animationCards(2,player.b2)
			}else if(nameElem == "Пекарня"){
				animationCards(3,player.a2_3)
			}else if(nameElem == "Кафе"){
				animationCards(4,player.c3)
			}else if(nameElem == "Магазин"){
				animationCards(5,player.a4)
			}else if(nameElem == "Лес"){
				animationCards(6,player.b5)
			}else if(nameElem == "Стадион"){
				animationCards(7,player.d6_1)
			}else if(nameElem == "Телестанция"){
				animationCards(8,player.d6_2)
			}else if(nameElem == "Сырзавод"){
				animationCards(9,player.a7)
			}else if(nameElem == "Мебель"){
				animationCards(10,player.a8)
			}else if(nameElem == "Шахта"){
				animationCards(11,player.b9)
			}else if(nameElem == "Ресторан"){
				animationCards(12,player.c9_10)
			}else if(nameElem == "Яблони"){
				animationCards(13,player.b10)
			}else if(nameElem == "Овощебаза"){
				animationCards(14,player.a11_12)
			}else if(nameElem == "вокзал"){
				animationStandardCards(0)
				player.startCard1 = 1
				playerRoll.addEventListener("click", rollDice2);
			}else if(nameElem == "супер"){
				animationStandardCards(1)
				player.startCard2 = 1
			}else if(nameElem == "парк"){
				animationStandardCards(2)
				player.startCard3 = 1
			}else if(nameElem == "радио"){
				animationStandardCards(3)
				player.startCard4 = 1
			}
			updateDisplay(player,moneyCount);
		}
		hidden2Field.style.display = "block";
		hidden1Field.style.display = "none";
	}

	const cardsTarget = document.getElementsByName(nameElem);
	let price = cardsTarget[1].getAttribute("price")
	if(price != "buy"){
		if(move == 1){
			if(playerOne.money>=price){
				playerOne.money-=price;
				buyCards(playerOne,fieldMarking.xStartOnePlayer,hiddenTwoField,hiddenOneField,playerOneRoll,moneyCountOne);
				move++
			}else{
				alert("Недостаточно монет!!!")
			}	
		}else if(move == 2){
			if(playerTwo.money>=price){
				playerTwo.money-=price;
				buyCards(playerTwo,fieldMarking.xStartTwoPlayer,hiddenOneField,hiddenTwoField,playerTwoRoll,moneyCountTwo);
				move--
			}else{
				alert("Недостаточно монет!!!")
			}
		}
	}
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

start.addEventListener("click", startGame);