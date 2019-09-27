function largestSubarraySum(array) {
  // naive n**2 implementation
  let max = 0;
  for(let start = 0; start < array.length; start++) {
    for (let end = start; end < array.length+1; end++) {
      let subarray = array.slice(start, end)
      let sum = subarray.reduce((memo, item) => memo + item, 0);
      max = Math.max(max, sum);
    }
  }
  return max;
}
