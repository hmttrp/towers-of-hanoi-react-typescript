import { Layer } from "./layer";
import { Tower } from "./tower";

export class Game {
  public pickedLayer: Layer | null;

  private towers: [Tower, Tower, Tower];

  constructor() {
    this.towers = [new Tower(3), new Tower(0), new Tower(0)];

    this.pickedLayer = null;
  }

  get leftTower() {
    return this.towers[0];
  }

  get centerTower() {
    return this.towers[1];
  }

  get rightTower() {
    return this.towers[2];
  }

  public pickup(towerIndex: number) {
    if (this.pickedLayer !== null) {
      throw new Error("Already picked up a layer");
    }

    const tower = this.towers[towerIndex];
    const layer = tower.removeTopLayer();
    this.pickedLayer = layer;
  }

  public place(towerIndex: number) {
    if (this.pickedLayer === null) {
      throw new Error("Pickup a layer first");
    }

    const tower = this.towers[towerIndex];
    tower.placeLayer(this.pickedLayer);
    this.pickedLayer = null;
  }
}
