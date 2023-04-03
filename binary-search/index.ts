// https://leetcode.com/problems/binary-search

function search(nums: number[], target: number): number {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const middle = Math.floor((l + r) / 2);
		if (nums[middle] < target) {
			l = middle + 1;
		} else if (nums[middle] > target) {
			r = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}
