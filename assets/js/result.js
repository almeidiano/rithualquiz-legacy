const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

const characters = [
	{id: 1, characterNick: "madger", characterName: "Madger Yasáshi", characterImg: 'assets/img/characters/madger.png', characterAttr: "extro", characterDesc: 'Você é uma pessoa bastante <span style="color:lightgreen;">extrovertida</span>, você ama aventuras e é bastante emotivo(a). Aproximando-se bastante da personalidade do Madger.'},
	{id: 2, characterNick: "singer", characterName: "Singer Faksumi", characterImg: 'assets/img/characters/singer.png', characterAttr: "intro", characterDesc: 'Você é uma pessoa que possui características de <span style="color:lightblue;">introversão</span>. Além disso, observador e pensativo. Aproximando-se bastante da personalidade do Singer.'},
	{id: 3, characterNick: "san", characterName: "San Majutsu-shi", characterImg: 'assets/img/characters/san.png', characterAttr: "intellectual", characterDesc: 'Você é uma pessoa com muito foco no <span style="color:orange;">intelectual</span>, você é bastante racional e até peca na questão física. Aproximando-se bastante da personalidade do San.'},
	{id: 4, characterNick: "aika", characterName: "Aika'Nu", characterImg: 'assets/img/characters/aika.png', characterAttr: "charisma", characterDesc: 'Você é uma pessoa <span style="color:pink;">carismática</span>, você se preocupa bastante com sua família e amigos. Ademais, você possui um bom juízo. Aproximando-se bastante da personalidade da Aika.'},
	{id: 5, characterNick: "parasitum", characterName: "Parasita Demoniaco", characterImg: 'assets/img/characters/unum-parasitum.png', characterAttr: "parasitum", characterDesc: 'você é uma pessoa que adora ver sangue HAHAHAHAHAHAHAHA, você adora invadir sistemas e quebrar regras, e quanto mais gente sofre no processo, melhor, afinal, nao tem nada mais prazeroso do que fazer todos sofrerem com o que você sofreu HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA'}
];

const charResult = localStorage.getItem("charResult");

function parasitumDistortion() {
	let body = c("body");
	let fillScreen = document.createElement("div");
	let img = document.createElement("img");
	img.src = "assets/img/distortion.gif";
	fillScreen.classList.add("fillScreen");
	fillScreen.append(img);
	body.append(fillScreen);

	let char_desc = c(".char-desc");
	c(".character h1").style.fontFamily = "Dialeto Ancestral Regular";  
	char_desc.style.fontFamily = "Dialeto Ancestral Regular";
	char_desc.style.fontSize = "20px";
	c(".btnArea a").innerText = "HAHAHAHAHAHA";

	c(".fillScreen").style.transition = "10s";
	setTimeout(() => {
		c(".fillScreen").style.opacity = "1";
	}, 100);
	setTimeout(() => {
		window.location.href = "index.html";
	}, 7000);
}

function checkCharResult() {
	if(charResult == null) {
		window.location.href = "startquiz.html";
	}else{
		c(".playerNick").innerHTML = localStorage.playerNick; 
	}
}
		
function applyCharResult() {
	characters.forEach(character => {
		if(character.characterAttr == charResult){
			const finalCharacter = character;

			c(".char-thumb img").src = finalCharacter.characterImg;
			c(".character h1").innerHTML = finalCharacter.characterName;
			switch(character.characterNick) {
				case "madger":
					c(".madgerChar").remove();
					c(".char-thumb").classList.add("madger");
					c(".character h1").style.color = "lightgreen"
				break;
				case "singer":
					c(".singerChar").remove();
					c(".char-thumb").classList.add("singer");
					c(".character h1").style.color = "lightblue"
				break;
				case "san":
					c(".sanChar").remove();
					c(".char-thumb").classList.add("san");
					c(".character h1").style.color = "orange"
				break;
				case "aika":
					c(".aikaChar").remove();
					c(".char-thumb").classList.add("aika");
					c(".character h1").style.color = "pink"
				break;
				case "parasitum":
					c(".char-thumb").classList.add("parasitum");
					parasitumDistortion();
				break;
			}
			c(".char-desc").innerHTML = finalCharacter.characterDesc;
			}
		})
}

function applyCharPercentage(){
	const allCharacters = JSON.parse(localStorage.getItem("allCharacters"));
	console.log(allCharacters);
	function findAndApply(character, characteristic){
		cs(".character").forEach(char => {
			if(char.classList.contains(character)){
				c(`.${CSS.escape(character)} .percentage`).innerText = characteristic;
			}
		})
	}

	Object.keys(allCharacters).forEach(char => {
		switch(char){
			case 'intro':
				findAndApply('singerChar', `${allCharacters.intro}%`);
			break;
			case 'intellectual':
				findAndApply('sanChar', `${allCharacters.intellectual}%`);
			break;
			case 'extro':
				findAndApply('madgerChar', `${allCharacters.extro}%`);
			break;
			case 'charisma':
				findAndApply('aikaChar', `${allCharacters.charisma}%`);
			break;
		}
	})

	localStorage.clear();
}

export {c, characters, charResult, checkCharResult, applyCharResult, applyCharPercentage}