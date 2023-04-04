// https://leetcode.com/problems/remove-duplicates-from-sorted-list

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// two pointers method
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	let dummy = new ListNode(head.val);
	let tail = dummy;

	while (head.next) {
		if (head.val !== head.next.val) {
			tail.next = new ListNode(head.next.val);
			tail = tail.next;
		}
		head = head.next;
	}

	return dummy;
}

// two pointer second
function deleteDuplicates2(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	let prev: ListNode = head;
	let curr: ListNode = head.next;

	while (curr && curr.next) {
		if (prev.val === curr.val) {
			prev.next = curr.next;
		} else {
			prev = curr;
		}
		curr = curr.next;
	}
	return head;
}

// one pointer method
function deleteDuplicates3(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	let current = head;
	while (current && current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	return head;
}

