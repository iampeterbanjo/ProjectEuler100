import assert from "node:assert/strict";
import { test } from "node:test";

import {
	isPalindrome,
	largestPalindromeProduct,
} from "./4-largest-palindrome-product.mjs";

test("isPalindrome(909) should return true", () => {
	const result = isPalindrome(909);
	assert.equal(result, true);
});

test("isPalindrome(123) should return false", () => {
	const result = isPalindrome(123);
	assert.equal(result, false);
});

test("isPalindrome(11011) should return true", () => {
	const result = isPalindrome(110011);
	assert.equal(result, true);
});

test("isPalindrome(906609) should return true", () => {
	const result = isPalindrome(906609);
	assert.equal(result, true);
});

test("largestPalindromeProduct(2) should return a number.", () => {
	const result = largestPalindromeProduct(2);
	assert.equal(typeof result, "number");
});

test("largestPalindromeProduct(2) should return 9009.", () => {
	const result = largestPalindromeProduct(2);
	assert.equal(result, 9009);
});

test("largestPalindromeProduct(3) should return 906609.", () => {
	const result = largestPalindromeProduct(3);
	assert.equal(result, 906609);
});
