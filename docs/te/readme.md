# template (మూస)

[![pumpncode/template లోగో][logo-wide]][self]

🌐 అనువాదాలు:

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
**తెలుగు** 🤖,
[پنجابی][readme-pa-Arab] 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ అనువాదానికి తోడ్పడండి][contribute-translation]

> [!WARNING]
> 🤖 గుర్తు ఉన్న భాషలు AI ద్వారా అనువదించబడ్డాయి మరియు అవి తప్పుగా ఉండే అవకాశముంది. ఈ అనువాదాలను మెరుగుపరచడానికి సహాయం ఆహ్వానించబడింది!

---

ఇది మా ప్రాజెక్టుల కోసం ప్రధాన మూస రిపాజిటరీ మరియు ఇతర అన్ని మూసల మూలం, కాబట్టి దీన్ని తుద ఉత్పత్తుల కోసం నేరుగా ఉపయోగించకూడదు. ఇది ఒక ఆధునిక JavaScript ప్రాజెక్ట్‌కు అవసరమైన మూల నిర్మాణం మరియు ముఖ్యమైన కాన్ఫిగరేషన్ ఫైళ్లను కలిగి ఉంటుంది.

---

> [!NOTE]
> ఈ డాక్యుమెంట్‌లోని "అనియంత్రితమైన" జాబితాలు పై నుండి క్రిందకు ప్రాధాన్యతా క్రమంలో అమర్చబడ్డాయి, కానీ అవి స్థిరమైన వరుస దశలను సూచించవు కాబట్టి Markdown క్రమబద్ధమైన జాబితాలు కావు.
>
> ఈ డాక్యుమెంట్ మీ సెటప్ ప్రాసెస్‌ను వేగవంతం చేయడానికి కొన్ని సందర్భాల్లో ఎమోజీ సఫిక్సులను ఉపయోగిస్తుంది, మీరు పరిగణనలోకి తీసుకోవాల్సిన లేదా తీసుకోకూడని ఎంపికలను హైలైట్ చేస్తుంది:
>
> - సఫిక్స్ 💎 ఒక **సిఫారసు చేసిన** ఎంపిక లేదా అదనపు దశను సూచిస్తుంది.
> - సఫిక్స్ 🤡 ఒక సాధ్యమైన కానీ **సిఫారసు చేయని** ఎంపికను సూచిస్తుంది.
> - సఫిక్స్ 🍎 (macOS), 🪟 (Windows మరియు [WSL][wsl]) మరియు 🐧 (Linux) **ప్రత్యేక ప్లాట్‌ఫారమ్‌లకు** ప్రత్యేకమైన సమాచారం లేదా ఇన్‌స్టాలేషన్ దశలను సూచిస్తాయి.

## ప్రారంభించడం

### అవసరమైన శరతులు

మీరు ఒక డెవలపర్ అయితే, మీరు క్రిందివి లేదా పనికొచ్చే ప్రత్యామ్నాయాలను ఇప్పటికే కలిగి ఉండవచ్చు, కాబట్టి మీరు [ఇన్‌స్టాలేషన్ సెక్షన్‌కు][installation] వెళ్లవచ్చు. ఈ గైడ్ మీ వద్ద [Windows][windows], లేదా Unix లేదా Unix-లాంటివి ఆపరేటింగ్ సిస్టమ్ ([macOS][mac-os] ఉదాహరణకు) మరియు [ఒక ఆధునిక బ్రౌజర్][browsehappy] ఉందని భావిస్తుంది. ఈ ప్రాజెక్ట్ ప్రతి ఆధునిక వ్యవస్థ అమరికలో పనిచేయాలి, కానీ స్థిరంగా మరియు ప్రసిద్ధంగా ఉన్నది ఉపయోగించడం ఉత్తమం.

