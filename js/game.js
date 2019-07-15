class Game {
	constructor() {
		this.hero = new Hero("Luk Skriptwalker");
		this.dragon = new Dragon("Javawan the Bug");
		this.gameModeChose = "facile";
		this.choiceArmor = "fer";
		this.choiceWeapon = "bois";
		this.round = 1;
	}
	combat() {
		//this.round = 1;
		paraElt.textContent = "";
		paraElt.innerHTML += `### DEBUT DE LA PARTIE ### <br>
							***Javawan the Bug*** : ${this.dragon.hp} PV <br>
							***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
		if (this.hero.hp > 0 && this.dragon.hp > 0) {
			this.hero.speed = Math.floor(Math.random() * 10);
			this.dragon.speed = Math.floor(Math.random() * 10);
			if (this.hero.speed > this.dragon.speed) {
				
				paraElt.innerHTML += `== Tour n° ${this.round} ==<br>`;
				this.dragon.hp -= this.hero.power;
				paraElt.innerHTML += `Vous êtes plus rapide et vous infligez ${this.hero.power} points de dommage au this.dragon.<br>
									***Javawan the Bug*** : ${this.dragon.hp} PV <br>
									***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
				this.round++;				
			} else if (this.hero.speed < this.dragon.speed) {
				paraElt.innerHTML += `== Tour n° ${this.round} ==<br>`;
				this.hero.hp -= this.dragon.power;
				paraElt.innerHTML += `Le this.dragon ***Javawan the Bug*** est plus rapide et vous inflige ${this.dragon.power} points de dommage.<br>
									***Javawan the Bug*** : ${this.dragon.hp} PV <br>
									***Luk Skriptwalker*** : ${this.hero.hp} PV<br>`;
				this.round++;
			}	
		}
		
		if (this.hero.hp <= 0) {
			paraElt.innerHTML += '***Javawan the Bug*** a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir.<br>';
			paraElt.innerHTML += `Il lui restait ${this.dragon.hp} points de vie.<br>`;
		} else if (this.dragon.hp <= 0) {
			paraElt.innerHTML += 'Vous avez terrassé le terrible ***Javawan the Bug*** et délivrez la princesse !<br>';
			paraElt.innerHTML += `Il vous restait ${this.hero.hp} points de vie.<br>`;
			this.hero.coin += 5;
		}
		
		return;
	}
	// affecte les données selon le mode choisie
	gameMode() {
		switch (this.gameModeChose) {
			case "facile":{
				this.dragon.hp = Math.floor(Math.random() * (200 - 150) + 150);
				this.dragon.power = Math.floor(Math.random() * (20 - 10) + 10);
				this.hero.hp = Math.floor(Math.random() * (250 - 200) + 200);
				this.hero.power = Math.floor(Math.random() * (30 - 25) + 25);
			}
			break;
			case "normal":
				this.dragon.hp = Math.floor(Math.random() * (250 - 200) + 200);
				this.dragon.power = Math.floor(Math.random() * (30 - 20) + 20);
				this.hero.hp = Math.floor(Math.random() * (250 - 200) + 200);
				this.hero.power = Math.floor(Math.random() * (20 - 15) + 15);
			break;
			case "difficile":
				this.dragon.hp = Math.floor(Math.random() * (250 - 200) + 200);
				this.dragon.power = Math.floor(Math.random() * (40 - 30) + 30);
				this.hero.hp = Math.floor(Math.random() * (200 - 150) + 150);
				this.hero.power = Math.floor(Math.random() * (10 - 5) + 5);
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

}