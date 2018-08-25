import * as React from "react";
import { Layer } from "../layer/Layer";

import "./tower.css";

interface IProps {
  colorMap: {};
  layers: number[];
  onClick(): void;
}

export class Tower extends React.Component<IProps> {
  public handleClick = () => {
    this.props.onClick();
  };

  public render() {
    return (
      <div className="tower" onClick={this.handleClick}>
        <div className="baseline" />
        {this.props.layers.map(layer => (
          <Layer
            key={layer}
            size={layer}
            color={this.props.colorMap[layer.toString()]}
          />
        ))}
      </div>
    );
  }
}
