export default class Team {
  constructor() {
    this.team = {};
  }

  addHero(obj) {
    this.team[obj.type] = obj;
  }

  * [Symbol.iterator]() {
    const keys = Object.keys(this.team);
    const limit = keys.length;
    let counter = -1;
    const $this = this.team;
    while (counter < limit) {
      yield $this[keys[counter += 1]];
    }
  }
}
