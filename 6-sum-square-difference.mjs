// calculate sum of squares up to "n"
export const sumSquares = (n) => {
	let start = 1;
	let sum = 0;
	while (start <= n) {
		sum += start ** 2;
		start++;
	}
	return sum;
};

// calculate square of sum of numbers up to "n"
export const squareSum = (n) => {
	let start = 1;
	let sum = 0;
	while (start <= n) {
		sum += start;
		start++;
	}
	return sum ** 2;
};

/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/
export const sumSquareDifference = (n) => {
	return squareSum(n) - sumSquares(n);
};
