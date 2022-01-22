var i = 0;

let playerAttributes = { 
	intro: 0,
	charisma: 0,
	extro: 0,
	intellectual: 0,
	parasitum: 0
}

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let res = questions = questions.sort(() => Math.random() - 0.5);

function questionNumber() {
	let questionNumber = parseInt(c(".question .highlight").innerHTML);
	questionNumber++;
	c(".question .highlight").innerHTML = `${questionNumber}.`;

	function checkPoints(point) {
	    return point > 0
	}

	if(questionNumber == 21) {
		// Object.values(playerAttributes).forEach(char => {
		// 	if(largestNumber <= char) {
		// 		largestNumber = char;
		// 	}
		// });

		let allPoints = Object.values(playerAttributes).sort((a, b) => {return b-a});
		let charSelected = Object.keys(playerAttributes).reduce(function(a, b){ 
			return playerAttributes[a] > playerAttributes[b] ? a : b 
		});
		let highestPoint = allPoints[0];

		if(charSelected == "parasitum" && highestPoint == 20) {
			localStorage.setItem("charResult", "parasitum");
			window.location.href = "result.html";
		}else if(playerAttributes.parasitum > 0 && allPoints.some(checkPoints) == true) {
			window.location.href = "404.html";
		}else{
			delete playerAttributes.parasitum;
			let finalCharSelected = Object.keys(playerAttributes).reduce((a, b) => {
			    return playerAttributes[a] > playerAttributes[b] ? a : b
			});	
			localStorage.setItem("charResult", finalCharSelected);
			window.location.href = "result.html";
		}
	}
}

function applyQuestion() {
	i++;
	c(".btnsArea").innerHTML = "";
	c(".question-text").innerText = `${res[i].question}`;
	let answers = res[i].answers = res[i].answers.sort(() => Math.random() - 0.5);
	answers.forEach(el => {
		c(".btnsArea").innerHTML += `<button class="btn" onclick="updateQuestion(this)" data-effect="${el.effect}" data-char="${el.characteristic}"><div class="btnText">${el.answer}</div></button>`;
	});
}

function sumAttr(ob1, ob2) {
    let sum = {};

    Object.keys(ob1).forEach(key => {
        if(ob2.hasOwnProperty(key)) {
            sum[key] = ob1[key] + ob2[key]
        }
    })
    return sum;
}

if(c(".content").classList.contains("quiz")) {
	c(".question-text").innerHTML = `${res[i].question}`;
	let answers = res[i].answers = res[i].answers.sort(() => Math.random() - 0.5);
	answers.forEach(el => {
		c(".btnsArea").innerHTML += `<button class="btn" onclick="updateQuestion(this)" data-effect="${el.effect}" data-char="${el.characteristic}"><div class="btnText">${el.answer}</div></button>`;
	});
}

function updateQuestion(btn) {
		let dataChar = btn.getAttribute("data-char");
		let dataEffect = parseInt(btn.getAttribute("data-effect"));

		let charEffects = new Object();
		charEffects[dataChar] = dataEffect;
		let sum = [];

		if(res[i].typeOf == "dynamic") {
			let focus = res[i].focus;
			let opposite = res[i].opposite;

			switch(dataChar) {
				case focus:
				    Object.keys(playerAttributes).forEach(key => {
				        if(Object.keys(charEffects) == key){
				        	playerAttributes[focus] += dataEffect;
				        	playerAttributes[opposite] -= dataEffect;
				        }
				    })
				break;
				case opposite:
				    Object.keys(playerAttributes).forEach(key => {
				        if(Object.keys(charEffects) == key){
				        	playerAttributes[opposite] += dataEffect;
				        	playerAttributes[focus] -= dataEffect;
				        }
				    })
				break;
			}
		}else{
		    Object.keys(playerAttributes).forEach(key => {
		        if(Object.keys(charEffects) == key){
		        	playerAttributes[key] += dataEffect;
		        }
		    })
		}

		questionNumber();
	    applyQuestion();
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function checkTouching(point, content) {
	let elem1 = point.getBoundingClientRect();
	let elem2 = content.getBoundingClientRect();

	if(elem1.right >= elem2.left && elem1.left <= elem2.right && elem1.bottom >= elem2.top && elem1.top <= elem2.bottom) {
		return true;
	}
}

function moveToRandomPosition() {
	let point = c(".point");
	let content = c(".content");

	let winWidth = window.innerWidth;
	let winHeight = window.innerHeight;
		
	randomTop = getRandomNumber(0, winHeight);
	randomLeft = getRandomNumber(0, winWidth);

	point.style.top = Math.floor(randomTop) + "px";
	point.style.left = Math.floor(randomLeft) + "px";

	if(checkTouching(c(".point"), c(".content")) == true) {
		moveToRandomPosition();
	}
}

function updateStrangeQuestion() {
	moveToRandomPosition();

	if(checkTouching(c(".point"), c(".content")) == true) {
		moveToRandomPosition();
	}

	playerAttributes["parasitum"] += 1;
	questionNumber();
	applyQuestion();

	// for(i=0; i<point.length; i++) {
	// 	var thisDiv = point[i];
		
	    // randomTop = getRandomNumber(0, winHeight);
	    // randomLeft = getRandomNumber(0, winWidth);

	    // thisDiv.style.top = Math.floor(randomTop) + "px";
	    // thisDiv.style.left = Math.floor(randomLeft) + "px";

	    // let truePoint = c(".point");
	    // let trueContent = c(".content");

	    // checkTouching(truePoint, trueContent);
	// }

	// playerAttributes["parasitum"] += 1;
	// questionNumber();
	// applyQuestion();
}