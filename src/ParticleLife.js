// Particle Life
// 色は「種族」を区別するためのラベルにすぎず、系の複雑さを生むのは
// 種族間の非対称な引力・斥力行列（A→B と B→A が異なる）の方。
// そのため種族を描き分けずにグリッドへ落とし込んでも成立する。

const R_MAX = 0.1; // 相互作用が届く距離（ワールド幅を 1 とした比率）
const BETA = 0.3; // これより近いと種族に関係なく反発する
const DT = 0.02;
const FRICTION = Math.pow(0.5, DT / 0.04);
const FORCE_FACTOR = 10;

const force = (r, a) => {
  if (r < BETA) return r / BETA - 1;
  if (r < 1) return a * (1 - Math.abs(2 * r - 1 - BETA) / (1 - BETA));
  return 0;
};

// トーラス上の最短差分（タイル状に敷き詰めても継ぎ目が出ない）
const wrapDelta = (d) => d - Math.round(d);

export class ParticleLife {
  constructor(count) {
    this.count = count;
    this.initialize();
  }

  initialize() {
    const PARTICLE_COUNT = this.count;
    this.typeCount = 3 + Math.floor(Math.random() * 2);
    this.matrix = Array.from({ length: this.typeCount }, () =>
      Array.from({ length: this.typeCount }, () => Math.random() * 2 - 1),
    );
    this.types = new Uint8Array(PARTICLE_COUNT);
    this.xs = new Float32Array(PARTICLE_COUNT);
    this.ys = new Float32Array(PARTICLE_COUNT);
    this.vxs = new Float32Array(PARTICLE_COUNT);
    this.vys = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.types[i] = Math.floor(Math.random() * this.typeCount);
      this.xs[i] = Math.random();
      this.ys[i] = Math.random();
    }
  }

  next() {
    const { types, xs, ys, vxs, vys, matrix, count: PARTICLE_COUNT } = this;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let fx = 0;
      let fy = 0;
      const row = matrix[types[i]];
      for (let j = 0; j < PARTICLE_COUNT; j++) {
        if (i === j) continue;
        const dx = wrapDelta(xs[j] - xs[i]);
        const dy = wrapDelta(ys[j] - ys[i]);
        const r = Math.hypot(dx, dy);
        if (r === 0 || r >= R_MAX) continue;
        const f = force(r / R_MAX, row[types[j]]);
        fx += (dx / r) * f;
        fy += (dy / r) * f;
      }
      vxs[i] = vxs[i] * FRICTION + fx * R_MAX * FORCE_FACTOR * DT;
      vys[i] = vys[i] * FRICTION + fy * R_MAX * FORCE_FACTOR * DT;
    }
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      xs[i] = (xs[i] + vxs[i] * DT + 1) % 1;
      ys[i] = (ys[i] + vys[i] * DT + 1) % 1;
    }
  }

  // 粒子をグリッドに落とし込み、Automaton#cells と同じ形の真偽値配列を返す
  toCells(width, height) {
    const cells = Array.from({ length: height }, () =>
      new Array(width).fill(false),
    );
    for (let i = 0; i < this.count; i++) {
      cells[Math.floor(this.ys[i] * height) % height][
        Math.floor(this.xs[i] * width) % width
      ] = true;
    }
    return cells;
  }
}
