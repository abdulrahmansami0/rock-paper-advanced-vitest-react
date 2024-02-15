import { describe, expect, it } from "vitest";
import { randomNumber } from "./randomNumber";

describe("randomNumber", () => {
  it("should return a number between 1 and 3", () => {
    const randomNumberGn = randomNumber();
    expect(randomNumberGn).toBeGreaterThanOrEqual(0);
    expect(randomNumberGn).toBeLessThanOrEqual(2);
  });
});