- [GitHub ఖాతా][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [డౌన్‌లోడ్ ఇంటర్ఫేస్‌ను ఉపయోగించండి][node-js-download]
- [ఒక సోర్స్-కోడ్ ఎడిటర్][source-code-editors]

### ఇన్‌స్టాలేషన్

1. మూస పొందండి
	- మూస నుండి ఒక కొత్త రిపాజిటరీని సృష్టించండి 💎
		1. "Use this template" బటన్‌పై క్లిక్ చేయండి
			![Use this template బటన్ యొక్క స్క్రీన్‌షాట్][screenshot-use-template]
		2. వివరాలను పూరించండి, "Include all branches" ని టిక్ చేయండి మరియు "Create repository from template" క్లిక్ చేయండి
			![మూస నుండి ఒక కొత్త రిపాజిటరీ సృష్టించే స్క్రీన్‌షాట్][screenshot-create-from-template]
		3. మీ కొత్త రిపాజిటరీని క్లోన్ చేయండి

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- క్లోన్ చేయడం ద్వారా ఒక కొత్త రిపాజిటరీని సృష్టించండి 🤡
		> ఇది GitHub మూస లక్షణం యొక్క ఉద్దేశ్యానికి పూర్తిగా వ్యతిరేకంగా ఉంది, ఎందుకంటే సాధారణ క్లోన్లు (మరియు forks) మొత్తం కమిట్ చరిత్రను (మరియు ఇతర విషయాలను) కాపీ చేస్తాయి కానీ అన్ని బ్రాంచ్‌లను కాదు, ఇది సాధారణంగా ఒక కొత్త ప్రాజెక్ట్‌ని సృష్టించేటప్పుడు అవసరం కాదు. ఇంకా చదవండి [ఇక్కడ][github-docs-template].
		1. ఈ రిపాజిటరీని ఒక కొత్త ఫోల్డర్‌లో క్లోన్ చేయండి

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. సెటప్ చేయండి
	1. మీ కొత్త రిపాజిటరీ ఫోల్డర్‌కు వెళ్లండి

		```sh
		cd my-new-repository
		```

	2. ప్రాజెక్ట్‌ను ప్రారంభించండి

		```sh
		deno task initialize
		```

## వాడకం

ఇది ఒక మూస కాబట్టి, దాని ఉపయోగం మీ కొత్త ప్రాజెక్ట్ ఏమి చేస్తుందో దాని మీద ఆధారపడి ఉంటుంది. ప్రతిదీ ఇన్‌స్టాల్ అయిన తర్వాత, [deno.json][deno-json]లోని పనులను అమలు చేయడానికి ప్రయత్నించండి, ఇవి ఈ మూస యొక్క అన్ని ఇతర లక్షణాలను ఉపయోగిస్తాయి.

## రోడ్‌మ్యాప్

[ప్రస్తుత ప్రాజెక్టులు][projects] మరియు [తెరిచి ఉన్న సమస్యలు][issues]ని చూడండి, సూచించిన ఫీచర్లు మరియు తెలిసిన సమస్యల జాబితాను తెలుసుకోవడానికి.

## సహకారం

మీరు చేసే ఏ సహకారం **చాలా అభినందనీయమైనది**.

ప్రారంభించడానికి [సహకారం గైడ్‌ను][contributing] చూడండి.

ఈ ప్రాజెక్ట్‌లో ఒక [ప్రవర్తనా నియమావళి][code-of-conduct] ఉంది. ఈ రిపాజిటరీతో సంబంధం పెట్టుకోవడం ద్వారా, మీరు దాని నిబంధనలను పాటించడానికి అంగీకరించారు.

## సంప్రదించండి

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

ప్రాజెక్ట్ లింక్: <https://github.com/pumpncode/template>

## కృతజ్ఞతలు

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## సహకారులు

| పేరు | వెబ్‌సైట్ | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## లైసెన్స్

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
[readme-pa-Arab]: /docs/pa-Arab/readme.md
[readme-pa]: /docs/pa/readme.md
[readme-ko]: /docs/ko/readme.md
[readme-ta]: /docs/ta/readme.md
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[installation]: #ఇన్‌స్టాలేషన్
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
