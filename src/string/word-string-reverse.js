// @format
// 给定一个字符串，反转字符串中每个单词的顺序
// 而保留空格和单词的初始顺序
// 注意：在字符串中，每个单词由单个空格分隔，
// 并且字符串中不会由任何额外的空格。

/**
 * @param {string} souStr
 */
export default souStr => {
  let getArr = souStr.split(" ");

  /**
   * @param {string} str
   */
  function strRev(str) {
    return str.split("").reverse().join("");
  }
  for (let i = 0; i < getArr.length; i++) {
    getArr[i] = strRev(getArr[i]);
  }

  return getArr.join(" ");
};
