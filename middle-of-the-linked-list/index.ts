// https://leetcode.com/problems/linked-list-cycle

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function middleNode(head: ListNode | null): ListNode | null {
	let end = head;
	let middle = head;

	while (end && end.next) {
		middle = middle?.next!;
		end = end.next.next;
	}

	return middle;
}
