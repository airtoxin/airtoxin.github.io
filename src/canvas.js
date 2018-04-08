export const getCanvasContext = (document, context = "2d") => {
  const canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  return canvas.getContext(context);
}
