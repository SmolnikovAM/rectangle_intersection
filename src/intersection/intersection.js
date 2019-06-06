function getVector(end, start) {
  const [x1, y1] = end;
  const [x2, y2] = start;
  return [x1 - x2, y1 - y2];
}

function getVectorDotProduct(vector1, vector2) {
  const [x1, y1] = vector1;
  const [x2, y2] = vector2;
  return x1 * x2 + y2 * y1;
}

function rotate90Vector(vector) {
  const [x, y] = vector;
  return [-y, x];
}

function getRectProduct(rect, edge, line) {
  return rect.map(point => {
    if (point[0] === edge[0] && point[0] === edge[1]) return 0;
    const line2 = getVector(edge, point);
    return getVectorDotProduct(line2, line);
  });
}

const SIGN_FUNCTIONS = [x => x >= 0, x => x <= 0];

export default function isRectIntersection(rect1, rect2) {
  const vectors = rect1.map((point1, i, rect) => {
    const j = (i + 1) % rect.length;
    const point2 = rect[j];
    const vector = getVector(point1, point2);
    const line = rotate90Vector(vector);
    return { line, edge: point2 };
  });

  return vectors.every(vector => {
    const { line, edge } = vector;
    const [res1, res2] = [rect1, rect2].map(rect =>
      getRectProduct(rect, edge, line)
    );

    const [res1Sign, res2Sign] = [res1, res2].map(res =>
      SIGN_FUNCTIONS.map(f => res.every(f))
    );

    if ((res1Sign[0] && res2Sign[1]) || (res1Sign[1] && res2Sign[0]))
      return false;
    return true;
  });
}
