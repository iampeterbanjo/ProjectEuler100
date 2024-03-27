import assert from "node:assert/strict";
import { test } from "node:test";

import { largestPrimeFactor } from "./3-largest-prime-factor.mjs";

test("largestPrimeFactor(2) should return 2.", () => {
	const result = largestPrimeFactor(2);
	assert.equal(result, 2);
});

test("largestPrimeFactor(3) should return 3.", () => {
	const result = largestPrimeFactor(3);
	assert.equal(result, 3);
});

test("largestPrimeFactor(5) should return 5.", () => {
	const result = largestPrimeFactor(5);
	assert.equal(result, 5);
});

test("largestPrimeFactor(7) should return 7.", () => {
	const result = largestPrimeFactor(7);
	assert.equal(result, 7);
});

test("largestPrimeFactor(8) should return 2.", () => {
	const result = largestPrimeFactor(8);
	assert.equal(result, 2);
});

test("largestPrimeFactor(13195) should return 29.", () => {
	const result = largestPrimeFactor(13195);
	assert.equal(result, 29);
});

test("largestPrimeFactor(600851475143) should return 6857.", () => {
	const result = largestPrimeFactor(600851475143);
	assert.equal(result, 6857);
});
