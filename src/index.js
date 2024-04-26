import { Application, Sprite, Assets } from "pixi.js";

document.addEventListener("DOMContentLoaded", async () => {
  const pixiContainer = document.getElementById("pixi-container");
  const app = new Application();

  await app.init({ background: "#1099bb", resizeTo: pixiContainer });
  pixiContainer.appendChild(app.canvas);

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  const bunny = new Sprite(texture);

  app.stage.addChild(bunny);

  bunny.anchor.set(0.5);

  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  app.ticker.add((time) => {
    bunny.rotation += 0.1 * time.deltaTime;
  });
});
