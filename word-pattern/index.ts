// https://leetcode.com/problems/word-pattern

function wordPattern(pattern: string, s: string): boolean {
	const words = s.split(" ");
	if (pattern.length !== words.length) {
		return false;
	}

	const patternMap: { [key: string]: string } = {};
	const usedWords = new Set<string>();

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];
		const word = words[i];

		if (patternMap[char]) {
			if (patternMap[char] !== word) {
				return false;
			}
		} else {
			if (usedWords.has(word)) {
				return false;
			}
			patternMap[char] = word;
			usedWords.add(word);
		}
	}

	return true;
}
