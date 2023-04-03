// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

function maxProfit(prices: number[]): number {
	if (!prices.length) {
		return 0;
	}
	let result = 0;
	let smallestNum = prices[0];

	for (let i = 1; i < prices.length; i++) {
		const currentPrice = prices[i];
		const potentialProfit = currentPrice - smallestNum;
		if (potentialProfit > result) {
			result = potentialProfit;
		}
		if (currentPrice < smallestNum) {
			smallestNum = currentPrice;
		}
	}

	return result;
}
