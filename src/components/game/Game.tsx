import * as React from "react";

import randomColor from "random-color";

import { Game as GameEngine, TowerPosition } from "../../engine/game";
import { Layer } from "../layer/Layer";
import { Tower } from "../tower/Tower";

import "./game.css";

interface IState {
  color: {};
  error: string | null;
  game: GameEngine;
}

export class Game extends React.Component<{}, IState> {
  public state = {
    color: [],
    error: "",
    game: new GameEngine()
  };

  public componentDidMount() {
    const { leftTower, centerTower, rightTower } = this.state.game;

    // Generate a colormap so the colors stay consistend during the game
    const colorMap = [leftTower, centerTower, rightTower]
      .map(tower => tower.layers)
      .reduce((arr, layers) => arr.concat(layers), [])
      .map(layer => layer.size)
      .reduce(
        (obj, layer) => ({
          ...obj,
          [layer.toString()]: randomColor().hexString()
        }),
        {}
      );

    this.setState({ color: colorMap });
  }

  public handleClick = (tower: TowerPosition) => () => {
    const { game } = this.state;

    // tslint:disable:no-console
    console.log("tower " + tower + " was clicked");

    console.log(
      game.pickedLayer === null
        ? "currently no layer is picked"
        : `Layer of size ${game.pickedLayer.size} is being picked`
    );
    // tslint:enable:no-console

    try {
      if (game.pickedLayer === null) {
        game.pickup(tower);
      } else {
        game.place(tower);
      }

      this.forceUpdate();
      this.setState({ error: null });
    } catch (e) {
      this.setState({ error: e.message });

      // tslint:disable-next-line:no-console
      console.log(e.message);
    }
  };

  public render() {
    const { leftTower, centerTower, rightTower, pickedLayer } = this.state.game;
    const { color, error } = this.state;

    return (
      <div className="game">
        <div className="picked-layer">
          <h4>Picked Layer</h4>
          {pickedLayer ? (
            <Layer size={pickedLayer.size} color={color[pickedLayer.size]} />
          ) : null}
        </div>
        <Tower
          colorMap={color}
          layers={leftTower.layers.map(layer => layer.size)}
          onClick={this.handleClick(TowerPosition.left)}
        />
        <Tower
          colorMap={color}
          layers={centerTower.layers.map(layer => layer.size)}
          onClick={this.handleClick(TowerPosition.center)}
        />
        <Tower
          colorMap={color}
          layers={rightTower.layers.map(layer => layer.size)}
          onClick={this.handleClick(TowerPosition.right)}
        />
        {error && <div className="error">{error}</div>}
      </div>
    );
  }
}
