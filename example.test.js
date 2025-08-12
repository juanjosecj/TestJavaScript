const suma = require('./suma');

test('la función suma 1 + 2 debe dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('la función suma 5 + 10 debe dar 15', () => {
  expect(suma(5, 10)).toBe(15);
});