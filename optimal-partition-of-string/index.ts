// https://leetcode.com/problems/optimal-partition-of-string

function partitionString(s: string): number {
	let end = 0;
	let result = 0;
	let charSet: Set<string> = new Set();

	while (end < s.length) {
		const currentChar = s[end];
		if (!charSet.has(currentChar)) {
			charSet.add(currentChar);
			end++;
		} else {
			result++;
			charSet.clear();
		}
	}
	return result + 1;
}

function partitionString2(s: string): number {
	const charSet = new Set<string>();
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i];

		if (charSet.has(currentChar)) {
			count++;
			charSet.clear();
		}

		charSet.add(currentChar);
	}

	if (charSet.size > 0) {
		count++;
	}

	return count;
}
