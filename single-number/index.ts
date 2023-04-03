// https://leetcode.com/problems/single-number

function singleNumber(nums: number[]): number {
	const twiceNumbers: { [key: number]: number } = {};
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		if (curr in twiceNumbers) {
			twiceNumbers[curr] += 1;
		} else {
			twiceNumbers[curr] = 1;
		}
	}

	for (const [key, value] of Object.entries(twiceNumbers)) {
		if (value < 2) {
			return +key;
		}
	}

	return NaN
}
