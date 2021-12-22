const _mergeArrays = (a, b) => {
 const c = []

 while (a.length && b.length) {
   c.push(a[0] > b[0] ? b.shift() : a.shift())
 }

 while (a.length) {
   c.push(a.shift())
 }
 while (b.length) {
   c.push(b.shift())
 }

 return c
}

const mergeSort = (a) => {
  console.log(a)
 if (a.length < 2) return a
 const middle = Math.floor(a.length / 2)
 const a_l = a.slice(0, middle)
 const a_r = a.slice(middle, a.length)
 const sorted_l = mergeSort(a_l)
 const sorted_r = mergeSort(a_r)
 return _mergeArrays(sorted_l, sorted_r)
}

var sorted = mergeSort([75, 53, 82, 46, 11, 93, 5, 25, 34, 75, 74, 71, 51, 74, 69, 7, 50, 39, 24, 24, 14, 0, 91, 1, 12, 34, 90, 98, 68, 37, 34, 40, 56, 6, 46, 52, 36, 86, 0, 32, 91, 85, 36, 58, 16, 39, 70, 15, 65, 23, 89, 86, 32, 47, 26, 84, 32, 40, 92, 33, 15, 15, 35, 3, 26, 42, 0, 63, 27, 0, 35, 92, 62, 56, 48, 0, 57, 58, 47, 34, 25, 87, 89, 19, 64, 93, 96, 62, 9, 10, 70, 91, 42, 76, 30, 0, 16, 31, 21, 6])

console.log(sorted)