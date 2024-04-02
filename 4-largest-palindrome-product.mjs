/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/
// check number is palindrome
export const isPalindrome = (number) => {
	let check = String(number);
	let left = 0;
	let right = check.length - 1;
	while (left < right) {
		if (check.charAt(left) !== check.charAt(right)) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

/*
Find the largest palindrome made from the product of two n-digit numbers.
*/
export const largestPalindromeProduct = (number) => {
	let max = Math.pow(10, number) - 1;
	let maxPalindrome = 0;
	// use nested loops to check every combination
	while (max > 1) {
		let factor = max;
		while (factor > 1) {
			const product = Math.max(maxPalindrome, factor * max);
			// skip factors that will result in palindromes
			// that are less than the current max
			if (product <= maxPalindrome) {
				break;
			}
			if (isPalindrome(product)) {
				maxPalindrome = product;
			}
			factor--;
		}
		max--;
	}

	return maxPalindrome;
};
