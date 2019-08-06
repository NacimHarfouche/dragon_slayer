// instancie la class Game (coeur du jeu)
let game = new Game();

// affiche les gold coins
const coinSpan = document.getElementById("coin");


// les buttons de difficulté du jeu, armor, weapon
const buttonDifficultyElts = document.querySelectorAll("ul#difficulty li input[type=button]"),
buttonArmorElts = document.querySelectorAll("ul#armor li input[type=button]"),
buttonWeaponElts = document.querySelectorAll("ul#weapon li input[type=button]");

// div stats hero & dragon
const statsDivHero = document.getElementById("heroStat"),
statsDivDragon = document.getElementById("dragonStat");

// les articles
const difficultyArticle = document.getElementById("difficultyArticle"),
armorArticle = document.getElementById("armorArticle"),
weaponArticle = document.getElementById("weaponArticle");

// bouton start & attaque
const startButton = document.getElementById("startButton"),
atkButton = document.getElementById("atkButton");

// function qui repete l'action d'attribuer la value choisie et hiden/show les élèments
function managementChoice(myArray, elemHiden, elemShow, myClass, lastChoice = false) {
	for (let input of myArray) {
		input.addEventListener("click", function() {
			// sert a mettre la value stocker dans data dans la bonne propriéter de game
			if (this.dataset.type == "inputDifficulty") {
				myClass.gameModeChose = this.dataset.mode;
			} else if (this.dataset.type == "inputArmor") {
				myClass.choiceArmor = this.dataset.armor;
			} else if (this.dataset.type == "inputWeapon") {
				myClass.choiceWeapon = this.dataset.weapon;
			}
			// affiche / cache les articles
			elemHiden.classList.add("hiden");
			elemShow.classList.remove("hiden");
			// si le param est true alors j'affiche les divs
			if (lastChoice) {
				statsDivHero.classList.remove("hiden");
				statsDivDragon.classList.remove("hiden");
			}
		});
	}
}

// au moment du choix (click) appelle la function
// difficulter
managementChoice(buttonDifficultyElts,difficultyArticle, armorArticle, game);
// armure
managementChoice(buttonArmorElts, armorArticle, weaponArticle, game);
// arme
managementChoice(buttonWeaponElts, weaponArticle, startButton, game, true);

// click on button Start
startButton.addEventListener("click", () => {
	// cache / affiche les buttons
	startButton.classList.add("hiden");
	atkButton.classList.remove("hiden");
	// appel la methode qui initie le jeux
	game.beginFight();
	coinSpan.textContent = game.hero.coin;
});
// click on bouton attaque
atkButton.addEventListener("click", () => {
	game.combat();
})

// paragraphe dans le quel est afficher le résultat des attaques
let paraElt = document.getElementById("result");

