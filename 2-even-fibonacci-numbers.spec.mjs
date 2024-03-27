import assert from "node:assert/strict";
import { test } from "node:test";

import { fiboEvenSum } from "./2-even-fibonacci-numbers.mjs";

test("fiboEvenSum(8) should return 10.", () => {
	const result = fiboEvenSum(8);
	assert.equal(result, 10);
});

test("fiboEvenSum(10) should return 10.", () => {
	const result = fiboEvenSum(10);
	assert.equal(result, 10);
});

test("fiboEvenSum(34) should return 44.", () => {
	const result = fiboEvenSum(34);
	assert.equal(result, 44);
});

test("fiboEvenSum(60) should return 44.", () => {
	const result = fiboEvenSum(60);
	assert.equal(result, 44);
});

test("fiboEvenSum(1000) should return 798.", () => {
	const result = fiboEvenSum(1000);
	assert.equal(result, 798);
});

test("fiboEvenSum(100000) should return 60696.", () => {
	const result = fiboEvenSum(100000);
	assert.equal(result, 60696);
});

test("fiboEvenSum(4000000) should return 4613732.", () => {
	const result = fiboEvenSum(4000000);
	assert.equal(result, 4613732);
});
