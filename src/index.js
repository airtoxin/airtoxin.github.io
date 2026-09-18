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

const draw = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const bgCanvas = document.getElementById("bg");
  bgCanvas.width = document.body.clientWidth;
  bgCanvas.height = document.body.clientHeight;
  const bgCtx = bgCanvas.getContext("2d");

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fill();

  const gol = new Automaton(
    Math.floor(CANVAS_SIZE / CELL_SIZE),
    Math.floor(CANVAS_SIZE / CELL_SIZE),
    DazzleStrategy
  );
  // セルの密度を既存パターンに近づけるため粒子を多めにする
  const particleLife = new ParticleLife(720);
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
          ctx.strokeStyle = "rgb(0, 64, 64)";
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

    const bgPattern = bgCtx.createPattern(canvas, "repeat");
    bgCtx.rect(0, 0, document.body.clientWidth, document.body.clientHeight);
    bgCtx.fillStyle = bgPattern;

    bgCtx.fill();

    if (mode === "particleLife") {
      particleLife.next();
    } else {
      gol.next();
    }

    requestAnimationFrame(d);
  };

  d();

  let intervalId;

  const redraw = () => {
    clearInterval(intervalId);
    const bgCanvas = document.getElementById("bg");
    bgCanvas.width = document.body.clientWidth;
    bgCanvas.height = document.body.clientHeight;
    gol.initialize(
      Math.floor(CANVAS_SIZE / CELL_SIZE),
      Math.floor(CANVAS_SIZE / CELL_SIZE)
    );
    const p = Math.random();
    mode = "automaton";
    if (p < 0.2) {
      mode = "particleLife";
      particleLife.initialize();
    } else if (p < 0.25) {
      gol.strategy = NeonStrategy;
    } else if (p < 0.4) {
      gol.strategy = GameOfLifeStrategy;
    } else if (p < 0.7) {
      gol.strategy = VoteStrategy;
    } else {
      gol.strategy = DazzleStrategy;
    }
    intervalId = setInterval(redraw, 10 * 1000);
  };

  window.onclick = redraw;
  window.onresize = redraw;
  window.addEventListener("touchend", redraw, false);

  intervalId = setInterval(redraw, 10 * 1000);
};

draw();
