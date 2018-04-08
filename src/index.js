import { sample } from "lodash";
import { Automaton, GameOfLifeStrategy, NeonStrategy, VoteStrategy } from "./Automaton";

const CELL_SIZE = 10;

const drawCells = (ctx, cells, canvasWidth, canvasHeight) => {
  cells.forEach((row, y) => row.forEach((cell, x) => {
    if (cell) {
      ctx.beginPath();
      ctx.arc(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE / 2, Math.PI*2, false);
      ctx.strokeStyle = "rgb(0, 64, 64)";
      ctx.stroke();
    }
  }));
}

const draw = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fill();

  const gol = new Automaton(
    Math.floor(document.body.clientWidth / CELL_SIZE),
    Math.floor(document.body.clientHeight / CELL_SIZE),
    sample([
      GameOfLifeStrategy,
      NeonStrategy,
      VoteStrategy
    ])
  );

  return setInterval(() => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCells(ctx, gol.cells, canvas.width, canvas.height);
    gol.next();
  }, 200);
}

let intervalId = draw();

const redraw = () => {
  clearInterval(intervalId);
  intervalId = draw();
}

window.onresize = redraw;

window.onclick = redraw;
