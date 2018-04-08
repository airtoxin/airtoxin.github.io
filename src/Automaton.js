import { range, get } from "lodash";

export const GameOfLifeStrategy = neighborCells => {
  const count = neighborCells
    .filter((_, i) => i !== 4) // omit center cell
    .map(x => (x === undefined || x === false ? 0 : 1))
    .reduce((a, x) => a + x, 0);

  if (neighborCells[4]) {
    return count === 2 || count === 3;
  } else {
    return count === 3;
  }
};

export const VoteStrategy = neighborCells => {
  const count = neighborCells
    .map(x => (x === undefined || x === false ? 0 : 1))
    .reduce((a, x) => a + x, 0);

  if (count === 4 || count === 5) return !neighborCells[4];
  if (count < 4) return false;
  return true;
};

export const NeonStrategy = neighborCells => {
  const count = neighborCells
    .map(x => (x === undefined || x === false ? 0 : 1))
    .reduce((a, x) => a + x, 0);

  return count === 0 || count === 9;
};

export class Automaton {
  constructor(width, height, strategy) {
    this._strategy = strategy;
    this.initialize(width, height);
  }

  initialize(width, height) {
    this.cells = range(0, height).map(() =>
      range(0, width).map(() => Math.random() < 0.5)
    );
  }

  next() {
    const cellsYLength = this.cells.length;
    const cellsXLength = this.cells[0].length;
    const g = (y, x) =>
      get(this.cells, [
        (cellsYLength + y) % cellsYLength,
        (cellsXLength + x) % cellsXLength
      ]);
    this.cells = this.cells.map((row, y) =>
      row.map((cell, x) => {
        return this._strategy([
          g(y - 1, x - 1),
          g(y - 1, x),
          g(y - 1, x + 1),
          g(y, x - 1),
          g(y, x),
          g(y, x + 1),
          g(y + 1, x - 1),
          g(y + 1, x),
          g(y + 1, x + 1)
        ]);
      })
    );
  }
}
