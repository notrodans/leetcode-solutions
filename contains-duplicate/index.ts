// https://leetcode.com/problems/contains-duplicate

function containsDuplicate(nums: number[]): boolean {
	const arr: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const currentEl = nums[i];
		!arr.includes(currentEl) && arr.push(currentEl);
	}

	return arr.length !== nums.length;
}
