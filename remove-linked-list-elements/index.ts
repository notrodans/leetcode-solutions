// https://leetcode.com/problems/remove-linked-list-elements

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
	if (!head || !head.next) {
		return head;
	}

	let result = new ListNode(-1, head);
	let curr = result;

	while (curr.next) {
		if (curr.next.val !== val) {
			curr = curr.next;
		} else {
			curr.next = curr.next.next;
		}
	}
	return result.next;
}
