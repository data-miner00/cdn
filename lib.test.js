import { add } from "./lib.js";
import assert from "node:assert";
import { test } from "node:test";

test("adds two numbers", () => {
  assert(add(2, 3), 5);
});
