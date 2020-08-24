function largestSubarraySum(arr){
  let largestSum = 0;
  let sum = arr[0];

  for(let i = 1; i < arr.length; i++){
    sum = Math.max(arr[i], sum + arr[i])
    if(largestSum < sum){
      largestSum = sum;
    }
  }
  return largestSum;
}
