import assert from "node:assert/strict";
import { test } from "node:test";
import { smallestMultiple } from "./5-smallest-multiple.mjs";

test("smallestMultiple(5) should return a number.", () => {
	const result = smallestMultiple(5);
	assert.equal(typeof result, "number");
});

test("smallestMultiple(5) should return 60.", () => {
	const result = smallestMultiple(5);
	assert.equal(result, 60);
});

test("smallestMultiple(7) should return 420.", () => {
	const result = smallestMultiple(7);
	assert.equal(result, 420);
});

test("smallestMultiple(10) should return 2520.", () => {
	const result = smallestMultiple(10);
	assert.equal(result, 2520);
});

test("smallestMultiple(13) should return 360360.", () => {
	const result = smallestMultiple(13);
	assert.equal(result, 360360);
});

test("smallestMultiple(20) should return 232792560.", () => {
	const result = smallestMultiple(20);
	assert.equal(result, 232792560);
});
