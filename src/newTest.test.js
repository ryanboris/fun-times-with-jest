const add = (x, y) => x + y
const mock = jest.fn(() => add(2, 3))

test('add', () => {
  expect(mock(2, 3)).toBe(5)
  expect(mock).toHaveBeenCalledTimes(1)
  expect(mock).toHaveBeenCalledWith(2, 3)
})

const returnTwo = jest.fn(() => 2)

test('returnTwo', () => {
  expect(returnTwo()).toBe(2)
  expect(returnTwo).toHaveBeenCalledWith()
})
