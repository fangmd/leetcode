// 数组实现栈结构

var MyStack = function () {
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.queue.length === 0) return null
  let last = this.queue[this.queue.length - 1]
  this.queue.splice(this.queue.length - 1, 1) // remove last
  return last
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.queue.length === 0) return null
  let last = this.queue[this.queue.length - 1]
  return last
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
