/**
 * 1.	Replace all the relevant constants and (if needed)
 * 		replace ./media/images/websitelogo.png with a favicon-ish (< 50px) logo
 * 2.	Run `node badges.js` (which adds all these shield references to your readme.md)
 * 3.	Delete this file and ./media/images/websitelogo.png unless you really need them again.
 */
import fs from "fs";

const protocol = "https://";

const githubDomain = "github.com";
const discordDomain = "discord.gg";
const npmDomain = "npmjs.com";
const davidDomain = "david-dm.org";
const nodeJsDomain = "nodejs.org";
const redditDomain = "reddit.com";
const twitterDomain = "twitter.com";
const badgesDomain = "badgen.net";

const githubUser = "pumpncode"; // relevant
const githubProjectName = "template"; // relevant
const githubProject = `${githubUser}/${githubProjectName}`;
const githubPage = `${protocol}${githubDomain}/${githubProject}`;

const discordServerInvite = "WKvpetegZq"; // relevant
const discordPage = `${protocol}${discordDomain}/${discordServerInvite}`;

const npmPackage = "@pumpn/template"; // relevant
const npmPage = `${protocol}${npmDomain}/package/${npmPackage}`;

const websiteDomain = "pumpn.net"; // relevant
const websitePath = "code/projects/template"; // relevant
const websiteUrl = `${protocol}${websiteDomain}/${websitePath}`;

const websiteLogoFilename = "./media/images/websitelogo.png";
const websiteLogoFile = fs.readFileSync(websiteLogoFilename);
const websiteLogo = `data:image/png;base64,${Buffer.from(websiteLogoFile).toString("base64")}`;

const davidPage = `${protocol}${davidDomain}`;
const davidDependenciesPage = `${davidPage}/${githubProject}`;
const davidDevDependenciesPage = `${davidPage}/${githubProject}?type=dev`;
const davidPeerDependenciesPage = `${davidPage}/${githubProject}?type=peer`;

const mainDependency = "eslint"; // relevant (just ignore this if your project isn't using any peer dependencies)
const mainDependencyNpmPage = `${protocol}${npmDomain}/package/${mainDependency}`;
const mainDependencyLogo = `https://simpleicons.now.sh/${mainDependency}/fff`; // relevant (logo name isn't always the same as the name)

const nodeJsPage = `${protocol}${nodeJsDomain}`;

const subreddit = "pumpnuniverse"; // relevant
const subredditPage = `${protocol}${redditDomain}/r/${subreddit}`;

const twitter = "PumpnUniverse"; // relevant
const twitterPage = `${protocol}${twitterDomain}/${twitter}`;

const badges = [
	[
		[
			"stars",
			`github/stars/${githubProject}`,
			`${githubPage}/stargazers`,
			"github"
		],
		[
			"contributors",
			`github/contributors/${githubProject}`,
			`${githubPage}/graphs/contributors`,
			"github"
		],
		[
			"forks",
			`github/forks/${githubProject}`,
			`${githubPage}/network/members`,
			"github"
		],
		[
			"open-issues",
			`github/open-issues/${githubProject}`,
			`${githubPage}/issues?q=is%3Aopen+is%3Aissue`,
			"github"
		],
		[
			"closed-issues",
			`github/closed-issues/${githubProject}`,
			`${githubPage}/issues?q=is%3Aclosed+is%3Aissue`,
			"github"
		],
		[
			"open-prs",
			`github/open-prs/${githubProject}`,
			`${githubPage}/pulls?q=is%3Aopen+is%3Apr`,
			"github",
			"open pull requests"
		],
		[
			"closed-prs",
			`github/closed-prs/${githubProject}`,
			`${githubPage}/pulls?q=is%3Aclosed+is%3Apr`,
			"github",
			"closed pull requests"
		]
	],
	[
		[
			"license",
			`github/license/${githubProject}`,
			`${githubPage}/blob/master/license.md`,
			"github"
		],
		[
			"dependencies",
			`david/dep/${githubProject}`,
			davidDependenciesPage,
			"npm",
			"dependencies"
		],
		[
			"dev-dependencies",
			`david/dev/${githubProject}`,
			davidDevDependenciesPage,
			"npm",
			"devDependencies"
		],
		[
			"peer-dependencies",
			`david/peer/${githubProject}`,
			davidPeerDependenciesPage,
			"npm",
			"peerDependencies"
		]
	],
	[
		[
			"downloads",
			`npm/dm/${npmPackage}`,
			npmPage,
			"npm",
			"downloads"
		],
		[
			"version",
			`npm/v/${npmPackage}`,
			npmPage,
			"npm",
			"version"
		],
		[
			"node",
			`npm/node/${npmPackage}`,
			nodeJsPage,
			"https://simpleicons.now.sh/node-dot-js/fff"
		]
	],
	[
		[
			"reddit",
			"badge/subreddit/subreddit",
			subredditPage,
			"https://simpleicons.now.sh/reddit/fff",
			""
		],
		[
			"twitter",
			"badge/twitter/twitter",
			twitterPage,
			"twitter",
			""
		],
		[
			"discord",
			"badge/discord/discord",
			discordPage,
			"discord",
			""
		]
	],
	[
		[
			"mainDependency",
			`npm/v/${mainDependency}`,
			mainDependencyNpmPage,
			mainDependencyLogo,
			mainDependency
		]
	],
	[
		[
			"website",
			"badge/website/website",
			websiteUrl,
			websiteLogo,
			""
		]
	]
];

const readme = fs.readFileSync("./readme.md", "utf8");

const sections = new Map(
	readme
		.split("<!-- ")
		.slice(1)
		.map(
			(section) => section.split(" -->").map((string) => string.trim())
		)
);

const badgesText = badges
	.map(
		(group) => group
			.map(
				([name]) => `[![${name}][${name}-badge]][${name}-url]`
			)
			.join("\n")
	)
	.join("\n\n");

sections.set("badges", badgesText);

const referencesText = badges
	.flat()
	.map(([
		name,
		endpoint,
		link,
		icon,
		label
	]) => {
		const parameters = {
			color: "00f",
			icon,
			label,
			labelColor: "d07"
		};

		const parametersString = Object.entries(parameters)
			.filter(([, value]) => value !== undefined)
			.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
			.join("&");

		const query = `${endpoint.includes("?") ? "&" : "?"}${parametersString}`;
		const badgeUrl = `${protocol + badgesDomain}/${endpoint}${query}`;

		return `[${name}-badge]: ${badgeUrl}\n[${name}-url]: ${link}`;
	})
	.join("\n");

sections.set("references", referencesText);

const newReadmeText = [...sections.entries()]
	.map(([title, text]) => `<!-- ${title} -->\n${text}`)
	.join("\n\n");

fs.writeFileSync("./readme.md", `${newReadmeText}\n`);

export default badges;
