import test from "ava";

import hello from "../src/hello.js";

test("returns hello", (t) => {
	t.is(hello(), "hello");
});
