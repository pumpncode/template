# template （模板）

[![pumpncode/template 的標誌][logo-wide]][self]

🌐 翻譯：

[简体中文][readme-zh-cn] 🤖、
**繁體中文** 🤖、
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

[✍️ 貢獻翻譯][contribute-translation]

> [!WARNING]
> 帶有 🤖 的語言是由 AI 翻譯的，可能包含不準確的內容。歡迎提供改進建議！

---

這是我們專案的主要模板庫，也是其他所有模板的來源，因此不應直接用於最終產品。它包含現代 JavaScript 專案的基本結構和重要的配置文件。

---

> [!NOTE]
> 本文檔中的「無序」列表按優先級從上到下排列，但不是 Markdown 的有序列表，因為它們並不表示固定的步驟順序。
>
> 本文檔在某些情況下使用了帶有表情符號的後綴，以便加快您的設置流程，突出您可能想考慮或不考慮的選項：
>
> - 後綴 💎 表示 **推薦** 的選項或額外步驟。
> - 後綴 🤡 表示可能的但 **不推薦** 的選項。
> - 後綴 🍎（macOS）、🪟（Windows 和 [WSL][wsl]）以及 🐧（Linux）標記特定平台的相關信息或安裝步驟。

## 開始使用

### 先決條件

如果您是開發者，您可能已經具備以下內容或使用替代工具，可以直接跳到 [安裝部分][installation]。本指南假設您已安裝 [Windows][windows] 或類 Unix 操作系統（如 [macOS][mac-os]），以及 [現代瀏覽器][browsehappy]。此專案應在所有現代系統配置上運行，但推薦使用成熟、流行的系統。

- [GitHub 帳號][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [使用下載介面][node-js-download]
- [原始碼編輯器][source-code-editors]

### 安裝

1. 獲取模板
	- 從模板建立新存儲庫 💎
		1. 點擊「使用此模板」
			![「使用此模板」按鈕的截圖][screenshot-use-template]
		2. 填寫詳細信息，勾選「包含所有分支」，然後點擊「從模板建立存儲庫」
			![從模板建立新存儲庫介面的截圖][screenshot-create-from-template]
		3. 克隆您的新存儲庫

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- 通過克隆建立新存儲庫 🤡
		> 這完全違背了 GitHub 模板功能的目的，因為普通克隆（和 Fork）會複製整個提交歷史（和其他內容），但不會複製所有分支，這通常不是建立基於模板的新專案時的理想選擇。閱讀更多 [此處][github-docs-template]。
		1. 將此存儲庫克隆到新資料夾

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. 設置專案
	1. 進入新存儲庫資料夾

		```sh
		cd my-new-repository
		```

	2. 初始化專案

		```sh
		deno task initialize
		```

## 使用方法

因為這是一個模板，其使用方式取決於您的新專案將執行的任務。安裝完成後，您可以嘗試運行 [deno.json][deno-json] 中的任務，這些任務利用了此模板的所有功能。

## 路線圖

查看 [當前專案][projects] 和 [未解決問題][issues] 以了解計劃功能和已知問題的列表。

## 貢獻

任何形式的貢獻都 **非常感謝**。

請查看 [貢獻指南][contributing] 以了解如何開始。

本專案有 [行為準則][code-of-conduct]。通過與此存儲庫互動，您同意遵守其條款。

## 聯絡方式

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

專案鏈接：<https://github.com/pumpncode/template>

## 鳴謝

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## 貢獻者

| 名字 | 網站 | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## 授權

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
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
[installation]: #安裝
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
