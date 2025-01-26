const sum = require('./index');

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});
