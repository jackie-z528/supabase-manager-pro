import { describe, it, expect } from "vitest";
import { manage } from "../src/tools/manage.js";

describe("manage", () => {
  it("should return valid JSON", async () => {
    const result = await manage("test");
    const data = JSON.parse(result);
    expect(data).toBeDefined();
    expect(typeof data).toBe("object");
  });
});
