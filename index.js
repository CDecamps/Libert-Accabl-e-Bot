// Initialisation
const Discord = require('discord.js');
const bot = new Discord.Client();
var patate = require("./hordes.json");

// Fonctions utiles
function randInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// Commandes
var commandes = ['!help', '!forum', '!trombi', '!everyone', '!echo', '!Bernard', '!Golgoth', '!Maelg', '!Mackay', '!Roventa', '!Sibaal', '!Cleme', '!Khran', '!Drac', '!Dragon', '!Matsam'];
var asw = {
	help: ['Commandes disponibles :\n' + commandes.join('\n')],
	forum: ['www.kirov-meta.forumactif.org'],
	trombi: ['Pour accéder au trombi, demandez l\'accès à Cleme ou Khran et postez une photo !'],
	everyone: ['Normalement ce message n\'est pas censé apparaître :calim:'],
	echo: ['Tu t\'es cru dans une caverne ?!'],
	Bernard: ['C\'est moi !'],
	Golgoth: ['Tu parle à ki ?', 'tu me parle à moi?'],
	Maelg: ['Miou !'],
	Mackay: ["L'humanité est pourrie l'amour est une illusion", "Je vous suis infiniment supérieur ", "Loué soit le grand MacKay", "Ma vie pour MacKay"],
	Roventa: ["Je t'aime... mais lâche-moi bordel !", "Cool une vodka, je ne serais pas obligé de boire mon eau pour finir l'expé !", "Les russes ont triché l'Égypte devait gagner"],
	Sibaal: ['Et en plus tu m\'traîte de Golgoth.'],
	Cleme: ['Et c\'est sur ces mots que toute envie révolutionnaire s\'éteint chez le peuple.','Le mandat de la présidente Cleme était incontestable et sa puissance sans limite.', "Île-de-France? Tu veux dire Paris", "Y a que Paint de vrai"],
	Khran: ["Un vrai ETListe abandonne son stuff dans le désert !", "Meurt dans le désert"],
	Drac: ['+37 !'],
	Dragon: ['Coup critique !'],
	Matsam: ['Hartychou <3']
};
var mat100 = 0;

bot.on('message', function (msg) {
	var txt = msg.content;
	
	if (txt === '!everyone') {
		msg.reply('Et non tu seras le seul mentionné !');
	}
	
	else if (txt === '!echo') {
		msg.channel.send('echo', {
			tts: true
		});
	}
	
	else if (txt === ':mat100:') {
		if (mat100 == 2) {
			mat100 = -1;
			msg.channel.send(':mat100:');
		} else {
			mat100 ++;
		}
	}
	
	else if (commandes.indexOf(txt) != -1) {
		if (txt.substr(1) === msg.author.username) {
			msg.channel.send('Bah c\'est toi idiot :calim:');
		} else {
			var L = asw[txt.substr(1)];
			msg.channel.send(L[randInt(L.length)]);
		}
	}
});

// Login
bot.login(patate.carotte);
