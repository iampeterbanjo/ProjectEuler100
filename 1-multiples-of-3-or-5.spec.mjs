import assert from "node:assert/strict";
import { test } from "node:test";

import { multiplesOf3Or5 } from "./1-multiples-of-3-or-5.mjs";

test("multiplesOf3Or5(10) should return a number.", () => {
	const result = multiplesOf3Or5(10);
	assert.equal(typeof result, "number");
});

test("multiplesOf3Or5(49) should return 543.", () => {
	const result = multiplesOf3Or5(49);
	assert.equal(result, 543);
});

test("multiplesOf3Or5(1000) should return 233168.", () => {
	const result = multiplesOf3Or5(1000);
	assert.equal(result, 233168);
});

test("multiplesOf3Or5(8456) should return 16687353.", () => {
	const result = multiplesOf3Or5(8456);
	assert.equal(result, 16687353);
});

test("multiplesOf3Or5(19564) should return 89301183.", () => {
	const result = multiplesOf3Or5(19564);
	assert.equal(result, 89301183);
});
