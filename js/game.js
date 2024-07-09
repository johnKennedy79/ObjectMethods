let game = {
  setgamestart: function (heroName) {
    this.resetHero(heroName);
    this.setPreFight();
  }, //set hero stats using switch each hero is a case with a break at the end no defalt is needed as one hero must be chosen
  resetHero: function (heroName) {
    switch (heroName) {
      case "Sir_Wollivan":
        hero = new Hero(heroName, 1000, 300, 400);
        break;
      case "Sir_Johns":
        hero = new Hero(heroName, 1000, 400, 300);
        break;
    } //get the stats for the hero that has been chosen
    let getPlayer = document.querySelector(".player");
    getPlayer.innerHTML =
      `<img src="./img/` +
      heroName.toLowerCase() +
      `.jpg" class="img-avatar"><div><h3>` +
      heroName +
      `</h3>
      <p>Health: ` +
      Hero.health +
      `</p><p>Attack: ` +
      Hero.attack +
      `</p><p>Defence: ` +
      Hero.defence +
      `</p></div>`;
  }, // error hero has already been declared ?????
  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = `<p>Task: Find an enemy!</p>`;
    getAction.innerHTML = `<a href="#" class="btnprefight" onclick="game.setFight()">Search for an enemy</a>`;
    getArena.style.visibility = "visible";
  }, //set enemy stats
  setFight: function () {
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getEnemy = document.querySelector(".enemy");

    let enemy0 = new Enemy("Dragon", 1000, 100, 300);
    let enemy1 = new Enemy("Ork", 500, 50, 100);
    let chooseEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseEnemy) {
      case 0:
        Enemy = enemy0;
        break;
      case 1:
        Enemy = enemy1;
        break;
    }
    getHeader.innerHTML = `<p>Task: Choose your move!`;
    getAction.innerHTML = `<a href="#" class="btnprefight" onclick="HeroMoves.calcAttack()">Attack!</a>`;
    getEnemy.innerHTML =
      `<img src="./img/` +
      enemyName.toLowerCase() +
      `.jpg" class="img-avatar"><div><h3>` +
      enemyName +
      `</h3>
      <p>Health: ` +
      Enemy.health +
      `</p><p>Attack: ` +
      Enemy.attack +
      `</p><p>Defence: ` +
      Enemy.defence +
      `</p></div>`;
  },
};
