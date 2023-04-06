// https://leetcode.com/problems/counting-bits

// O(n)
function countBits(n: number): number[] {
	const ans = new Array<number>(n + 1).fill(0);
	for (let i = 1; i <= n; i++) {
		ans[i] = ans[i >> 1] + (i & 1);
	}
	return ans;
}


// O(n log n)
// function countBits(num: number): number[] {
//   const res: number[] = []
//   for(let i = 0; i <= num; i++) {
//     let count = 0;
//     let n = i
//     while(n > 0) {
//       if (n & 1) {
//         count++
//       }

//       n = n >> 1
//     }
//     res.push(count)
//   }
//   return res
// }

// function countBits(n: number): number[] {
//   const res = Array(n + 1).fill(0);
//   let i = 1
//   while (i <= n) {
//     res[i] = res[i >> 1] + (i & 1);
//     ++i
//   }
//   return res;
// }

/*
 * (i & 1) is the same as (i % 2)
 * and
 * (i >> 1) is the same as Math.floor(i / 2)
 * because for bitwise operations this formula
 * i >> 1 === n1 / 2 ** n2
 */
