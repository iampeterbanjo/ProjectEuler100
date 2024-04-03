import { equal } from "node:assert/strict";
import { skip, test } from "node:test";

import {
	squareSum,
	sumSquareDifference,
	sumSquares,
} from "./6-sum-square-difference.mjs";

test("sumSquares(10) should return 385", () => {
	const result = sumSquares(10);
	equal(result, 385);
});

test("squareSum(10) should return 3025", () => {
	const result = squareSum(10);
	equal(result, 3025);
});

test("sumSquareDifference(10) should return a number", () => {
	const result = sumSquareDifference(10);
	equal(typeof result, "number");
});

test("sumSquareDifference(10) should return 2640", () => {
	const result = sumSquareDifference(10);
	equal(result, 2640);
});

test("sumSquareDifference(20) should return 41230", () => {
	const result = sumSquareDifference(20);
	equal(result, 41230);
});

test("sumSquareDifference(100) should return 25164150", () => {
	const result = sumSquareDifference(100);
	equal(result, 25164150);
});
