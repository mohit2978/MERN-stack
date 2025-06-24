import { sum } from "../sum.js";
import {describe,it,expect} from "vitest";
import "@testing-library/jest-dom/vitest"

describe("Sum function should caculate the sum of two numbers", () => {
    it('should calculate the sum of two numbers', () => {
        const result = sum(3, 4);

        // Assertion
        expect(result).toBe(7);
    });
});