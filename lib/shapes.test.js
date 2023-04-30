const { Triangle, Circle, Square } = require("./shapes");

describe('Shapes', () => {
    test('Expect triangle to render correctly', () => {
      const triangle = new Triangle('white', 'black', 'Triangle');
      expect(triangle.render()).toContain('<polygon');
    });
  
    test('Expect Circle to render correctly', () => {
      const circle = new Circle('white', 'black', 'Circle');
      expect(circle.render()).toContain('<circle');
    });
  
    test('Expect square to render correctly', () => {
      const square = new Square('white', 'black', 'Square');
      expect(square.render()).toContain('<rect');
    });
});
