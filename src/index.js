import "./index.css";
import {
  Automaton,
  GameOfLifeStrategy,
  NeonStrategy,
  VoteStrategy,
  DazzleStrategy
} from "./Automaton";
import { ParticleLife } from "./ParticleLife";

const CELL_SIZE = 5;
const CANVAS_SIZE = 300;

const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

const draw = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const bgCanvas = document.getElementById("bg");
  const resizeBackground = () => {
    const { clientWidth, clientHeight } = document.documentElement;
    if (bgCanvas.width !== clientWidth) bgCanvas.width = clientWidth;
    if (bgCanvas.height !== clientHeight) bgCanvas.height = clientHeight;
  };
  resizeBackground();
  const bgCtx = bgCanvas.getContext("2d");

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "rgb(0, 64, 64)";

  const gol = new Automaton(
    Math.floor(CANVAS_SIZE / CELL_SIZE),
    Math.floor(CANVAS_SIZE / CELL_SIZE),
    DazzleStrategy
  );
  let particleLife;
  let mode = "automaton";

  const drawCells = (cells) =>
    cells.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (cell) {
          ctx.beginPath();
          ctx.arc(
            x * CELL_SIZE + CELL_SIZE / 2,
            y * CELL_SIZE + CELL_SIZE / 2,
            CELL_SIZE / 2,
            Math.PI * 2,
            false
          );
          ctx.stroke();
          ctx.fillStyle = "rgba(0, 32, 32)";
          ctx.fill();
        }
      })
    );

  const d = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (mode === "particleLife") {
      drawCells(
        particleLife.toCells(
          Math.floor(CANVAS_SIZE / CELL_SIZE),
          Math.floor(CANVAS_SIZE / CELL_SIZE)
        )
      );
    } else {
      drawCells(gol.cells);
    }

    bgCtx.fillStyle = bgCtx.createPattern(canvas, "repeat");
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

    if (mode === "particleLife") {
      particleLife.next();
    } else {
      gol.next();
    }

    requestAnimationFrame(d);
  };

  d();

  let resetTimer;

  const redraw = () => {
    clearTimeout(resetTimer);
    if (document.hidden) {
      resetTimer = setTimeout(redraw, 10_000);
      return;
    }
    resizeBackground();
    gol.initialize(
      Math.floor(CANVAS_SIZE / CELL_SIZE),
      Math.floor(CANVAS_SIZE / CELL_SIZE)
    );
    const p = Math.random();
    mode = "automaton";
    if (p < 0.2) {
      mode = "particleLife";
      if (particleLife) particleLife.initialize();
      else particleLife = new ParticleLife(720);
    } else if (p < 0.25) {
      gol.strategy = NeonStrategy;
    } else if (p < 0.4) {
      gol.strategy = GameOfLifeStrategy;
    } else if (p < 0.7) {
      gol.strategy = VoteStrategy;
    } else {
      gol.strategy = DazzleStrategy;
    }
    resetTimer = setTimeout(redraw, 10_000);
  };

  window.addEventListener("click", redraw);
  window.addEventListener("resize", resizeBackground);

  resetTimer = setTimeout(redraw, 10_000);
};

if (!motion.matches) requestAnimationFrame(draw);
