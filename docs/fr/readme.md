# template (Modèle)

[![Logo de pumpncode/template][logo-wide]][self]

🌐 Traductions :

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
[Deutsch][readme-de] 🤖,
**Français** 🤖

[✍️ Contribuez à une traduction][contribute-translation]

> [!WARNING]
> Les langues marquées avec 🤖 sont des traductions générées par IA et peuvent contenir des inexactitudes. Les contributions pour améliorer ces traductions sont les bienvenues !

---

Ceci est le dépôt principal de modèle pour nos projets et l'origine de tous les autres modèles. Il ne doit donc pas être utilisé directement pour des produits finaux. Il inclut la structure de base et les fichiers de configuration essentiels pour un projet JavaScript moderne.

---

> [!NOTE]
> Les listes "non ordonnées" dans ce document sont classées par priorité de haut en bas, mais ne sont pas des listes ordonnées Markdown car elles ne représentent pas une séquence fixe d'étapes.
>
> Ce document utilise des suffixes emoji dans certains cas pour potentiellement accélérer votre processus de configuration en mettant en évidence des options que vous pourriez envisager ou non :
>
> - Le suffixe 💎 indique une option ou une étape supplémentaire **recommandée**.
> - Le suffixe 🤡 indique une option possible mais **non recommandée**.
> - Les suffixes 🍎 (macOS), 🪟 (Windows et [WSL][wsl]) et 🐧 (Linux) marquent des informations ou des étapes d'installation spécifiques à **des plateformes spécifiques**.

## Pour commencer

### Prérequis

Si vous êtes un développeur, vous avez probablement déjà ces éléments ou des alternatives fonctionnelles, vous pouvez passer directement à la section [Installation][installation]. Ce guide suppose que vous avez installé [Windows][windows], ou un système d'exploitation Unix ou similaire ([macOS][mac-os] par exemple) ainsi qu'un [navigateur moderne][browsehappy]. Ce projet devrait fonctionner sur toutes les configurations modernes imaginables, mais il est préférable d'utiliser un système établi et populaire.

- [Compte GitHub][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Utilisez l'interface de téléchargement][node-js-download]
- [Un éditeur de code source][source-code-editors]

### Installation

1. Obtenez le modèle
	- Créez un nouveau dépôt à partir du modèle 💎
		1. Cliquez sur "Use this template"
			![Capture d'écran du bouton "Use this template"][screenshot-use-template]
		2. Remplissez les détails, cochez "Include all branches" et cliquez sur "Create repository from template"
			![Capture d'écran de la création d'un nouveau dépôt à partir d'un modèle][screenshot-create-from-template]
		3. Clonez votre nouveau dépôt
			```sh
			git clone https://github.com/username/my-new-repository.git
			```
	- Créez un nouveau dépôt en clonant 🤡
		> Cela contredit totalement le but de la fonctionnalité de modèle de GitHub, car les clones normaux (et les forks) copient tout l'historique des commits (et d'autres éléments) mais pas toutes les branches, ce qui n'est généralement pas idéal lors de la création d'un nouveau projet basé sur un modèle. En savoir plus [ici][github-docs-template].
		1. Clonez ce dépôt dans un nouveau dossier
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Configurez-le
	1. Allez dans le dossier de votre nouveau dépôt
		```sh
		cd my-new-repository
		```
	2. Initialisez le projet
		```sh
		deno task initialize
		```

## Utilisation

Étant donné qu'il s'agit d'un modèle, son utilisation dépend de ce que fera votre nouveau projet. Une fois tout installé, vous pouvez essayer d'exécuter les tâches dans le fichier [deno.json][deno-json], qui exploitent toutes les autres fonctionnalités de ce modèle.

## Plan de route

Consultez les [projets actuels][projects] et les [problèmes ouverts][issues] pour une liste des fonctionnalités proposées et des problèmes connus.

## Contribuer

Toute contribution que vous apportez est **grandement appréciée**.

Consultez le [guide de contribution][contributing] pour commencer.

Ce projet a un [code de conduite][code-of-conduct]. En interagissant avec ce dépôt, vous acceptez de respecter ses conditions.

## Contact

Pumpn Code - <office@pumpn.net>
Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Lien du projet : <https://github.com/pumpncode/template>

## Remerciements

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Contributeurs

| Nom | Site Web | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Licence

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
[readme-de]: /docs/de/readme.md
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
