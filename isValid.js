/**
 * 题目：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *      有效字符串需满足：
 *      1、左括号必须用相同类型的右括号闭合。
 *      2、左括号必须以正确的顺序闭合。
 * 
 * 示例 1:
 * 输入: "()[]{}"
 * 输出: true
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const list = [];
  const len = s.length;
  const map = {
    start: [ '(', '[', '{' ],
    end: [ ')', ']','}' ]
  }

  if (len < 2) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const item = s[i];
    const obj = {
      value: item,
      type: map.start.indexOf(item) === -1 ? 'end' : 'start'
    }
    list.push(obj);
  }

  let stack = [];
  let topIndex = -1;
  for (let i = 0; i < len; i++) {
    const item = list[i];
    if (item.type === 'start') {
      stack.push(item);
      topIndex += 1;
    }
    if (item.type === 'end') {
      const topItem = stack[topIndex];
      if (topItem && map.start.indexOf(topItem.value) === map.end.indexOf(item.value)) {
        stack.pop();
        topIndex -= 1;
      } else {
        return false;
        break;
      }
    }
  }
  return stack.length === 0;
};

const result = isValid("(){}");
console.log(result);