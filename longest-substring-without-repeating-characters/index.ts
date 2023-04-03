// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	let windowStart = 0;
	const charMap: { [key: string]: number } = {};

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		const currentChar = s[windowEnd];
		if (currentChar in charMap && charMap[currentChar] >= windowStart) {
			windowStart = charMap[currentChar] + 1;
		}
		charMap[currentChar] = windowEnd;
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}

	return maxLength;
}
