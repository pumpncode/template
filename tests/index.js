import test from "ava";

import helloWorld from "../src/index.js";

test("returns Hello World!", (t) => {
	t.is(helloWorld(), "Hello World!");
});
