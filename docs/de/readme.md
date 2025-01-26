# template (Vorlage)

[![Logo von pumpncode/template][logo-wide]][self]

🌐 Übersetzungen:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
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
**Deutsch** 🤖,
[Français][readme-fr] 🤖

[✍️ Übersetzung beitragen][contribute-translation]

> [!WARNING]
> Mit 🤖 gekennzeichnete Sprachen sind AI-generierte Übersetzungen und könnten Ungenauigkeiten enthalten. Beiträge zur Verbesserung dieser Übersetzungen sind willkommen!

---

Dies ist das Hauptvorlagen-Repository für unsere Projekte und die Quelle aller anderen Vorlagen. Daher sollte es nicht direkt für Endprodukte verwendet werden. Es enthält die grundlegende Struktur und wichtige Konfigurationsdateien für ein modernes JavaScript-Projekt.

---

> [!NOTE]
> "Ungeordnete" Listen in diesem Dokument sind nach Priorität von oben nach unten geordnet, aber keine Markdown-Listen, da sie keine festen Reihenfolgen von Schritten darstellen.
>
> Dieses Dokument verwendet Emoji-Suffixe, um die Einrichtung möglicherweise zu beschleunigen, indem Optionen hervorgehoben werden, die Sie berücksichtigen könnten oder nicht:
>
> - Das Suffix 💎 kennzeichnet eine **empfohlene** Option oder einen zusätzlichen Schritt.
> - Das Suffix 🤡 kennzeichnet eine mögliche, aber **nicht empfohlene** Option.
> - Die Suffixe 🍎 (macOS), 🪟 (Windows und [WSL][wsl]) und 🐧 (Linux) kennzeichnen Informationen oder Installationsschritte, die für **spezifische Plattformen** einzigartig sind.

## Erste Schritte

### Voraussetzungen

Falls Sie ein Entwickler sind, haben Sie vermutlich diese oder gleichwertige Alternativen und können direkt zum Abschnitt [Installation][installation] springen. Diese Anleitung geht davon aus, dass Sie [Windows][windows] oder ein Unix- bzw. Unix-ähnliches Betriebssystem ([macOS][mac-os] zum Beispiel) sowie einen [modernen Browser][browsehappy] installiert haben. Dieses Projekt sollte auf jeder erdenklichen modernen Systemkonfiguration funktionieren, aber am besten verwenden Sie ein etabliertes und populäres System.

- [GitHub-Account][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Verwenden Sie die Download-Schnittstelle][node-js-download]
- [Ein Quellcode-Editor][source-code-editors]

### Installation

1. Vorlage abrufen
	- Erstellen Sie ein neues Repository aus der Vorlage 💎
		1. Klicken Sie auf "Use this template"
			![Screenshot des "Use this template"-Buttons][screenshot-use-template]
		2. Füllen Sie die Details aus, aktivieren Sie "Include all branches" und klicken Sie auf "Create repository from template"
			![Screenshot des Erstellens eines neuen Repositorys aus einer Vorlage][screenshot-create-from-template]
		3. Klonen Sie Ihr neues Repository
			```sh
			git clone https://github.com/username/my-new-repository.git
			```
	- Erstellen Sie ein neues Repository durch Klonen 🤡
		> Dies widerspricht dem Zweck der GitHub-Vorlagenfunktion, da normale Klone (und Forks) den gesamten Commit-Verlauf (und andere Dinge) kopieren, aber nicht alle Zweige, was normalerweise nicht das Ziel ist, wenn man ein neues Projekt auf Basis einer Vorlage erstellt. Mehr dazu [hier][github-docs-template].
		1. Klonen Sie dieses Repository in einen neuen Ordner
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```
2. Einrichtung
	1. Wechseln Sie in den Ordner Ihres neuen Repositorys
		```sh
		cd my-new-repository
		```
	2. Initialisieren Sie das Projekt
		```sh
		deno task initialize
		```

## Verwendung

Da dies eine Vorlage ist, hängt die Verwendung davon ab, was Ihr neues Projekt tun wird. Sobald alles installiert ist, können Sie versuchen, die Aufgaben in der [deno.json][deno-json] auszuführen, die alle anderen Funktionen dieser Vorlage nutzt.

## Roadmap

Sehen Sie sich die [aktuellen Projekte][projects] und die [offenen Probleme][issues] an, um eine Liste vorgeschlagener Funktionen und bekannter Probleme zu erhalten.

## Beitrag leisten

Jeder Beitrag, den Sie leisten, ist **sehr willkommen**.

Lesen Sie den [Beitragsleitfaden][contributing], um loszulegen.

Dieses Projekt hat einen [Verhaltenskodex][code-of-conduct]. Durch die Interaktion mit diesem Repository erklären Sie sich damit einverstanden, dessen Bedingungen einzuhalten.

## Kontakt

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Projektlink: <https://github.com/pumpncode/template>

## Danksagungen

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Mitwirkende

| Name | Webseite | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Lizenz

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
