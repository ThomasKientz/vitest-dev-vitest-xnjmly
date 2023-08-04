import { assert, describe, expect, it } from "vitest";
import { fetchFromProxy, fetchFromUrl } from "../api";

describe("fetch", () => {
  it("from url", async () => {
    const data = await fetchFromUrl();
    expect(data).toBeDefined();
  });

  it("from proxy", async () => {
    const data = await fetchFromProxy();
    expect(data).toBeDefined();
  });
});
