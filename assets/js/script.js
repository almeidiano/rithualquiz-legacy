var i = 0;

let playerAttributes = { 
	intro: 0,
	charisma: 0,
	extro: 0,
	intellectual: 0
}

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let res = questions = questions.sort(() => Math.random() - 0.5);

function questionNumber() {
	let questionNumber = parseInt(c(".question .highlight").innerHTML);
	questionNumber++;
	c(".question .highlight").innerHTML = `${questionNumber}.`;

	if(questionNumber == 18) {
		var largestNumber = 0;
		console.log(playerAttributes);

		Object.values(playerAttributes).forEach(char => {
			if(largestNumber < char) {
				largestNumber = char;
			}
		});

		const charSelected = Object.keys(playerAttributes).reduce(function(a, b){ return playerAttributes[a] > playerAttributes[b] ? a : b });

		const finalRes = new Object();
		localStorage.setItem("charResult", charSelected);

		window.location.href = "result.html";
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
	
// cs("button").forEach(btn => {
// 	btn.addEventListener("click", () => {
// 		let dataEffect = parseInt(btn.getAttribute("data-effect"));
// 		let dataChar = btn.getAttribute("data-char");

//         console.log(dataEffect);
//         console.log(dataChar);

// 		let charEffects = new Object();
// 		charEffects[dataChar] = dataEffect;
// 		let sum = [];

// 	    Object.keys(playerAttributes).forEach(key => {
// 	        if(Object.keys(charEffects) == key){
// 	        	playerAttributes[key] += dataEffect;
// 	        	console.log(playerAttributes);
// 	        }
// 	    })
// 		questionNumber();
// 	});
// })

function updateQuestion(btn) {
		questionNumber();
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

		    Object.keys(playerAttributes).forEach(key => {
		        if(Object.keys(charEffects) == key){
		        	playerAttributes[key] += dataEffect;
		        }
		    })
		}else{
		    Object.keys(playerAttributes).forEach(key => {
		        if(Object.keys(charEffects) == key){
		        	playerAttributes[key] += dataEffect;
		        }
		    })
		}

	    applyQuestion();
}