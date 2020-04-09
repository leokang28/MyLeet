/**
 * An image is represented by a 2-D array of integers, each integer representing the pixel
 * value of the image (from 0 to 65535).
 * 
 * Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill,
 * and a pixel value newColor, "flood fill" the image.
 * 
 * To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to
 * the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally
 * to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all
 * of the aforementioned pixels with the newColor.
 * 
 * At the end, return the modified image.
 */

var floodFill = function (image, sr, sc, newColor) {
  const originColor = image[sr][sc]
  const set = new Set()
  help(image, sr, sc, newColor, set, originColor)
  return image
};

function help(image, sr, sc, newColor, hash, originColor) {
  // already did
  if (hash.has(`${sr},${sc}`)) return

  //out of range
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length) return

  // draw and record
  if (image[sr][sc] === originColor) {
    image[sr][sc] = newColor
    hash.add(`${sr},${sc}`)

    // draw neighbors point 
    help(image, sr + 1, sc, newColor, hash, originColor)
    help(image, sr - 1, sc, newColor, hash, originColor)
    help(image, sr, sc + 1, newColor, hash, originColor)
    help(image, sr, sc - 1, newColor, hash, originColor)
  }

}