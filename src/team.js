export default class Team {
  constructor() {
    this.team = {};
  }

  addHero(obj) {
    this.team[obj.type] = obj;
  }

  [Symbol.iterator]() {
    const { hero } = this;
    let current = 0;
    const last = hero.length;
    return {
      next() {
        if (current < last) {
          const val = hero[current];
          current += 1;
          return {
            done: false,
            value: val,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}
