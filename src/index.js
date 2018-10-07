module.exports = function longestConsecutiveLength(array) {
  let lengthMax = 1;
  let result = 1;
  let arrSort = array.sort((a, b) => a - b);
  if(array.length == 0) {
    return 0;
  }

  for(let i = 1, len = arrSort.length; i < len; i++) {

    if(arrSort[i] - arrSort[i - 1] == 1) {
      lengthMax++;
    } else if(arrSort[i] - arrSort[i - 1] > 1) {
      result = Math.max(result, lengthMax);
      lengthMax = 1;
    }
  } 
  return result;
}
