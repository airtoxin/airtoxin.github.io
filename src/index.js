import { getCanvasContext } from "./canvas";
import { Automaton, GameOfLifeStrategy } from "./Automaton";

const CELL_SIZE = 10;

const drawCells = (ctx, cells, canvasWidth, canvasHeight) => {
  cells.forEach((row, y) => row.forEach((cell, x) => {
    if (cell) {
      ctx.beginPath();
      ctx.arc(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE / 2, Math.PI*2, false);
      ctx.strokeStyle = "rgb(192, 192, 192)";
      ctx.stroke();
    }
  }));
}

const draw = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const ctx = canvas.getContext("2d");

  const gol = new Automaton(
    Math.floor(document.body.clientWidth / CELL_SIZE),
    Math.floor(document.body.clientHeight / CELL_SIZE),
    GameOfLifeStrategy
  );

  return setInterval(() => {
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCells(ctx, gol.cells, canvas.width, canvas.height);
    gol.next();
  }, 100);
}

let intervalId = draw();

window.onresize = () => {
  clearInterval(intervalId);
  intervalId = draw();
};
