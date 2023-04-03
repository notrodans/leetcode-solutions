// https://leetcode.com/problems/missing-number

function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let expected = 0;
    for (const num of nums) {
        if (num !== expected) {
            return expected;
        }
        expected++;
    }
    return expected;
}
