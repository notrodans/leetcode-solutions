// https://leetcode.com/problems/reverse-linked-list

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseListRecursive(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	const reversed = reverseListRecursive(head.next);
	head.next.next = head;
	head.next = null;

	return reversed;
}

function reverseListIteratively(head: ListNode | null): ListNode | null {
	let n: ListNode | null = null,
		h = head;

	while (h !== null) {
		n = new ListNode(h.val, n);
		h = h.next;
	}
	return n;
}
