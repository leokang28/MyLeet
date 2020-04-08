/**
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10
 * slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely
 * and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
 *
 * The lock initially starts at '0000', a string representing the state of the 4 wheels.
 *
 * You are given a list of deadends dead ends, meaning if the lock displays any of these codes,
 * the wheels of the lock will stop turning and you will be unable to open it.
 *
 * Given a target representing the value of the wheels that will unlock the lock, return the minimum
 * total number of turns required to open the lock, or -1 if it is impossible.
 */

const NOT_FOUND = -1

var openLock = function (deadends, target) {
  const queue = []
  const deads = new Set(deadends)
  const set = new Set()
  let step = 0
  queue.push('0000')
  console.time('openlock')
  while (queue.length) {
    const length = queue.length
    let i = 0
    for (i; i < length; i++) {
      const pwd = queue.shift()
      if (pwd === target) {
        console.timeEnd('openlock')
        return step
      }
      if (!deads.has(pwd) && !set.has(pwd)) {
        queue.push(...genAdjacentPwd(pwd.split('').map(digit => parseInt(digit))))
        set.add(pwd)
      }
    }
    step++
  }
  console.timeEnd('openlock')
  return NOT_FOUND
};

var openLock1 = function (deadends, target) {
  const deads = new Set(deadends)
  let step = 0
  let begin = new Set()
  let end = new Set()
  begin.add('0000')
  end.add(target)
  console.time('openlock')
  while (begin.size && end.size) {
    let temp = new Set()
    for (const key of begin.keys()) {
      if (end.has(key)) {
        console.timeEnd('openlock')
        return step
      }
      if (deads.has(key)) {
        continue
      }
      deads.add(key)
      for (const k of genAdjacentPwd(key.split('').map(digit => parseInt(digit)))) {
        if (!deads.has(k)) temp.add(k)
      }
    }
    step++
    begin = end
    end = temp
  }
  console.timeEnd('openlock')
  return NOT_FOUND
};

function genAdjacentPwd(pwd) {
  const pwds = []
  for (i = 0; i < pwd.length; i++) {
    let copy = Array.from(pwd)
    if (copy[i] === 9) {
      copy[i] = 0
    } else {
      copy[i]++
    }
    pwds.push(copy.join(''))

    copy = Array.from(pwd)
    if (copy[i] === 0) {
      copy[i] = 9
    } else {
      copy[i]--
    }
    pwds.push(copy.join(''))
  }
  return pwds
}

console.log(genAdjacentPwd('0000'.split('').map(ele => parseInt(ele))))

console.log(openLock1(["0201", "0101", "0102", "1212", "2002"], "0202"))