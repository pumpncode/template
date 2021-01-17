/**
 * 1.	replace all the relevant constants and (if your project has a website) replace ./media/images/websitelogo.png with a favicon-ish (< 50px) logo
 * 2.	run `node badges.js` (which adds all these shield references to your readme.md)
 * 3.	delete this file and ./media/images/websitelogo.png unless you really need them again
 */
import fs from "fs";

const protocol = "https://";

const githubDomain = "github.com";
const discordDomain = "discord.gg";
const npmDomain = "npmjs.com";
const hstsDomain = "hstspreload.org";
const librariesIoDomain = "libraries.io";
const nodeJsDomain = "nodejs.org";
const redditDomain = "reddit.com";
const twitterDomain = "twitter.com";
const shieldsDomain = "img.shields.io";

const githubUser = "pumpncode"; // relevant
const githubProjectName = "template"; // relevant
const githubProject = `${githubUser}/${githubProjectName}`;
const githubPage = `${protocol}${githubDomain}/${githubProject}`;

const discordServerId = "781324491182571530"; // relevant
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

const hstsPage = `${protocol}${hstsDomain}/?domain=${websiteDomain}`;

const librariesIoPage = `${protocol}${librariesIoDomain}`;
const librariesIoGithubPage = `${librariesIoPage}/github/${githubProject}`;
const librariesIoNpmPage = `${librariesIoPage}/npm/${encodeURIComponent(npmPackage)}`;
const librariesIoNpmSourceRankPage = `${librariesIoPage}/npm/${encodeURIComponent(npmPackage)}/sourcerank`;

const mainDependency = "eslint"; // relevant (just ignore this if your project isn't using any peer dependencies)
const mainDependencyNpmPage = `${protocol}${npmDomain}/package/${mainDependency}`;
const mainDependencyLogo = mainDependency; // relevant (logo name isn't always the same as the name)

const nodeJsPage = `${protocol}${nodeJsDomain}`;

const subreddit = "pumpnuniverse"; // relevant
const subredditPage = `${protocol}${redditDomain}/r/${subreddit}`;

const twitter = "PumpnUniverse"; // relevant
const twitterPage = `${protocol}${twitterDomain}/${twitter}`;

const npmLogo = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TlBNIGljb248L3RpdGxlPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMCA3LjMzNHY4aDYuNjY2djEuMzMySDEydi0xLjMzMmgxMnYtOEgwem02LjY2NiA2LjY2NEg1LjMzNHYtNEgzLjk5OXY0SDEuMzM1VjguNjY3aDUuMzMxdjUuMzMxem00IDB2MS4zMzZIOC4wMDFWOC42NjdoNS4zMzR2NS4zMzJoLTIuNjY5di0uMDAxem0xMi4wMDEgMGgtMS4zM3YtNGgtMS4zMzZ2NGgtMS4zMzV2LTRoLTEuMzN2NGgtMi42NzFWOC42NjdoOC4wMDJ2NS4zMzF6TTEwLjY2NSAxMEgxMnYyLjY2N2gtMS4zMzVWMTB6Ii8+PC9zdmc+";

const references = [
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
		"issues",
		`github/issues-raw/${githubProject}`,
		`${githubPage}/issues`,
		"github"
	],
	[
		"pr",
		`github/issues-pr-raw/${githubProject}`,
		`${githubPage}/pulls`,
		"github"
	],
	[
		"topLanguage",
		`github/languages/top/${githubProject}`,
		githubPage,
		"github"
	],
	[
		"languageCount",
		`github/languages/count/${githubProject}`,
		githubPage,
		"github"
	],
	[
		"license",
		`github/license/${githubProject}`,
		`${githubPage}/blob/master/license.md`,
		"github"
	],
	[
		"dependencies",
		`librariesio/github/${githubProject}`,
		librariesIoGithubPage,
		"github"
	],
	[
		"releaseDependencies",
		`librariesio/release/npm/${npmPackage}`,
		librariesIoNpmPage,
		npmLogo,
		"release dependencies"
	],
	[
		"downloads",
		`npm/dm/${npmPackage}`,
		npmPage,
		npmLogo,
		"downloads"
	],
	[
		"sourcerank",
		`librariesio/sourcerank/npm/${npmPackage}`,
		librariesIoNpmSourceRankPage,
		npmLogo
	],
	[
		"version",
		`npm/v/${npmPackage}`,
		npmPage,
		npmLogo,
		"version"
	],
	[
		"node",
		`node/v/${npmPackage}`,
		nodeJsPage,
		"node.js"
	],
	[
		"reddit",
		`reddit/subreddit-subscribers/${subreddit}`,
		subredditPage,
		"reddit",
		"r/pumpnuniverse"
	],
	[
		"twitter",
		"twitter/follow/PumpnUniverse",
		twitterPage,
		"twitter",
		"twitter"
	],
	[
		"discord",
		`discord/${discordServerId}`,
		discordPage,
		"discord",
		"discord"
	],
	[
		"mainDependency",
		`npm/dependency-version/${npmPackage}/peer/${mainDependency}`,
		mainDependencyNpmPage,
		mainDependencyLogo
	],
	[
		"website",
		`website?url=${websiteUrl}`,
		websiteUrl,
		websiteLogo
	],
	[
		"hsts",
		`hsts/preload/${websiteDomain}`,
		hstsPage,
		"chrome"
	]
]
	.map(([
		name,
		shieldPath,
		link,
		logo,
		label
	]) => {
		const parameters = {
			color: "white",
			label,
			labelColor: "black",
			logo,
			logoColor: "white",
			style: "flat"
		};

		const parametersString = Object.entries(parameters)
			.filter(([, value]) => value)
			.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
			.join("&");

		const query = `${shieldPath.includes("?") ? "&" : "?"}${parametersString}`;
		const shieldUrl = `${protocol + shieldsDomain}/${shieldPath}${query}`;

		return `[${name}-shield]: ${shieldUrl}\n[${name}-url]: ${link}`;
	})
	.join("\n");

const readme = fs.readFileSync("./readme.md", "utf8");

const referencesSection = `<!-- REFERENCES -->\n${references}\n`;
fs.writeFileSync("./readme.md", readme.replace(/<!-- REFERENCES -->((.*?)\n)+(.*?)$/, referencesSection));

export default references;
