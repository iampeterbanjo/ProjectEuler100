/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
export const smallestMultiple = (n) => {
	// check number is divisible by range e.g. 1..10
	const isDivisibleByRange = (check) => {
		let count = 1;
		while (count <= n) {
			// 1 <= 3
			if (check % count !== 0) {
				// 6 % 1
				return false;
			}
			count++; // 2
		}
		return true;
	};

	let start = 1;
	let multiple = start;
	// check increasing integers for divisibility
	while (!isDivisibleByRange(start)) {
		start++;
		multiple = start;
	}
	return multiple;
};
