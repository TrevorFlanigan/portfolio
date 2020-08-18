/**
 *
 * @param {boolean} inViewport taken from this.props, is component in viewport
 * @param {Number} enterCount the number of times the component has entered the viewport
 * @param {Object} staticStyle styling that the element will always have
 * @param {string | Object} after contains transition and final state of animated styles
 * @param {Object} before contains initial states of animated styles
 */
let getStyle = (
  inViewport,
  enterCount,
  staticStyle = {},
  after = { WebkitTransition: "opacity 0.75s ease-in-out" },
  before = { WebkitTransition: "none", opacity: "0" },
  big = true
) => {
  //Fade in only the first time we enter the viewport
  if (typeof after === "object") {
  }
  if (typeof after === "string") {
    return getDefaultStyle(inViewport, enterCount, staticStyle, after, big);
  }
  if (inViewport && enterCount === 1) {
    return { ...staticStyle, ...after };
  } else if (!inViewport && enterCount < 1) {
    return { ...staticStyle, ...before };
  } else {
    return staticStyle;
  }
};

/**
 * @param {boolean} inViewport taken from this.props, is component in viewport
 * @param {Number} enterCount the number of times the component has entered the viewport
 * @param {Object} staticStyle styling that the element will always have
 * @param {"slideleft"|String} animationName the name of the default animation to use
 *
 */
var getDefaultStyle = (
  inViewport,
  enterCount,
  staticStyle,
  animationName = "",
  big
) => {
  let afterStyle = { transition: staticStyle["transition"] };
  let beforeStyle = {};
  let travelDist = "1em";
  let updateStyle = (style, key, toAdd) => {
    if (!(key in style)) {
      style[key] = toAdd;
    } else {
      if (key === "transition") {
        if (!style[key].includes(toAdd.split(" ")[0]))
          style[key] += ", " + toAdd;
      } else style[key] += " " + toAdd;
    }
  };
  if (big) {
  }
  if (animationName.toLowerCase().includes("slideleft")) {
    updateStyle(afterStyle, "transform", "translateX(0em)");
    updateStyle(
      afterStyle,
      "transition",
      "transform 2s 0.25s cubic-bezier(0, 1, 0.3, 1)"
    );
    updateStyle(beforeStyle, "transform", `translateX(-${travelDist})`);
  }

  if (animationName.toLowerCase().includes("slideright")) {
    updateStyle(afterStyle, "transform", "translateX(0em)");
    updateStyle(
      afterStyle,
      "transition",
      "transform 2s 0.25s cubic-bezier(0, 1, 0.3, 1)"
    );
    updateStyle(beforeStyle, "transform", `translateX(${travelDist})`);
  }

  if (animationName.toLowerCase().includes("slideup")) {
    updateStyle(afterStyle, "transform", "translateY(0em)");
    updateStyle(
      afterStyle,
      "transition",
      "transform 2s 0.25s cubic-bezier(0, 1, 0.3, 1)"
    );
    updateStyle(beforeStyle, "transform", `translateY(-${travelDist})`);
  }

  if (animationName.toLowerCase().includes("slidedown")) {
    updateStyle(afterStyle, "transform", "translateY(0em)");
    updateStyle(
      afterStyle,
      "transition",
      "transform 2s 0.25s cubic-bezier(0, 1, 0.3, 1)"
    );
    updateStyle(beforeStyle, "transform", `translateY(${travelDist})`);
  }

  if (animationName.toLowerCase().includes("fadein")) {
    /* BEFORE STYLE */
    updateStyle(beforeStyle, "opacity", "0");
    /* AFTER STYLE */
    updateStyle(afterStyle, "opacity", "1");
    updateStyle(afterStyle, "transition", "opacity 0.4s 0.25s ease-out");
  }

  return getStyle(inViewport, enterCount, staticStyle, afterStyle, beforeStyle);
};

export default getStyle;
