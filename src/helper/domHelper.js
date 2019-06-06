export function getCoordsOfTowRects({ container, element, delta }) {
  const cHeight = container.offsetHeight;
  const cWidth = container.offsetWidth;
  const imgHeight = element.offsetHeight;
  const imgWidth = element.offsetWidth;
  const imgLeft = element.offsetLeft;
  const imgTop = element.offsetTop;

  const rect1 = [
    [imgLeft, imgTop],
    [imgLeft + imgWidth, imgTop],
    [imgLeft + imgWidth, imgTop + imgHeight],
    [imgLeft, imgTop + imgHeight]
  ];

  const DELTA = delta || 1;
  const rect2 = [
    [0 + DELTA, 0 + DELTA],
    [cWidth - DELTA, 0 + DELTA],
    [cWidth - DELTA, cHeight - DELTA],
    [0 + DELTA, cHeight - DELTA]
  ];

  return { rect1, rect2 };
}

export const $ = (...args) => document.querySelector(...args);
