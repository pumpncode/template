# template （模板）

[![pumpncode/template 嘅標誌][logo-wide]][self]

🌐 翻譯：

[简体中文][readme-zh-cn] 🤖、
[繁體中文][readme-zh-tw] 🤖、
**粵語** 🤖、
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
> 帶有 🤖 嘅語言係由 AI 翻譯嘅，可能包含唔準確嘅內容。歡迎提供改進建議！

---

呢個係我哋項目嘅主要模板庫，亦係其他所有模板嘅來源，因此唔應該直接用於最終產品。佢包含咗現代 JavaScript 項目嘅基本結構同重要嘅配置文件。

---

> [!NOTE]
> 呢份文件入面嘅「無序」列表係按照優先級由上到下排序，但唔係 Markdown 嘅有序列表，因為佢哋唔代表固定步驟嘅順序。
>
> 呢份文件喺某啲情況下會用表情符號嘅後綴，加快你嘅設定流程，突出可能值得考慮或者唔值得考慮嘅選項：
>
> - 後綴 💎 代表 **推薦** 嘅選項或者額外步驟。
> - 後綴 🤡 代表可能但 **唔推薦** 嘅選項。
> - 後綴 🍎（macOS）、🪟（Windows 同 [WSL][wsl]）同 🐧（Linux）代表特定平台嘅相關資訊或者安裝步驟。

## 開始使用

### 先決條件

如果你係開發者，你可能已經有以下內容或者替代工具，可以直接跳到 [安裝部分][installation]。呢份指南假設你已經安裝咗 [Windows][windows] 或者類 Unix 操作系統（例如 [macOS][mac-os]），同埋 [現代瀏覽器][browsehappy]。呢個項目應該可以喺所有現代系統配置上運行，但推薦使用成熟、流行嘅系統。

- [GitHub 帳號][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [使用下載界面][node-js-download]
- [原始碼編輯器][source-code-editors]

### 安裝

1. 獲取模板
	- 用模板創建新存儲庫 💎
		1. 點擊「使用此模板」
			![「使用此模板」按鈕嘅截圖][screenshot-use-template]
		2. 填寫詳情，勾選「包含所有分支」，之後點擊「從模板創建存儲庫」
			![從模板創建新存儲庫界面嘅截圖][screenshot-create-from-template]
		3. 克隆你嘅新存儲庫

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- 通過克隆創建新存儲庫 🤡
		> 呢樣完全違反咗 GitHub 模板功能嘅目的，因為普通克隆（同 Fork）會複製成個提交歷史（同其他內容），但唔會複製所有分支，通常唔係基於模板創建新項目嘅理想選擇。了解更多 [呢度][github-docs-template]。
		1. 將呢個存儲庫克隆到新資料夾

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. 設置項目
	1. 進入你新嘅存儲庫資料夾

		```sh
		cd my-new-repository
		```

	2. 初始化項目

		```sh
		deno task initialize
		```

## 使用方法

因為呢個係一個模板，使用方式取決於你新項目嘅目標。安裝完成之後，你可以試下運行 [deno.json][deno-json] 入面嘅任務，呢啲任務充分利用咗模板嘅所有功能。

## 路線圖

睇下 [當前項目][projects] 同 [未解決問題][issues]，了解計劃功能同已知問題嘅列表。

## 貢獻

任何形式嘅貢獻都 **非常感激**。

請睇下 [貢獻指南][contributing]，了解點樣開始。

呢個項目有 [行為準則][code-of-conduct]。通過同呢個存儲庫互動，你同意遵守佢嘅條款。

## 聯絡方式

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

項目鏈接：<https://github.com/pumpncode/template>

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
[readme-zh-tw]: /docs/zh-TW/readme.md
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
