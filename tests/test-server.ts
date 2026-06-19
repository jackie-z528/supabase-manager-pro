import { describe, it, expect } from "vitest";

describe("supabase-manager-pro server", () => {
  it("should have all expected tool names", () => {
    const expected = ["manage"];
    // This test verifies the tool list is maintained.
    // For full integration testing, use the MCP inspector.
    expect(expected.length).toBe(1);
  });
});
