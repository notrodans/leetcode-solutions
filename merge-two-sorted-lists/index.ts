// https://leetcode.com/problems/merge-two-sorted-lists

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let dummy = new ListNode(0);
	let curr = dummy;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			curr.next = l1;
			l1 = l1.next;
		} else {
			curr.next = l2;
			l2 = l2.next;
		}
		curr = curr.next;
	}

	if (l1) {
		curr.next = l1;
	} else if (l2) {
		curr.next = l2;
	}

	return dummy.next;
}
