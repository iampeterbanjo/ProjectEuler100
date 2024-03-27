import { fiboEvenSum } from "./2-even-fibonacci-numbers";

describe("Even fibonacci numbers", () => {
	test("fiboEvenSum(8) should return 10.", () => {
		const result = fiboEvenSum(8);
		assert(result).equals(10);
	});
	test("fiboEvenSum(10) should return 10.", () => {
		const result = fiboEvenSum(10);
		assert(result).equals(10);
	});
	test("fiboEvenSum(34) should return 44.", () => {
		const result = fiboEvenSum(34);
		assert(result).equals(44);
	});
	test("fiboEvenSum(60) should return 44.", () => {
		const result = fiboEvenSum(60);
		assert(result).equals(44);
	});
	test("fiboEvenSum(1000) should return 798.", () => {
		const result = fiboEvenSum(1000);
		assert(result).equals(798);
	});
	test("fiboEvenSum(100000) should return 60696.", () => {
		const result = fiboEvenSum(100000);
		assert(result).equals(60696);
	});
	test("fiboEvenSum(4000000) should return 4613732.", () => {
		const result = fiboEvenSum(4000000);
		assert(result).equals(4613732);
	});
});
