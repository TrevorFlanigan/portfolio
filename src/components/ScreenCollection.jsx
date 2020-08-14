import React, { Component } from "react";
import Slider from "./Slider";
class ScreenCollection extends Component {
  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child.type.name !== "Screen") return;
      const props = { style: { zIndex: index + 1, position: "absolute" } };
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    });
    return (
      <div
        style={{
          marginTop: this.props.ignoreNav && "50px",
          marginBottom: this.props.ignoreNav && "-50px",
        }}
      >
        <Slider
          ref={this.props.refObj}
          options={{
            wrapAround: true,
            friction: 0.5,
            accessibility: true,
            pageDots: this.props.children.length,
            draggable: false,
            prevNextButtons: this.props.children.length,
          }}
        >
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

export default ScreenCollection;
