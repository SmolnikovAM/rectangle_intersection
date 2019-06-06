import isRectIntersection from "./intersection";

describe("test rect intersection", () => {
  test("simple two rects", () => {
    const rect1 = [[0, 0], [0, 10], [10, 10], [10, 0]];
    const rect2 = [[5, 5], [5, 10], [20, 20], [20, 5]];
    expect(isRectIntersection(rect1, rect2)).toBe(true);
  });

  test("no intersection", () => {
    const rect1 = [[3, 1], [0, 4], [2, 6], [5, 3]];
    const rect2 = [[4, 5], [4, 8], [7, 8], [7, 5]];
    expect(isRectIntersection(rect1, rect2)).toBe(false);
  });

  test("intersection with one point", () => {
    const rect1 = [[3, 1], [0, 4], [2, 6], [5, 3]];
    const rect2 = [[4, 4], [4, 8], [7, 8], [7, 4]];
    expect(isRectIntersection(rect1, rect2)).toBe(false);
  });

  test("one rect inside another", () => {
    const rect1 = [[2, 2], [2, 7], [10, 7], [10, 2]];
    const rect2 = [[6, 4], [4, 6], [3, 5], [5, 3]];
    expect(isRectIntersection(rect1, rect2)).toBe(true);
    expect(isRectIntersection(rect1, rect2)).toBe(true);
  });

  test("same border", () => {
    const rect1 = [[1, 1], [1, 5], [5, 5], [5, 1]];
    const rect2 = [[5, 1], [5, 5], [10, 5], [10, 1]];
    expect(isRectIntersection(rect1, rect2)).toBe(false);
  });

  test("border interseption", () => {
    const rect1 = [[1, 1], [1, 5], [5, 5], [5, 1]];
    const rect2 = [[4, 1], [4, 5], [10, 5], [10, 1]];
    expect(isRectIntersection(rect1, rect2)).toBe(true);
  });
});
