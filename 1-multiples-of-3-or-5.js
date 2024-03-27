/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 */
function multiplesOf3Or5(number) {
	// check number is multiple of 3 or 5
	const isValidMultiple = (number) => number % 3 === 0 || number % 5 === 0;

	let sum = 0;
	let count = 0;
	while (count < number) {
		if (isValidMultiple(count)) {
			sum += count;
		}
		count++;
	}
	return sum;
}

multiplesOf3Or5(1000);
