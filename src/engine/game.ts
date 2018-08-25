import { Layer } from "./layer";
import { Tower } from "./tower";

export enum TowerPosition {
  left = 0,
  center = 1,
  right = 2
}

export class Game {
  public pickedLayer: Layer | null;

  private towers: [Tower, Tower, Tower];

  constructor(height: number) {
    this.towers = [new Tower(height), new Tower(0), new Tower(0)];

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

  public pickup(towerPosition: TowerPosition) {
    if (this.pickedLayer !== null) {
      throw new Error("Already picked up a layer");
    }

    const tower = this.towers[towerPosition];
    const layer = tower.removeTopLayer();
    this.pickedLayer = layer;
  }

  public place(towerPosition: TowerPosition) {
    if (this.pickedLayer === null) {
      throw new Error("Pickup a layer first");
    }

    const tower = this.towers[towerPosition];
    tower.placeLayer(this.pickedLayer);
    this.pickedLayer = null;
  }
}
