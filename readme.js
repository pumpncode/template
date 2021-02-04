import fs from "fs";

const {
	promises: {
		readFile,
		writeFile
	}
} = fs;

const readme = await readFile("readme.md", "utf8");

console.log(readme);