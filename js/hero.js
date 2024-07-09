// declar player in the global scope
let Hero;
let Enemy;
//player object constructer
function Hero(heroName, health, attack, defence) {
  this.heroName = heroName;
  this.health = health;
  this.attack = attack;
  this.defence = defence;
}

function Enemy(enemyType, health, attack, defence) {
  this.enemyName = enemyType;
  this.health = health;
  this.attack = attack;
  this.defence = defence;
}
