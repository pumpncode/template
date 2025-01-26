# template (テンプレート)

[![pumpncode/template のロゴ][logo-wide]][self]

🌐 翻訳:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
[हिन्दी][readme-hi] 🤖,
[বাংলা][readme-bn] 🤖,
[Português][readme-pt] 🤖,
[Русский][readme-ru] 🤖,
**日本語** 🤖,
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

[✍️ 翻訳に貢献][contribute-translation]

> [!WARNING]
> 🤖 が付いている言語は AI によって翻訳されており、不正確な場合があります。翻訳の改善にご協力ください！

---

これは、プロジェクト用のメインテンプレートリポジトリであり、他のすべてのテンプレートのソースです。そのため、最終製品には直接使用しないでください。現代的な JavaScript プロジェクトの基本構造と重要な設定ファイルが含まれています。

---

> [!NOTE]
> このドキュメント内の「順序付けされていない」リストは、上から下へ優先順位で並べられていますが、Markdown の順序付きリストではありません。固定された手順のシーケンスを表しているわけではありません。
>
> このドキュメントでは、設定プロセスをスピードアップするために、一部の場合で絵文字のサフィックスが使用されています。考慮したいかもしれないオプションを強調します：
>
> - サフィックス 💎 は、**推奨される**オプションまたは追加の手順を示します。
> - サフィックス 🤡 は、可能だが**推奨されない**オプションを示します。
> - サフィックス 🍎 (macOS)、🪟 (Windows と [WSL][wsl])、および 🐧 (Linux) は、**特定のプラットフォーム**に固有の情報またはインストール手順を示します。

## 始める

### 必要条件

開発者であれば、以下のツールや代替品を既にお持ちの可能性があります。その場合、[インストールセクション][installation]にスキップしてください。このガイドでは、[Windows][windows]、または Unix または Unix に類似したオペレーティングシステム（例：[macOS][mac-os]）と [モダンブラウザ][browsehappy] がインストールされていることを前提としています。このプロジェクトは、考えうるすべてのモダンなシステム構成で動作するはずですが、確立された人気のあるものを使用するのが最適です。

- [GitHub アカウント][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [ダウンロードインターフェイスを使用][node-js-download]
- [ソースコードエディタ][source-code-editors]

### インストール

1. テンプレートを取得
	- テンプレートから新しいリポジトリを作成 💎
		1. 「Use this template」をクリック
			![「Use this template」ボタンのスクリーンショット][screenshot-use-template]
		2. 詳細を入力し、「Include all branches」をチェックして「Create repository from template」をクリック
			![テンプレートから新しいリポジトリを作成する画面のスクリーンショット][screenshot-create-from-template]
		3. 新しいリポジトリをクローン

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- クローンして新しいリポジトリを作成 🤡
		> これは GitHub のテンプレート機能の目的に完全に反します。通常のクローン（およびフォーク）はコミット履歴全体（およびその他のデータ）をコピーしますが、すべてのブランチはコピーされません。テンプレートに基づいて新しいプロジェクトを作成する場合には一般的に望ましくありません。詳細はこちらを参照してください: [GitHub ドキュメント][github-docs-template]。
		1. このリポジトリを新しいフォルダにクローン

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. セットアップ
	1. 新しいリポジトリフォルダに移動

		```sh
		cd my-new-repository
		```

	2. プロジェクトを初期化

		```sh
		deno task initialize
		```

## 使用方法

これはテンプレートであるため、その使用方法は新しいプロジェクトが何をするかによって異なります。すべてがインストールされたら、[deno.json][deno-json] 内のタスクを実行してみてください。これらはこのテンプレートのすべての機能を活用します。

## ロードマップ

[現在のプロジェクト][projects] と [未解決の問題][issues] を参照して、提案された機能と既知の問題のリストを確認してください。

## 貢献

あなたの貢献は **大歓迎** です。

[貢献ガイド][contributing] を確認して、始め方をご覧ください。

このプロジェクトには [行動規範][code-of-conduct] があります。このリポジトリと対話することで、その条件に従うことに同意したものとみなされます。

## お問い合わせ

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

プロジェクトリンク: <https://github.com/pumpncode/template>

## 謝辞

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## 貢献者

| 名前 | ウェブサイト | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## ライセンス

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
[readme-es]: /docs/es/readme.md
[readme-en]: /readme.md
[readme-hi]: /docs/hi/readme.md
[readme-bn]: /docs/bn/readme.md
[readme-pt]: /docs/pt/readme.md
[readme-ru]: /docs/ru/readme.md
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
[installation]: #インストール
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
