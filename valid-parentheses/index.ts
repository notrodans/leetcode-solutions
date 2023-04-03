// https://leetcode.com/problems/valid-parentheses

function isValid(str: string): boolean {
	const stack: string[] = [];
	const obj = {
		"(": ")",
		"[": "]",
		"{": "}"
	};

	for (let i = 0; i < str.length; i++) {
		const bracket = str[i];
		if (bracket === "(" || bracket === "[" || bracket === "{") {
			stack.push(bracket);
		} else {
			const lastEl = stack.pop();
			if (lastEl) {
				if (bracket !== obj[lastEl]) {
					return false;
				}
			} else {
				return false;
			}
		}
	}
	if (stack.length) {
		return false;
	}
	return true;
}
