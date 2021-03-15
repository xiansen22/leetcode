var CQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  const { stackA, stackB } = this;
  if (stackB.length !== 0) {
    return stackB.pop();
  }
  if (stackA.length === 0) {
    return -1;
  }
  if (stackB.length === 0 && stackA.length !== 0) {
    for (let i = 0, len = stackA.length; i < len; i++) {
      stackB.push(stackA.pop());
    }
    return stackB.pop();
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */