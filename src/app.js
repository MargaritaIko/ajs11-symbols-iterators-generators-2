import Team from './team';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 25,
  defence: 25,
};
const swordsman = {
  name: 'Фехтовальщик',
  type: 'Swordsman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const undead = {
  name: 'Нежить',
  type: 'Undead',
  health: 50,
  level: 1,
  attack: 10,
  defence: 40,
};
const magician = {
  name: 'Магистр',
  type: 'Magician',
  health: 50,
  level: 1,
  attack: 25,
  defence: 25,
};

const char = new Team();

char.addHero(bowman);
char.addHero(undead);
char.addHero(magician);
char.addHero(swordsman);

for (const hero of char) {
  console.log(hero);
}
