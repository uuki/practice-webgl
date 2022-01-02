import * as p5 from "p5";

class App {
  private p5: any;
  public canvasWidth = 600;
  public canvasHeight = 600;

  constructor() {
    this.createCanvas();
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  };

  private drawing = (p: any): void => {
    p.setup = () => {
      p.createCanvas(this.canvasWidth, this.canvasHeight);
      p.circle(100 / 2, 100 / 2, 50);
    };
    // p.draw = () => {
    // }
  };
}

new App();
