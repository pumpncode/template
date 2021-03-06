/* eslint import/no-extraneous-dependencies: off */
/* eslint import/no-unused-modules: off*/

import {
	dirname,
	resolve
} from "path";
import {
	fileURLToPath
} from "url";
import {
	promises
} from "fs";

import {
	build,
	formats
} from "documentation";
import fromMarkdown from "mdast-util-from-markdown";
import toMarkdown from "mdast-util-to-markdown";
import remark from "remark";
import retext from "remark-retext";
import reporter from "vfile-reporter-pretty";

import {
	sliceLineColumn
} from "./utilities.js";
import {
	createTextProcessor
} from "./construct/processor.js";

const {
	readFile,
	writeFile
} = promises;

const {
	md
} = formats;

const modulePath = fileURLToPath(import.meta.url);

const moduleFolder = dirname(modulePath);

const usageSectionPath = resolve(moduleFolder, "./en/readme/03-usage.md");

const usageSection = await readFile(usageSectionPath, "utf8");

const usageTree = fromMarkdown(usageSection);

const apiComments = await build([resolve(moduleFolder, "../source/index.js")], {
	babel: resolve(moduleFolder, "../babel.config.cjs"),
	config: resolve(moduleFolder, "../documentation.yml"),
	format: "md"
});

const textProcessor = createTextProcessor({
	language: "en"
});

const lintProcessor = remark()
	.use(
		retext,
		textProcessor
	);

for (const apiComment of apiComments) {
	const {
		context: {
			file: path
		},
		loc: {
			start,
			start: {
				line: startLine
			},
			end
		}
	} = apiComment;

	const source = await readFile(path, "utf8");

	const comment = sliceLineColumn(source, start, end);

	const result = await lintProcessor
		.process({
			contents: `${"\n".repeat(startLine - 1)}${comment}`,
			path
		});

	const report = reporter([result]);

	if (report.length > 0) {
		console.error(report);
	}
}

const apiMarkdown = await md(apiComments);

const apiTree = fromMarkdown(apiMarkdown);

let {
	children: usageChildren
} = usageTree;

const {
	children: apiChildren
} = apiTree;

for (
	const [
		index,
		{
			type,
			value
		}
	]
	of
	usageChildren.entries()
) {
	if (type === "html" && value.startsWith("<!-- Generated by documentation.js")) {
		usageChildren = usageChildren.slice(0, index);

		break;
	}
}

const newTree = {
	...usageTree,
	children: [...usageChildren, ...apiChildren]
};

const newMarkdown = toMarkdown(newTree);

await writeFile(usageSectionPath, newMarkdown);
