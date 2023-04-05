// https://leetcode.com/problems/linked-list-cycle

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function hasCycle(head: ListNode | null): boolean {
	if (!head || !head.next) {
		return false;
	}

	let slow = head;
	let fast = head;

	while (fast.next && fast.next.next) {
		slow = slow.next!;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}

	return false;
}
