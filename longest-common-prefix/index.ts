// https://leetcode.com/problems/longest-common-prefix

function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return "";

	for (let i = 0; i < strs[0].length; i++) {
		for (const str of strs) {
			if (str[i] !== strs[0][i]) {
				return str.substring(0, i);
			}
		}
	}
	return strs[0].substring(0, strs[0].length);
}
