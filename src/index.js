import { Automaton, GameOfLifeStrategy, NeonStrategy, VoteStrategy } from "./Automaton";

const CELL_SIZE = 20;

const drawCells = (ctx, cells, canvasWidth, canvasHeight) => {
  cells.forEach((row, y) => row.forEach((cell, x) => {
    if (cell) {
      ctx.beginPath();
      ctx.arc(x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 2, Math.PI*2, false);
      ctx.strokeStyle = "rgb(0, 64, 64)";
      ctx.stroke();
      ctx.fillStyle = "rgba(0, 32, 32)";
      ctx.fill();
    }
  }));
}

const draw = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 500;
  canvas.height = 500;

  const bgCanvas = document.getElementById("bg");
  bgCanvas.width = document.body.clientWidth;
  bgCanvas.height = document.body.clientHeight;
  const bgCtx = bgCanvas.getContext("2d");

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fill();

  const gol = new Automaton(
    Math.floor(500 / CELL_SIZE),
    Math.floor(500 / CELL_SIZE),
    VoteStrategy
  );

  return setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCells(ctx, gol.cells, canvas.width, canvas.height);

    const bgPattern = bgCtx.createPattern(canvas, "repeat");
    bgCtx.rect(0,0,document.body.clientWidth, document.body.clientHeight);
    bgCtx.fillStyle = bgPattern;

    bgCtx.fill();

    gol.next();
  }, 100);
}

let intervalId = draw();

const redraw = () => {
  clearInterval(intervalId);
  intervalId = draw();
}

window.onresize = redraw;

window.onclick = redraw;