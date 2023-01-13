function fitsInOneBox (boxes) {
  let result = true
  const array = boxes
  array.sort((a, b, c) => { return (a.l * a.w * a.h) - (b.l * b.w * a.h) })
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1].l < array[i].l && array[i - 1].w < array[i].w && array[i - 1].h < array[i].h) {
      result = true * result
    } else {
      result = false * result
    }
  }

  return !!result
}

module.exports = { fitsInOneBox }
