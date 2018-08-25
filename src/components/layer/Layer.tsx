import * as React from "react";

interface IProps {
  size: number;
  color: string;
}

export class Layer extends React.Component<IProps> {
  public render() {
    const width = this.props.size * 5;

    return (
      <div
        className="layer"
        style={{
          backgroundColor: this.props.color,
          content: " ",
          height: "5vh",
          width: width + "vh"
        }}
      >
        {" "}
      </div>
    );
  }
}
