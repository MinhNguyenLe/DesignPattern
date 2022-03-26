abstract class _Geometry {
  public color!: Color;
  public shape!: Shape;

  public getGeometry(): string {
    return this.shape.getShape() + " && " + this.color.getColor();
  }
}

class Geometry extends _Geometry {
  constructor(shape: Shape, color: Color) {
    super();
    this.shape = shape;
    this.color = color;
  }
}

abstract class _Shape {
  public name!: string;

  public getShape(): string {
    return this.name;
  }
}

abstract class _Color {
  public color!: string;

  public getColor(): string {
    return this.color;
  }
}

class Shape extends _Shape {
  constructor(name: string) {
    super();
    this.name = name;
  }

  public getShape(): string {
    return this.name;
  }
}

class Color extends _Color {
  constructor(color: string) {
    super();
    this.color = color;
  }

  public getColor(): string {
    return this.color;
  }
}

let circle = new Shape("circle");
let red = new Color("red");
let geometry1 = new Geometry(new Shape("circle"), new Color("red"));

console.log(geometry1.getGeometry());
