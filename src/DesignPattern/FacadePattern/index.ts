class CPU {
  public name: string;

  constructor(name:string){
    this.name = name
  }

  public run(): string {
    return this.name + 'is running'
  }
}

class HardDrive {
  public name: string;

  constructor(name:string){
    this.name = name
  }

  public run(): string {
    return this.name + 'is running'
  }
}

class Memory {
  public name: string;

  constructor(name:string){
    this.name = name
  }

  public run(): string {
    return this.name + 'is running'
  }
}

class ComputerFacade {
  private  processor:CPU;
  private ram:Memory;
  private hd: HardDrive;

  constructor(){
    this.processor = new CPU('my cpu');
    this.ram = new Memory('my memory');
    this.hd = new HardDrive('my hard drive');
  }

  public start(): string {
    return this.processor.run() + "&" + this.ram.run()+ "&" + this.hd.run()
  }
}

class Client{
  public openComputer():string{
    const computer = new ComputerFacade();
    return computer.start();
  }
}

const client = new Client()

console.log(client.openComputer())