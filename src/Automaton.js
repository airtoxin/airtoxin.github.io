const countCells = (cells, omitCenter = false) => {
  let count = 0;
  for (let i = 0; i < cells.length; i++) {
    if (omitCenter && i === 4) continue;
    if (cells[i] !== undefined && cells[i] !== false) count++;
  }
  return count;
};

export const GameOfLifeStrategy = cells => {
  const count = countCells(cells, true);
  return count === 3 || (Boolean(cells[4]) && count === 2);
};

export const VoteStrategy = cells => {
  const count = countCells(cells);
  return count === 4 || count === 5 ? !cells[4] : count > 5;
};

export const NeonStrategy = cells => {
  const count = countCells(cells);
  return count === 0 || count === 9;
};

export const DazzleStrategy = cells => countCells(cells) > 4;

export class Automaton {
  constructor(width, height, strategy) {
    this.strategy = strategy;
    this.initialize(width, height);
  }

  initialize(width, height) {
    this.cells = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => Math.random() < 0.5)
    );
  }

  next() {
    const { cells } = this;
    const height = cells.length;
    const width = cells[0].length;
    this.cells = cells.map((row, y) => {
      const above = cells[y === 0 ? height - 1 : y - 1];
      const below = cells[y === height - 1 ? 0 : y + 1];
      return row.map((cell, x) => {
        const left = x === 0 ? width - 1 : x - 1;
        const right = x === width - 1 ? 0 : x + 1;
        return this.strategy([
          above[left], above[x], above[right],
          row[left], cell, row[right],
          below[left], below[x], below[right]
        ]);
      });
    });
  }
}
