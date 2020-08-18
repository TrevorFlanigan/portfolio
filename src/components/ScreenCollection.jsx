import React, { Component } from "react";
import Slider from "./Slider";
import handleViewport from "react-in-viewport";

class ScreenCollectionBlock extends Component {
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
          options={{
            // wrapAround: true,
            friction: 0.5,
            accessibility: true,
            pageDots: false,
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

const ScreenCollection = handleViewport(ScreenCollectionBlock);
export default ScreenCollection;
