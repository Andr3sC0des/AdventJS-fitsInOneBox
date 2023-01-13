const { fitsInOneBox } = require('./index')

test('Test #01', () => {
  expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])).toBe('boolean')
})

test('Test #02', () => {
  expect(fitsInOneBox([{ l: 1, w: 1, h: 10 }, { l: 3, w: 3, h: 12 }, { l: 2, w: 2, h: 1 }])).toBe(false)
})

test('Test #03', () => {
  expect(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])).toBe(true)
})

test('Test #04', () => {
  expect(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 3, w: 1, h: 3 }])).toBe(false)
})

test('Test #05', () => {
  expect(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2 }])).toBe(false)
})

test('Test #06', () => {
  expect(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 3, w: 3, h: 3 }, { l: 2, w: 2, h: 2 }])).toBe(true)
})
