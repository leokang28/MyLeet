/**
 * There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1,
 * and each room may have some keys to access the next room.
 * 
 * Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in
 * [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
 * 
 * Initially, all the rooms start locked (except for room 0).
 * 
 * You can walk back and forth between rooms freely.
 * 
 * Return true if and only if you can enter every room.
 */

var canVisitAllRooms = function (rooms) {
  if (!rooms || !rooms.length) return false
  const stack = []
  const mem = new Set()
  stack.push(0)
  while (stack.length) {
    const room = stack.pop()
    if (!mem.has(room)) {
      mem.add(room)
      for (const key of rooms[room]) {
        stack.push(key)
      }
    }
  }
  return mem.size === rooms.length
};