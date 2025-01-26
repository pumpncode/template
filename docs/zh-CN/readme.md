# template （模板）

[![pumpncode/template 的标志][logo-wide]][self]

🌐 翻译：

**简体中文** 🤖、
[繁體中文][readme-zh-tw] 🤖、
[粵語][readme-zh-hk] 🤖、
[Español][readme-es] 🤖、
[English][readme-en]、
[हिन्दी][readme-hi] 🤖、
[বাংলা][readme-bn] 🤖、
[Português][readme-pt] 🤖、
[Русский][readme-ru] 🤖、
[日本語][readme-ja] 🤖、
[Tiếng Việt][readme-vi] 🤖、
[Türkçe][readme-tr] 🤖、
[मराठी][readme-mr] 🤖、
[తెలుగు][readme-te] 🤖、
[پنجابی][readme-pa-Arab] 🤖、
[ਪੰਜਾਬੀ][readme-pa] 🤖、
[한국어][readme-ko] 🤖、
[தமிழ்][readme-ta] 🤖、
[مصرى][readme-arz] 🤖、
[Deutsch][readme-de] 🤖、
[Français][readme-fr] 🤖

[✍️ 贡献翻译][contribute-translation]

> [!WARNING]
> 带有 🤖 的语言是由 AI 翻译的，可能包含不准确的内容。欢迎提供改进建议！

---

这是我们项目的主要模板库，也是其他所有模板的来源，因此不应直接用于最终产品。它包括现代 JavaScript 项目的基本结构和重要的配置文件。

---

> [!NOTE]
> 本文档中的“无序”列表按优先级从上到下排列，但不是 Markdown 的有序列表，因为它们并不表示固定的步骤顺序。
>
> 本文档在某些情况下使用了带有表情符号的后缀，以便加快您的设置流程，突出您可能想考虑或不考虑的选项：
>
> - 后缀 💎 表示 **推荐** 的选项或额外步骤。
> - 后缀 🤡 表示可能的但 **不推荐** 的选项。
> - 后缀 🍎（macOS）、🪟（Windows 和 [WSL][wsl]）以及 🐧（Linux）标记特定平台的相关信息或安装步骤。

## 开始使用

### 先决条件

如果您是开发者，您可能已经具备以下内容或使用替代工具，可以直接跳到 [安装部分][installation]。本指南假设您已安装 [Windows][windows] 或类 Unix 操作系统（如 [macOS][mac-os]），以及 [现代浏览器][browsehappy]。此项目应在所有现代系统配置上运行，但推荐使用成熟、流行的系统。

- [GitHub 账号][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [使用下载界面][node-js-download]
- [源码编辑器][source-code-editors]

### 安装

1. 获取模板
	- 从模板创建新仓库 💎
		1. 点击“使用此模板”
			![“使用此模板”按钮的截图][screenshot-use-template]
		2. 填写详情，勾选“包含所有分支”，然后点击“从模板创建仓库”
			![从模板创建新仓库界面的截图][screenshot-create-from-template]
		3. 克隆您的新仓库

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- 通过克隆创建新仓库 🤡
		> 这完全违背了 GitHub 模板功能的目的，因为普通克隆（和 Fork）会复制整个提交历史（和其他内容），但不会复制所有分支，这通常不是创建基于模板的新项目时的理想选择。阅读更多 [此处][github-docs-template]。
		1. 将此仓库克隆到新文件夹

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. 设置项目
	1. 进入新仓库文件夹

		```sh
		cd my-new-repository
		```

	2. 初始化项目

		```sh
		deno task initialize
		```

## 使用方法

因为这是一个模板，其使用方式取决于您的新项目将执行的任务。安装完成后，您可以尝试运行 [deno.json][deno-json] 中的任务，这些任务利用了此模板的所有功能。

## 路线图

查看 [当前项目][projects] 和 [未解决问题][issues] 以了解计划功能和已知问题的列表。

## 贡献

任何形式的贡献都 **非常感谢**。

请查看 [贡献指南][contributing] 以了解如何开始。

本项目有 [行为准则][code-of-conduct]。通过与此仓库互动，您同意遵守其条款。

## 联系方式

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

项目链接：<https://github.com/pumpncode/template>

## 鸣谢

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## 贡献者

| 名字 | 网站 | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## 许可证

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
[readme-es]: /docs/es/readme.md
[readme-en]: /readme.md
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
[installation]: #安装
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
