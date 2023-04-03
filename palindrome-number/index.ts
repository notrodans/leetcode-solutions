// https://leetcode.com/problems/palindrome-number

function isPalindrome(x: number): boolean {
	if (+String(x).split("").reverse().join("") === x) {
		return true;
	} else {
		return false;
	}
}
