import * as React from "react";

interface IProps {
  size: number;
  color: string;
}

export const height = 5;
export const heightUnit = "vh";

export class Layer extends React.Component<IProps> {
  public render() {
    const width = this.props.size * 2;

    return (
      <div
        className="layer"
        style={{
          backgroundColor: this.props.color,
          content: " ",
          height: height + heightUnit,
          width: width + "vw"
        }}
      >
        {" "}
      </div>
    );
  }
}
