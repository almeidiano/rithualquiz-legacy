const playerNick = localStorage.getItem("playerNick");

function checkIfPlayerExist() {
	if(playerNick == null) {
		window.location.href = "startquiz.html";
	}
}

let questions = [
	{
		id: 1,
		question: `${playerNick}, qual dessas você destacaria como principal qualidade sua?`,
		answers: [
			{
				id: 1,
				effect: 30,
				characteristic: "extro",
				answer: "Divertido(a)"
			},
			{
				id: 2,
				effect: 30,
				characteristic: "intro",
				answer: "Reflexivo(a)"
			},
			{
				id: 3,
				effect: 30,
				characteristic: "intellectual",
				answer: "Inteligente"
			},
			{
				id: 4,
				effect: 30,
				characteristic: "charisma",
				answer: "Carinhoso(a)"
			}]
	},
	{
		// San
		id: 2,
		typeOf: "dynamic",
		focus: "intellectual",
		opposite: "extro",
		question: `${playerNick}, A respeito da leitura, selecione as respostas que você se indentifica.`,
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "intellectual",
				answer: "É uma ótima fonte de adquirir conhecimento."
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intro",
				answer: "É um ótimo passatempo."
			},
			{
				id: 3,
				effect: 10,
				characteristic: "charisma",
				answer: "Gosto quando é de assuntos que me interessam."
			},
			{
				id: 4,
				effect: 20,
				characteristic: "extro",
				answer: "Leitura? Que coisa mais entediante!"
			}]
	},
	{
		id: 3,	
		question: `Durante um combate, o que você faz, ${playerNick}?`,
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Eu uso minhas táticas e movimentos de uma vez sem pensar muito nas consequências."
			},
			{
				id: 2,
				effect: 10,
				characteristic: "extro",
				answer: "Eu penso em cada ataque e o que isso fará no alvo."
			},
			{
				id: 3,
				effect: 10,
				characteristic: "charisma",
				answer: "Estudo o alvo superficialmente e uso técnicas de combate à distância."
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Aproveito-me do desconhecimento do inimigo e uso técnicas ocultas."
			}]
	},
	{
		id: 4,
		question: "Antes de dormir, eu sempre...",
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "charisma",
				answer: "Lembro-me de acontecimentos passados que me dão saudades."
			},
			{
				id: 2,
				effect: 10,
				characteristic: "extro",
				answer: "Reflito nas coisas que aconteceram no dia, e ansioso para o próximo."
			},
			{
				id: 3,
				effect: 10,
				characteristic: "intellectual",
				answer: "Demoro pra dormir e sempre reviso os conteúdos que estudei."
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intro",
				answer: "Medito alguns minutos para relaxar a mente e faço alongamentos."
			}]
	},
	{
		// Madger
		id: 5,		
		typeOf: "dynamic",
		focus: "extro",
		opposite: "intellectual",
		question: "Você estaria disposto a acordar muito cedo para se exercitar?",
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "extro",
				answer: "Claro! Manter o físico e a rotina saudável sempre em 1º lugar."
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intro",
				answer: "Talvez... Depende da minha vontade diária."
			},
			{
				id: 3,
				effect: 10,
				characteristic: "charisma",
				answer: "Meu sono é mais importante."
			},
			{
				id: 4,
				effect: 20,
				characteristic: "intellectual",
				answer: "Claro que não, prefiro outras coisas."
			}]
	},
	{
		id: 6,		
		question: `Qual seu tipo de paisagem favorita, ${playerNick}?`,
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intellectual",
				answer: "Paisagens urbanas, mas a natureza em sí já me satisfaz." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intro",
				answer: "Gosto de florestas, especificamente de pinheiros e montanhas ao fundo." 
			},
			{
				id: 3,
				effect: 10,
				characteristic: "charisma",
				answer: "Opto por cachoeiras e belos lagos." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "extro",
				answer: "Prefiro campo aberto e calmo." 
			}]
	},
	{
		id: 7,		
		question: "Qual tipo de arma você usaria?",
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "intellectual",
				answer: "Um cajado mágico." 
			},
			{
				id: 2,
				effect: 20,
				characteristic: "intro",
				answer: "Espadas." 
			},
			{
				id: 3,
				effect: 20,
				characteristic: "charisma",
				answer: "Pistolas." 
			},
			{
				id: 4,
				effect: 20,
				characteristic: "extro",
				answer: "Lança Chinesa." 
			}
		]
	},
	{
		// Singer
		id: 8,	
		typeOf: "dynamic",
		focus: "intro",
		opposite: "extro",
		question: `${playerNick}, você só se "solta" em um grupo, após conhecer as pessoas muito bem?`,
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "intro",
				answer: "Sim, tenho dificuldade em socializar com desconhecidos." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intellectual",
				answer: "Um pouco, mas não sou extrovertido(a) nem quando conheço a pessoa." 
			},
			{
				id: 3,
				effect: 20,
				characteristic: "extro",
				answer: "Não! Já sou extrovertido(a) até em grupos em que não conheço ninguém." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "charisma",
				answer: "Não tanto, consigo socializar até que bem com desconhecidos." 
			}]
	},
	{
		id: 9,	
		question: `Como você age em situações difíceis, ${playerNick}?`,
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Não sei agir direito com situações complicadas."
			},
			{
				id: 2,
				effect: 10,
				characteristic: "charisma",
				answer: "Tento pensar com a lógica porém as vezes não consigo."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: "extro",
				answer: "Sempre tento alinhar e concentrar minha emoções para agir com a situação." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Sempre penso com a lógica e a racionalidade para não deixar as emoções me corromperem." 
			}]
	},
	{
		// Aika
		id: 10,
		typeOf: "dynamic",
		focus: "charisma",
		opposite: "extro",
		question: 'Você curte temas investigativos?',
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "charisma",
				answer: "Sim, adoro uma boa investigação." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intro",
				answer: "Sim, até que curto um pouco temas investigativos."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: "extro",
				answer: "Considero chato, prefiro fazer outras coisas." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Tanto faz."
			}]
	},
	{
		id: 11,
		question: 'Qual dessas cores mais te agrada?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "charisma",
				answer: "Rosa." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intellectual",
				answer: "Laranja."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: "intro",
				answer: "Azul." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "extro",
				answer: "Verde."
			}]
	},
	{
		id: 12,
		question: 'Você prioriza amigos ou família?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Amigos." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "charisma",
				answer: "Família."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: "extro",
				answer: "Considero meus amigos minha família." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Tanto faz."
			}]
	},
	{
		id: 13,
		question: 'Você se sacrificaria para salvar uma pessoa que você ama?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "extro",
				answer: "COM CERTEZA!" 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "intellectual",
				answer: "Não..."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: "intro",
				answer: "Sim..." 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "charisma",
				answer: "Depende MUITO da pessoa..."
			}]
	},
	{
		id: 14,
		question: `Qual desses estilos de luta você prefere, ${playerNick}?`,
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "intro",
				answer: "Eliminar o alvo rapidamente. (Assasino)" 
			},
			{
				id: 2,
				effect: 20,
				characteristic: "extro",
				answer: "Durar bastante a batalha e me divertir. (Lutador)"
			},
			{ 
				id: 3,
				effect: 20,
				characteristic: 'charisma',
				answer: 'Lutar "safe" e evitar ao maximo que o inimigo me atinja. (AD Carry)' 
			},
			{
				id: 4,
				effect: 20,
				characteristic: "intellectual",
				answer: "Impedir que o inimigo chege em mim usando magia e controle de grupo. (Mago)"
			}]
	},
	{
		id: 15,
		question: 'Supondo que lhe foi tirado alguém muito importante, que sentimento você nutre? O que você faria?',
		answers: [
			{
				id: 1,
				effect: 20,
				characteristic: "intro",
				answer: "Sentimento puro de vingança" 
			},
			{
				id: 2,
				effect: 20,
				characteristic: "extro",
				answer: "Eu sempre tentaria honrar aos que foram e usar de motivo para continuar em frente."
			},
			{ 
				id: 3,
				effect: 20,
				characteristic: 'charisma',
				answer: 'Decaio em tristeza assim como meus pensamentos, afinal, qual motivo de continuar se não for as pessoas que eu amo?' 
			},
			{
				id: 4,
				effect: 20,
				characteristic: "intellectual",
				answer: "Pensar racionalmente e tentar resolver o problema pela raíz, não pelo fruto."
			}]
	},
	{
		id: 16,
		question: 'Dessas opções, qual seu tipo de comida favorita?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Lasanha e macarronadas em geral." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "extro",
				answer: "Pizzas e Massas."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: 'charisma',
				answer: 'Comidas saudáveis. (saladas, carnes, etc)' 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Peixes ou frutos do mar."
			}]
	},
	{
		id: 17,
		typeOf: "static",
		question: 'Qual desses animais é o seu favorito?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Pássaros e aves." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "extro",
				answer: "Cachorros e caninos."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: 'charisma',
				answer: 'Gatos e felinos' 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Animais marinhos."
			}]
	},
	{
		id: 18,
		typeOf: "dynamic",
		focus: "charisma",
		opposite: "intellectual",
		question: 'Você gosta de desenhar para se divertir?',
		answers: [
			{
				id: 1,
				effect: 10,
				characteristic: "intro",
				answer: "Adoraria, mas não sei desenhar." 
			},
			{
				id: 2,
				effect: 10,
				characteristic: "extro",
				answer: "Tanto faz, prefiro outras coisas."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: 'charisma',
				answer: 'Sim! adoro desenhar!' 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Não! Que coisa chata."
			}]
	},
	{
		id: 19,
		typeOf: "dynamic",
		focus: "intro",
		opposite: "extro",
		question: 'Você tem costume de falar sozinho na ausência de pessoas?',
		answers: [ 
			{
				id: 1,
				effect: 20,
				characteristic: "intro",
				answer: "Sim, gosto de refletir nos meus pensamentos dessa maneira" 
			},
			{
				id: 2,
				effect: 20,
				characteristic: "extro",
				answer: "Claro que não! Coisa de maluco."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: 'charisma',
				answer: 'Não tenho costume de falar sozinho(a)' 
			},
			{
				id: 4,
				effect: 10,
				characteristic: "intellectual",
				answer: "Só falo sozinho(a) quando estou empolgado(a)"
			}
		]
	},
	{
		id: 20,
		typeOf: "dynamic",
		focus: "intro",
		opposite: "intellectual",
		question: 'Você é uma pessoa constantemente ansiosa?',
		answers: [ 
			{
				id: 1,
				effect: 20,
				characteristic: "intro",
				answer: "SIM, NÃO TENHO 1 MINUTO DE PAZ COM ANSIEDADE!" 
			},
			{
				id: 2,
				effect: 10,	
				characteristic: "extro",
				answer: "Não, consigo controlar até bem minha ansiedade."
			},
			{ 
				id: 3,
				effect: 10,
				characteristic: 'charisma',
				answer: 'Sim, as vezes fico ansioso(a)' 
			},
			{
				id: 4,
				effect: 20,
				characteristic: "intellectual",
				answer: "Não sou uma pessoa ansiosa."
			}
		]
	}
];

export {playerNick, checkIfPlayerExist, questions};