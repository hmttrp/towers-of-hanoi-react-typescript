import * as React from "react";

interface IProps {
  visible: boolean;
}

const DescriptionContent = () => (
  <>
    <p>
      The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower[1] and
      sometimes pluralized) is a mathematical game or puzzle. It consists of
      three rods and a number of disks of different sizes, which can slide onto
      any rod. The puzzle starts with the disks in a neat stack in ascending
      order of size on one rod, the smallest at the top, thus making a conical
      shape.
    </p>
    <p>
      The objective of the puzzle is to move the entire stack to another rod,
      obeying the following simple rules:
    </p>
    <ol>
      <li>Only one disk can be moved at a time. </li>
      <li>
        Each move consists of taking the upper disk from one of the stacks and
        placing it on top of another stack or on an empty rod.
      </li>
      <li>No disk may be placed on top of a smaller disk.</li>
    </ol>
    <p>
      With 3 disks, the puzzle can be solved in 7 moves. The minimal number of
      moves required to solve a Tower of Hanoi puzzle is 2n − 1, where n is the
      number of disks.
    </p>
  </>
);

export class Description extends React.Component<IProps> {
  public render() {
    return this.props.visible ? <DescriptionContent /> : null;
  }
}
