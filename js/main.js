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


// les buttons de difficulté du jeu, armor, weapon
let buttonDifficultyElts = document.querySelectorAll("ul#difficulty li input[type=button]");
let buttonArmorElts = document.querySelectorAll("ul#armor li input[type=button]");
let buttonWeaponElts = document.querySelectorAll("ul#weapon li input[type=button]");

// div stats hero & dragon
const statsDivHero = document.getElementById("heroStat");
const statsDivDragon = document.getElementById("dragonStat");

// les articles
const difficultyArticle = document.getElementById("difficultyArticle");
const armorArticle = document.getElementById("armorArticle");
const weaponArticle = document.getElementById("weaponArticle");

// bouton
const startButton = document.getElementById("startButton");

// function qui repete l'action d'attribuer la value choisie et hiden/show les élèments
function managementChoice(myArray, elemHiden, elemShow, myClass, divHero = null, divDragon = null) {
	for (let input of myArray) {
		input.addEventListener("click", function() {
			myClass.gameModeChose = this.dataset.mode;
			elemHiden.classList.add("hiden");
			elemShow.classList.remove("hiden");
			if (divHero) {
				console.log("true")
				divHero.classList.remove("hiden");
				divDragon.classList.remove("hiden");
			}
		});
	}
}

// au moment du choix (click)
// difficulter
managementChoice(buttonDifficultyElts,difficultyArticle, armorArticle, game);
// armure
managementChoice(buttonArmorElts, armorArticle, weaponArticle, game);
// arme
managementChoice(buttonWeaponElts, weaponArticle, startButton, game, statsDivHero, statsDivDragon);

// button Start
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