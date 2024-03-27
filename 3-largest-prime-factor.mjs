/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
 */

export const largestPrimeFactor = (number) => {
	// check if a number is prime
	const isPrime = (maybe) => {
		if (maybe < 2) return false;
		for (let i = 2; i <= Math.sqrt(maybe); i++) {
			if (maybe % i === 0) {
				return false;
			}
		}
		return true;
	};

	let largestPrime = 1;
	let currentFactor = 2;
	let remainingNumber = number;

	while (remainingNumber > 1) {
		if (remainingNumber % currentFactor === 0) {
			largestPrime = currentFactor;
			remainingNumber /= currentFactor;
		} else {
			currentFactor++;
		}
	}

	return largestPrime;
};
