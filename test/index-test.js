describe('#largestSubarraySum', function() {
	it('return largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})

	it('returns largest subarray sum', function(){
		let array = [-2, -3, 4, -1, -2, 1, 5, -3]
		expect(largestSubarraySum(array)).toEqual(7)
	})

	it('returns largest subarray sum', function(){
		let array = [-2, -5, 6, -2, -3, 1, 5, -6]
		expect(largestSubarraySum(array)).toEqual(7)
	})

	it('returns largest subarray sum', function(){
		let array = [2, 1, -3, 4, -1, 2, 1, -5, 4]
		expect(largestSubarraySum(array)).toEqual(6)
	})
});
