/**
 * 题目：
 * 
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  return this;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode();
  let preHead = list;

  while(l1 || l2) {
    if (l1 === null && l2) {
      preHead.next = l2;
      preHead = preHead.next;
      break;
    }
    if (l2 === null && l1) {
      preHead.next = l1;
      preHead = preHead.next;
      break;
    }
    if (l1.val <= l2.val) {
      preHead.next = l1;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      preHead.next = l2;
      l2 = l2.next;
    }
    preHead = preHead.next;
  }
  list = list.next;
  return list;
};

//1->2->4
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

const result = mergeTwoLists(l1, l2);
console.log(JSON.stringify(result));