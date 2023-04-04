// https://leetcode.com/problems/find-smallest-letter-greater-than-target

function nextGreatestLetter(letters: string[], target: string): string {
	let left = 0,
		right = letters.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (letters[middle] > target) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	if (left >= letters.length) {
		return letters[0];
	}
	return letters[left] > target ? letters[left] : letters[0];
}

function nextGreatestLetter2(letters: string[], target: string): string {
	let greaterThanTarget = target;

	for (let i = 0; i < letters.length; i++) {
		const currChar = letters[i];
		if (currChar > greaterThanTarget && currChar !== target) {
			greaterThanTarget = currChar;
			break;
		}
	}
	return greaterThanTarget > target ? greaterThanTarget : letters[0];
}
