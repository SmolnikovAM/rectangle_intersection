import "./style/subjx.css";
import draggableTestImageFile from "./images/test.jpg";
import defaultImageFile from "./images/boxes/first.png";
import "./lib/subjx";

import { $, getCoordsOfTowRects } from "./helper/domHelper";
import isRectIntersection from "./intersection/intersection";

const dgImage = $("#test-image");
const defaultImage = $("#default");
const container = $(".container");

dgImage.src = draggableTestImageFile;
defaultImage.src = defaultImageFile;

const CONTAINER_BORDER = 4;

const dragOptions = {
  each: {
    move: true,
    resize: true
  },
  snap: {
    x: 1,
    y: 1
  }
};

function setDefaultSize() {
  const dgControls = $(".dg-controls");
  [dgImage, dgControls].forEach(el => {
    if (!el) return;
    const dgElement = el;
    dgElement.style.left = `${0 + CONTAINER_BORDER}px`;
    dgElement.style.top = `${0 + CONTAINER_BORDER}px`;
    dgElement.style.height = `${container.offsetHeight -
      2 * CONTAINER_BORDER}px`;
    dgElement.style.width = `${container.offsetWidth - 2 * CONTAINER_BORDER}px`;
  });
}

function checkRightPosition() {
  const { rect1, rect2 } = getCoordsOfTowRects({
    container,
    element: dgImage,
    delta: 10
  });
  if (isRectIntersection(rect1, rect2)) return;
  setDefaultSize();
}

window.addEventListener("load", () => {
  const transformBox = window.Subjx(dgImage);
  setDefaultSize();
  transformBox.drag({ ...dragOptions, drop: checkRightPosition });
});

window.addEventListener("resize", () => {
  checkRightPosition();
});
