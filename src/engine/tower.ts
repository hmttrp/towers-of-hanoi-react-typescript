import { Layer } from "./layer";

export class Tower {
  public layers: Layer[];

  constructor(height: number) {
    this.layers = [];

    for (let i = 0; i < height; i++) {
      const layer = new Layer(height - i);
      this.layers.push(layer);
    }
  }

  public placeLayer(layer: Layer): void {
    const topLayer = this.layers.slice(-1).pop();

    if (topLayer !== undefined && topLayer.size < layer.size) {
      throw new Error("Cannot place bigger layer on smaller one");
    }

    this.layers.push(layer);
  }

  public removeTopLayer(): Layer {
    const topLayer = this.layers.pop();

    if (typeof topLayer === "undefined") {
      throw new Error("There is no top Layer");
    }

    return topLayer;
  }
}
