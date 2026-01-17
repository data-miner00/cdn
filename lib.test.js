import { add, subtract, greet } from "./lib.js";
import assert from "node:assert";
import { test } from "node:test";

test("adds two numbers", () => {
  assert(add(2, 3), 5);
});

test("subtracts two numbers", () => {
  assert(subtract(5, 3), 2);
});

test("greets a person", () => {
  assert(greet("Alice"), "Hello, Alice, from cdn!");
});
