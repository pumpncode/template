import test from "ava";

import helloWorld from "../src/index.js";

test("doesn't throw", (t) => {
	t.notThrows(helloWorld);
});
