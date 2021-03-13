/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.base = 769;
  this.data = new Array(this.base).fill(0).map(() => new Array())
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const hashKey = this.hash(key);
  const data = this.data[hashKey];
  if (data.indexOf(key) === -1) {
    data.push(key)
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const hashKey = this.hash(key);
  const data = this.data[hashKey];
  const keyIndex = data.indexOf(key);
  if (keyIndex !== -1) {
    data.splice(keyIndex, 1)
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const hashKey = this.hash(key);
  const data = this.data[hashKey];
  const keyIndex = data.indexOf(key);
  return keyIndex !== -1
};

MyHashSet.prototype.hash = function(key) {
  return key % this.base;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

