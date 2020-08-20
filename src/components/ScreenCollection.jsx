import React, { Component } from "react";
import Slider from "./Slider";
import handleViewport from "react-in-viewport";

class ScreenCollectionBlock extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.enterCount !== this.props.enterCount &&
      typeof this.props.entered == "function"
    )
      setTimeout(() => {
        this.props.entered(this.props.id);
      }, 400);
  }

  render() {
    return (
      <div
        style={{
          marginTop: this.props.ignoreNav && "50px",
          marginBottom: this.props.ignoreNav && "-50px",
        }}
      >
        <Slider
          onFocus={this.props.onFocus}
          refObj={this.props.refObj}
          id={this.props.id}
          options={{
            friction: 0.5,
            accessibility: true,
            pageDots: false,
            draggable: false,
            prevNextButtons: this.props.children.length,
            hash: true,
          }}
        >
          {this.props.children}
        </Slider>
      </div>
    );
  }
}

const ScreenCollection = handleViewport(ScreenCollectionBlock, {
  rootMargin: "-51px",
});
export default ScreenCollection;
