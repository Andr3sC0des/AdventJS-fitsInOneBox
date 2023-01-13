function fitsInOneBox (boxes) {
  let result = true
  boxes.sort((a, b, c) => { return (a.l * a.w * a.h) - (b.l * b.w * a.h) })
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i - 1].l < boxes[i].l && boxes[i - 1].w < boxes[i].w && boxes[i - 1].h < boxes[i].h) {
      result = true * result
    } else {
      result = false * result
    }
  }

  return !!result
}

module.exports = { fitsInOneBox }
