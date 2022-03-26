abstract class Pizza {
  public name!: string;
  public description!: string;

  public getTypePizza(): string {
    return this.name + " && " + this.description;
  }

  public abstract cost(): number;
}

class Model extends Pizza {
  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public cost(): number {
    return 100000;
  }
}

abstract class PizzaDecorator extends Pizza {
  decorated!: Pizza;

  public abstract getTypePizza(): string;
  public abstract cost(): number;
}

class PizzaOption1 extends PizzaDecorator {
  decorated: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.decorated = pizza;
  }

  public getTypePizza(): string {
    return this.decorated.getTypePizza() + " && type = 1";
  }

  public cost(): number {
    return this.decorated.cost() + 5000;
  }
}

class PizzaOption2 extends PizzaDecorator {
  decorated: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.decorated = pizza;
  }

  public getTypePizza(): string {
    return this.decorated.getTypePizza() + " && type = 2";
  }

  public cost(): number {
    return this.decorated.cost() + 10000;
  }
}

class PizzaOption3 extends PizzaDecorator {
  decorated: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.decorated = pizza;
  }

  public getTypePizza(): string {
    return this.decorated.getTypePizza() + " && type = 3";
  }

  public cost(): number {
    return this.decorated.cost() + 20000;
  }
}

let pizza = new Model("name = 1", "decsription = 1");
pizza = new PizzaOption1(pizza);
pizza = new PizzaOption3(pizza);

console.log(pizza.getTypePizza(), pizza.cost());
