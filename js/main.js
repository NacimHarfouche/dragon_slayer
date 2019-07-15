// // Mode de jeu
// let gameMode = window.prompt("Choisissez le mode de jeu (Facile - Normal - Difficile) : ").toLowerCase();
// while (gameMode != "facile" && gameMode != "normal" && gameMode != "difficile") {
// 	alert("Erreur, Veuillez choisir parmis les 3 choix !!!");
// 	gameMode = window.prompt("Choisissez le mode de jeu (facile - Normal - Difficile) : ").toLowerCase();
// }

// // Choix Armure
// let choiceArmor = window.prompt("Choisissez l'armure du héro (Cuir - Fer - Magique) : ").toLowerCase();
// while (choiceArmor != "cuir" && choiceArmor != "fer" && choiceArmor != "magique") {
// 	alert("Erreur, Veuillez choisir parmis les 3 choix !!!");
// 	choiceArmor = window.prompt("Choisissez l'armure du héro (Cuir - Fer - Magique) : ").toLowerCase();
// }

// // Choix de l'arme
// let choiceWeapon = window.prompt("Choisissez l'arme du héro (Bois - Acier - Excalibur) : ").toLowerCase();
// while (choiceWeapon != "bois" && choiceWeapon != "acier" && choiceWeapon != "excalibur") {
// 	alert("Erreur, Veuillez choisir parmis les 3 choix !!!");
// 	choiceWeapon = window.prompt("Choisissez l'arme du héro (Bois - Acier - Excalibur) : ").toLowerCase();
// }

// instancie la class Game (coeur du jeu)
let game = new Game();

// affiche les gold coins
let coinSpan = document.getElementById("coin");


// les buttons de difficulté du jeu
let liElts = document.querySelectorAll("ul#difficulter li input");
console.log(liElts)
for (let li of liElts) {
	li.addEventListener("click", function() {
		game.gameModeChose = this.dataset.mode;
		document.getElementById("difficulter").classList.add("hiden");
	});
}

// button Start
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
	game.gameMode();
	game.armorType();
	game.weaponType();
	game.combat();
	coinSpan.textContent = game.hero.coin;
});

// paragraphe dans le quel est afficher le résultat
let paraElt = document.getElementById("result");




console.log(game.gameModeChose);
console.log(game.choiceArmor);
console.log(game.choiceWeapon);