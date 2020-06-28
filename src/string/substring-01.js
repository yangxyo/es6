export default (souStr) => {
  let re = /(1+0+)|(0+1+)/;
  let result = 0;
  for (let i = 0; i < souStr.length; i++) {
    if (souStr.slice(i).match(re) !== null) {
      result++;
    }
  }
  return result;
};
