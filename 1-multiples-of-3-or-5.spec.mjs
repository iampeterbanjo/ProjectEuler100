import { multiplesOf3Or5 } from "./1-Multiples-of-3-or-5";

describe("Multiples of 3 or 5", () => {
	test("multiplesOf3Or5(10) should return a number.", () => {
		const result = multiplesOf3Or5(10);
		assert(multiplesOf3Or5(10)).equals(isNumber(10));
	});
	test("multiplesOf3Or5(49) should return 543.", () => {
		const result = multiplesOf3Or5(49);
		assert(multiplesOf3Or5(10)).equals(isNumber(543));
	});
	test("multiplesOf3Or5(1000) should return 233168.", () => {
		const result = multiplesOf3Or5(1000);
		assert(result).equals(233168);
	});
	test("multiplesOf3Or5(8456) should return 16687353.", () => {
		const result = multiplesOf3Or5(1000);
		assert(result).equals(16687353);
	});
	test("multiplesOf3Or5(19564) should return 89301183.", () => {
		const result = multiplesOf3Or5(1000);
		assert(result).equals(89301183);
	});
});
