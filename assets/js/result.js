const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

const characters = [
	{id: 1, characterNick: "madger", characterName: "Madger Yasáshi", characterImg: 'assets/img/characters/madger.png', characterAttr: "extro", characterDesc: 'Você é uma pessoa bastante <span style="color:lightgreen;">extrovertida</span>, você ama aventuras e é bastante emotivo(a). Aproximando-se bastante da personalidade do Madger.'},
	{id: 2, characterNick: "singer", characterName: "Singer Faksumi", characterImg: 'assets/img/characters/bg_singer.jpg', characterAttr: "intro", characterDesc: 'Você é uma pessoa que possui características de <span style="color:lightblue;">introversão</span>. Além disso, observador e pensativo. Aproximando-se bastante da personalidade do Singer.'},
	{id: 3, characterNick: "san", characterName: "San Majutsu-shi", characterImg: 'assets/img/characters/bg_san.jpeg', characterAttr: "intellectual", characterDesc: 'Você é uma pessoa com muito foco no <span style="color:orange;">intelectual</span>, você é bastante racional e até peca na questão física. Aproximando-se bastante da personalidade do San.'},
	{id: 4, characterNick: "aika", characterName: "Aika'Nu", characterImg: 'assets/img/characters/aika.png', characterAttr: "charisma", characterDesc: 'Você é uma pessoa <span style="color:pink;">carismática</span>, você se preocupa bastante com sua família e amigos. Ademais, você possui um bom juízo. Aproximando-se bastante da personalidade da Aika.'}
];

const charResult = localStorage.getItem("charResult");

if(charResult == null) {
	window.location.href = "startquiz.html";
}else{
	c(".playerNick").innerHTML = localStorage.playerNick; 
		
	characters.forEach(character => {
		if(character.characterAttr == charResult){
			const finalCharacter = character;

			c(".char-thumb img").src = finalCharacter.characterImg;
			c(".character h1").innerHTML = finalCharacter.characterName;
			switch(character.characterNick) {
				case "madger":
					c(".character h1").style.color = "lightgreen"
				break;
				case "singer":
					c(".character h1").style.color = "lightblue"
				break;
				case "san":
					c(".character h1").style.color = "orange"
				break;
				case "aika":
					c(".character h1").style.color = "pink"
				break;
			}

			c(".char-desc").innerHTML = finalCharacter.characterDesc;
			localStorage.clear();
		}
	})
}

