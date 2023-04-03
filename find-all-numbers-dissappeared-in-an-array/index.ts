// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

function findDisappearedNumbers(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		const index = Math.abs(nums[i]) - 1;
		if (nums[index] > 0) {
			nums[index] = -nums[index];
		}
	}

	const result: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result.push(i + 1);
		}
	}

	return result;
}
