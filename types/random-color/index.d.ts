declare module "random-color" {
  interface IColor {
    hexString(): string;
  }

  function randomColor(): IColor;
  function randomColor(saturation: number, value: number): IColor;

  export default randomColor;
}
