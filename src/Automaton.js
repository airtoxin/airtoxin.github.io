import { range, get } from "lodash";

export const GameOfLifeStrategy = neighborCells => {
  const count = neighborCells
    .filter((_, i) => i !== 4) // omit center cell
    .map(x => (x === undefined || x === false) ? 0 : 1)
    .reduce((a, x) => a + x, 0);

  if (neighborCells[4]) {
    return count === 2 || count === 3;
  } else {
    return count === 3;
  }
};

export class Automaton {
  constructor(width, height, strategy) {
    this._strategy = strategy;
    this.cells =
      range(0, height).map(() =>
        range(0, width).map(() => Math.random() < 0.5));
  }

  next() {
    this.cells = this.cells.map((row, y) =>
      row.map((cell, x) => {
        return this._strategy([
          get(this.cells, [y - 1, x - 1]), get(this.cells, [y - 1, x]), get(this.cells, [y - 1, x + 1]),
          get(this.cells, [y, x - 1]),     get(this.cells, [y, x]),     get(this.cells, [y, x + 1]),
          get(this.cells, [y + 1, x - 1]), get(this.cells, [y + 1, x]), get(this.cells, [y + 1, x + 1]),
        ]);
      }));
  }
}
