import { assertArrayIncludes, assertEquals } from "../deps.ts";
import { arbitrary, collect_variables } from "../src/utils.ts";

Deno.test({
  name: "arbitrary returns string from array",
  fn: () => {
    const z = arbitrary(["x", "y", "z"]);
    assertArrayIncludes(["x", "y", "z"], z);
  },
});

Deno.test({
  name:
    "collect_vars returns list of correct vars in expression with relational operators",
  fn: () => {
    let vars = collect_variables("x = y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x != y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x == y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x <= y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x >= y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x > y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x < y");
    assertEquals(["x", "y"], vars);
  },
});

Deno.test({
  name:
    "collect_vars returns list of correct vars in expression with logical operators",
  fn: () => {
    let vars = collect_variables("x ! y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x && y");
    assertEquals(["x", "y"], vars);

    vars = collect_variables("x || y");
    assertEquals(["x", "y"], vars);
  },
});
const a = {
  "hans": "asd",
  "asd": "em",
  "peter": "a",
};
Object.keys(a);
const c = new Set(["asd", "peter", "hans", "lol"]);
console.log(Array.from(c).filter((val) => !(Object.keys(a).includes(val))));
