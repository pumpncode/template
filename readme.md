# template

[![logo of pumpncode/template][logo-wide]][self]

🌐 Translations:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
**English**,
[हिन्दी][readme-hi] 🤖,
[বাংলা][readme-bn] 🤖,
[Português][readme-pt] 🤖,
[Русский][readme-ru] 🤖,
[日本語][readme-ja] 🤖,
[Tiếng Việt][readme-vi] 🤖,
[Türkçe][readme-tr] 🤖,
[मराठी][readme-mr] 🤖,
[తెలుగు][readme-te] 🤖,
[پنجابی][readme-pa-Arab] 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ Contribute a translation][contribute-translation]

> [!WARNING]
> Languages marked with 🤖 are AI-generated translations and may contain inaccuracies. Contributions to improve these translations are welcome!

---

This is the main template repository for our projects and the origin of every other template, which is why it shouldn't be used directly for end products. It includes the basic structure and important configuration files for a modern JavaScript project.

---

> [!NOTE]
> "Unordered" lists in this document are ordered by priority from top to bottom, but aren't markdown ordered lists because they don't signify fixed sequences of steps.
>
> This document uses emoji suffixes in some cases to possibly speed up your setup process by highlighting options you may or may not want to take into consideration:
>
> - The suffix 💎 marks a **recommended** option or extra-step.
> - The suffix 🤡 marks a possible but **not recommended** option.
> - The suffixes 🍎 (macOS), 🪟 (Windows and [WSL][wsl]) and 🐧 (Linux) mark information or installation steps unique to **specific platforms**.

## Getting Started

### Prerequisites

If you're a developer, you'll presumably have those or working alternatives, feel free to skip to the [Installation section][installation]. This guide expects you have [Windows][windows], or a Unix or Unix-like operating system ([macOS][mac-os] for example) and a [modern browser][browsehappy] installed. This project should work on every imaginable modern system configuration, but your best bet would be to use a well established and popular one.

- [GitHub Account][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Use the download interface][node-js-download]
- [A source-code editor][source-code-editors]

### Installation

1. Get the template
	- Create a new repository from template 💎
		1. Click "Use this template"
			![Screenshot of "Use this template" button][screenshot-use-template]
		2. Fill in the details, check "Include all branches" and click "Create repository from template"
			![Screenshot of Create a new repository from template screen][screenshot-create-from-template]
		3. Clone your new repository

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Create a new repository by cloning 🤡
		> This completely defeats the purpose of the GitHub template feature, because normal clones (and forks) copy the whole commit history (and other things) but not all branches, which normally isn't what you want when creating a new project based on a boilerplate. Read more [here][github-docs-template].
		1. Clone this repository into a new folder

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Set it up
	1. Go into your new repository folder

		```sh
		cd my-new-repository
		```

	2. Initialize the project

		```sh
		deno task initialize
		```

## Usage

Because this is a template, the usage depends on what your new project will do. Once everything is installed, you can try running the tasks in the [deno.json][deno-json], these make use of every other feature of this template.

## Roadmap

See the [current projects][projects] and the [open issues][issues] for a list of proposed features and known issues.

## Contributing

Any contributions you make are **greatly appreciated**.

See the [contributing guide][contributing]  for ways to get started.

This project has a [code of conduct][code-of-conduct]. By interacting with this repository you agree to follow its terms.

## Contact

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Project Link: <https://github.com/pumpncode/template>

## Acknowledgments

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Contributors

| Name | Website | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## License

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
[readme-es]: /docs/es/readme.md
[readme-hi]: /docs/hi/readme.md
[readme-bn]: /docs/bn/readme.md
[readme-pt]: /docs/pt/readme.md
[readme-ru]: /docs/ru/readme.md
[readme-ja]: /docs/ja/readme.md
[readme-vi]: /docs/vi/readme.md
[readme-tr]: /docs/tr/readme.md
[readme-mr]: /docs/mr/readme.md
[readme-te]: /docs/te/readme.md
[readme-pa-Arab]: /docs/pa-Arab/readme.md
[readme-pa]: /docs/pa/readme.md
[readme-ko]: /docs/ko/readme.md
[readme-ta]: /docs/ta/readme.md
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[installation]: #installation
[windows]: https://www.microsoft.com/windows
[mac-os]: https://www.apple.com/macos
[browsehappy]: https://browsehappy.com
[github-join]: https://github.com/join
[git]: https://git-scm.com
[git-macos]: https://git-scm.com/download/mac
[git-windows]: https://git-scm.com/download/win
[git-linux]: https://git-scm.com/download/linux
[deno]: https://deno.com
[node-js]: https://nodejs.org
[node-js-download]: https://nodejs.org/en/download
[source-code-editors]: https://en.wikipedia.org/wiki/Source-code_editor#Notable_examples
[screenshot-use-template]: /media/images/screenshots/use-template.png
[screenshot-create-from-template]: /media/images/screenshots/create-from-template.png
[github-docs-template]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#about-repository-templates
[deno-json]: /deno.json
[projects]: https://github.com/pumpncode/template/projects
[issues]: https://github.com/pumpncode/template/issues
[contributing]: https://github.com/pumpncode/.github/contributing.md
[code-of-conduct]: https://github.com/pumpncode/.github/code-of-conduct.md
[nnmrts-github]: https://github.com/nnmrts
[unified]: https://unifiedjs.com
[remark]: https://github.com/remarkjs
[best-readme-tempplate]: https://github.com/othneildrew/Best-README-Template
[license]: /license.md
[pumpn-website]: https://pumpn.net
