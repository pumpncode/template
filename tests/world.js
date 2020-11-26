import test from "ava";

import world from "../src/world.js";

test("returns world", (t) => {
	t.is(world(), "world");
});
