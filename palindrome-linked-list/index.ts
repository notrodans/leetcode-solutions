// https://leetcode.com/problems/palindrome-linked-list

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function isPalindrome(head: ListNode | null): boolean {
	let n: ListNode | null = null,
		h = head,
		h2 = head;

	while (h !== null) {
		n = new ListNode(h.val, n);
		h = h.next;
	}

	while (h2 !== null && n !== null) {
		if (h2.val !== n.val) {
			return false;
		}
		h2 = h2.next;
		n = n.next;
	}

	return true;
}

function isPalindrome2(head: ListNode | null): boolean {
	if (!head || !head.next) {
		return true;
	}
	let fast: ListNode | null = head,
		slow: ListNode | null = head,
		prev: ListNode | null = null;

	while (fast && fast.next) {
		fast = fast.next.next;
		const next = slow!.next;
		slow!.next = prev;
		prev = slow;
		slow = next;
	}

	if (fast) {
		slow = slow!.next;
	}

	while (prev && slow) {
		if (prev.val !== slow.val) {
			return false;
		}
		prev = prev.next;
		slow = slow.next;
	}

	return true;
}

function isPalindrome3(head: ListNode | null): boolean {
	// Инициализируем две переменные, указывающие на начало списка
	let slow: ListNode | null = head;
	let fast: ListNode | null = head;

	// Находим середину списка с помощью быстрого и медленного указателей
	while (fast && fast.next) {
		slow = slow!.next;
		fast = fast.next.next;
	}

	// Переворачиваем вторую половину списка
	let prev: ListNode | null = null;
	while (slow) {
		const next = slow.next;
		slow.next = prev;
		prev = slow;
		slow = next;
	}

	// Сравниваем элементы двух частей списка
	let p1 = head;
	let p2 = prev;
	while (p2) {
		if (p1!.val !== p2.val) {
			return false;
		}
		p1 = p1!.next;
		p2 = p2.next;
	}

	return true;
}
