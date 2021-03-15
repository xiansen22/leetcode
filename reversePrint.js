/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  const list = [];
  let nextNode = head;
  while(nextNode) {
    list.unshift(nextNode.val);
    nextNode = nextNode.next;
  }
  return list;
};