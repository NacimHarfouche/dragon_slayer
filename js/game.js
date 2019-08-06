class Game {
	constructor() {
		// j'instancie les deux class
		this.hero = new Hero("Luk Skriptwalker");
		this.dragon = new Dragon("Javawan the Bug");
		// les options seront stock ici, préremplie a défault
		this.gameModeChose = "facile";
		this.choiceArmor = "fer";
		this.choiceWeapon = "bois";
		// compteur de round
		this.round = 1;
	}
	combat() {
		// vérifie que la santé du hero et dragon sont à plus de 0
		if (this.hero.hp > 0 && this.dragon.hp > 0) {
			// génère deux vitesse aléatoir de 0 à 10 que je leurs attribue
			this.hero.speed = Math.floor(Math.random() * 10);
			this.dragon.speed = Math.floor(Math.random() * 10);
			// compare la vitesse du hero et dragon
			// si la vitesse du hero est plus haute
			if (this.hero.speed > this.dragon.speed) {
				paraElt.innerHTML += `== Tour n° ${this.round} ==<br>`;
				this.dragon.hp -= this.hero.power;
				paraElt.innerHTML += `Vous êtes plus rapide et vous infligez ${this.hero.power} points de dommage au dragon ***${this.dragon.name}***.<br>
									***Javawan the Bug*** : ${this.dragon.hp} PV <br>
									***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
				this.round++;				
			} else if (this.hero.speed < this.dragon.speed) { // si la vitesse du dragon est plus haute
				paraElt.innerHTML += `== Tour n° ${this.round} ==<br>`;
				this.hero.hp -= this.dragon.power;
				paraElt.innerHTML += `Le dragon ***${this.dragon.name}*** est plus rapide et vous inflige ${this.dragon.power} points de dommage.<br>
									***Javawan the Bug*** : ${this.dragon.hp} PV <br>
									***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
				this.round++;
			}	
		}
		// vérifie si la vie du hero/dragon ne sont pas inférieur ou égale à 0
		if (this.hero.hp <= 0) {
			paraElt.innerHTML += '***Javawan the Bug*** a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir.<br>';
			paraElt.innerHTML += `Il lui restait ${this.dragon.hp} points de vie.<br>`;
			this.hero.hp = 0;
		} else if (this.dragon.hp <= 0) {
			paraElt.innerHTML += 'Vous avez terrassé le terrible ***Javawan the Bug*** et délivrez la princesse !<br>';
			paraElt.innerHTML += `Il vous restait ${this.hero.hp} points de vie.<br>`;
			this.dragon.hp = 0;
			this.hero.coin += 5;
		}
	}
	// method qui calcul un chiffre aléatoire avec les arguments reçu
	minMaxRandom(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	// affecte les données selon le mode choisie
	gameMode() {
		switch (this.gameModeChose) {
			// si le mode choisie est
			//facile
			case "facile":{
				this.dragon.hp = this.minMaxRandom(150, 200);
				this.dragon.power = this.minMaxRandom(10, 20);
				this.hero.hp = this.minMaxRandom(200, 250);
				this.hero.power = this.minMaxRandom(25, 30);
			}
			break;
			// normal
			case "normal":  {
				this.dragon.hp = this.minMaxRandom(200, 250);
				this.dragon.power = this.minMaxRandom(20, 30);
				this.hero.hp = this.minMaxRandom(200, 250);
				this.hero.power = this.minMaxRandom(15, 20);
			}
			break;
			// difficile
			case "difficile": {
				this.dragon.hp = this.minMaxRandom(200, 250);
				this.dragon.power = this.minMaxRandom(30, 40);
				this.hero.hp = this.minMaxRandom(150, 200);
				this.hero.power = this.minMaxRandom(5, 10);
			}
			break;
		}
	}
	armorType() {
		// affecte les pénalité au dragon selon l'armure choisie
		switch (this.choiceArmor) {
			case "fer":
				this.dragon.power -= this.dragon.power * 0.25;
			break;
			case "magique":
				this.dragon.power -= this.dragon.power * 0.50;
			break;
		}
	}
	weaponType() {
		// affecte le bonus dégât selon l'arme choisie
		switch (this.choiceWeapon) {
			case "bois":
				this.hero.power -= this.hero.power * 0.50;
				break;
			case "excalibur":
				this.hero.power += this.hero.power * 0.50;
				break;
		}
	}
	// methode qui initie le jeux en attribuant les choix de l'utilisateur
	beginFight() {
		this.gameMode();
		this.armorType();
		this.weaponType();
		paraElt.textContent = "";
		paraElt.innerHTML += `### DEBUT DE LA PARTIE ### <br>
							***Javawan the Bug*** : ${this.dragon.hp} PV <br>
							***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
	}
}