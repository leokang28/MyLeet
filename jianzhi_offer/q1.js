/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

function Find(target, array) {

  if (!array || !array.length || !array[0].length) return false
  const queue = []
  const set = new Set()

  queue.push([0, 0])
  while (queue.length) {
    const [x, y] = queue.shift()
    console.log(x, y)
    if (array[x][y] === target) {

      return true
    }
    check([x + 1, y], array, set) && queue.push([x + 1, y])
    check([x - 1, y], array, set) && queue.push([x - 1, y])
    check([x, y + 1], array, set) && queue.push([x, y + 1])
    check([x, y - 1], array, set) && queue.push([x, y - 1])
  }
  return false
}

function check(coord, array, set) {
  const [x, y] = coord
  if (x == undefined || y == undefined || x < 0 || y < 0) {
    return false
  }
  if (set.has(`${x}-${y}`)) return false
  if (x >= array.length) return false
  if (y >= array[0].length) return false
  set.add(`${x}-${y}`)
  return true
}

console.log(Find(60,
  [[48, 65, 70, 113, 133, 163, 170, 216, 298, 389], [89, 169, 215, 222, 250, 348, 379, 426, 469, 554], [178, 202, 253, 294, 367, 392, 428, 434, 499, 651], [257, 276, 284, 332, 380, 470, 516, 561, 657, 698], [275, 331, 391, 432, 500, 595, 602, 673, 758, 783], [357, 365, 412, 450, 556, 642, 690, 752, 801, 887], [359, 451, 534, 609, 654, 662, 693, 766, 803, 964], [390, 484, 614, 669, 684, 711, 767, 804, 857, 1055], [400, 515, 683, 732, 812, 834, 880, 930, 1012, 1130], [480, 538, 695, 751, 864, 939, 966, 1027, 1089, 1224]]
))