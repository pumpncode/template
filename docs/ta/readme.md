# template (டெம்ப்ளேட்)

[![pumpncode/template லோகோ][logo-wide]][self]

🌐 மொழிபெயர்ப்புகள்:

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
**தமிழ்** 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ மொழிபெயர்ப்பில் பங்களிக்கவும்][contribute-translation]

> [!WARNING]
> 🤖 குறியீடு செய்யப்பட்ட மொழிகள் AI மூலம் மொழிபெயர்க்கப்பட்டவை மற்றும் தவறுகள் இருக்கலாம். இந்த மொழிபெயர்ப்புகளை மேம்படுத்த பங்களிப்பு வரவேற்கப்படுகிறது!

---

இது எங்கள் திட்டங்களுக்கான மைய டெம்ப்ளேட் சேமிப்பு மற்றும் மற்ற அனைத்து டெம்ப்ளேட்டுகளின் மூலமாகும், எனவே இதை இறுதி தயாரிப்புகளுக்கு நேரடியாக பயன்படுத்தக்கூடாது. இது ஒரு நவீன JavaScript திட்டத்திற்கான அடிப்படை அமைப்பு மற்றும் முக்கிய கட்டமைப்பு கோப்புகளை உள்ளடக்குகிறது.

---

> [!NOTE]
> இந்த ஆவணத்தில் "அவை வரிசைப்படுத்தப்படாத" பட்டியல்கள் முக்கியத்துவத்தின் அடிப்படையில் மேல் இருந்து கீழ் வரிசைப்படுத்தப்பட்டுள்ளன, ஆனால் இவை Markdown வரிசைப்படுத்தப்பட்ட பட்டியல்கள் அல்ல, ஏனெனில் இவை நிலையான படிகளின் வரிசையை குறிக்கவில்லை.
>
> இந்த ஆவணம் சில வழிகளில் உங்கள் அமைப்பின் செயல்முறையை விரைவாக்க உதவ எமோஜி பின்னணிகளைப் பயன்படுத்துகிறது, நீங்கள் பரிசீலிக்கக்கூடிய அல்லது பரிசீலிக்கக்கூடாத விருப்பங்களை சிறப்பிக்கிறது:
>
> - 💎 பின்னணி ஒரு **பரிந்துரைக்கப்பட்ட** விருப்பம் அல்லது கூடுதல் படியைக் குறிக்கிறது.
> - 🤡 பின்னணி ஒரு சாத்தியமான ஆனால் **பரிந்துரைக்கப்படாத** விருப்பத்தை குறிக்கிறது.
> - 🍎 (macOS), 🪟 (Windows மற்றும் [WSL][wsl]), 🐧 (Linux) ஆகியவை **சிறப்பு தளங்களுக்கு** விதிவிலக்கான தகவல்கள் அல்லது நிறுவல் படிகளை குறிக்கின்றன.

## தொடங்குதல்

### முன்னேற்பாடுகள்

நீங்கள் ஒரு டெவலப்பர் என்றால், கீழ்க்காணும் அல்லது மாற்று கருவிகள் ஏற்கனவே உங்களிடம் இருக்கும், எனவே [நிறுவல் பிரிவுக்கு][installation] நேரடியாக செல்லலாம். இந்த வழிகாட்டி உங்கள் கணினியில் [Windows][windows], அல்லது ஒரு Unix அல்லது Unix போன்ற இயக்க முறைமை ([macOS][mac-os] எடுத்துக்காட்டாக) மற்றும் ஒரு [நவீன உலாவி][browsehappy] இருப்பதாக எதிர்பார்க்கிறது. இந்த திட்டம் ஒவ்வொரு நவீன கணினி அமைப்பிலும் செயல்பட முடியும், ஆனால் உங்கள் சிறந்த தேர்வு ஒரு நன்கு நிறுவப்பட்ட மற்றும் பிரபலமான ஒன்றை பயன்படுத்துவதாக இருக்கும்.

- [GitHub கணக்கு][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [இணைப்புகளைப் பயன்படுத்தவும்][node-js-download]
- [ஒரு மூலக் குறியீடு தொகுப்பி][source-code-editors]

### நிறுவல்

1. டெம்ப்ளேட்டை பெறுங்கள்
	- டெம்ப்ளேட்டிலிருந்து புதிய சேமிப்பை உருவாக்கவும் 💎
		1. "Use this template" ஐ கிளிக் செய்யவும்
			![Use this template பட்டன் ஸ்க்ரீன்ஷாட்][screenshot-use-template]
		2. விவரங்களை பூர்த்தி செய்யவும், "Include all branches" ஐ சரிபார்க்கவும் மற்றும் "Create repository from template" ஐ கிளிக் செய்யவும்
			![Create a new repository from template ஸ்க்ரீன்ஷாட்][screenshot-create-from-template]
		3. உங்கள் புதிய சேமிப்பை கிளோன் செய்யவும்
			```sh
			git clone https://github.com/username/my-new-repository.git
			```
	- கிளோனிங் மூலம் புதிய சேமிப்பை உருவாக்கவும் 🤡
		> இது GitHub டெம்ப்ளேட் அம்சத்தின் நோக்கத்திற்கு எதிராகும், ஏனெனில் சாதாரண கிளோன்கள் (மற்றும் ஃபோர்க்கள்) முழு கமிட் வரலாற்றையும் (மற்றும் பிறவற்றையும்) நகலெடுக்கின்றன, ஆனால் அனைத்து கிளைகளையும் அல்ல. மேலும் படிக்கவும் [இங்கே][github-docs-template].
		1. இந்த சேமிப்பை ஒரு புதிய கோப்புறையில் கிளோன் செய்யவும்
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. அமைத்தல்
	1. உங்கள் புதிய சேமிப்பு கோப்புறைக்கு சென்று உள்ளீடு செய்யவும்
		```sh
		cd my-new-repository
		```
	2. திட்டத்தை ஆரம்பிக்கவும்
		```sh
		deno task initialize
		```

## பயன்பாடு

இது ஒரு டெம்ப்ளேட் என்பதால், இதன் பயன்பாடு உங்கள் புதிய திட்டம் என்ன செய்யப் போகிறது என்பதன் அடிப்படையில் இருக்கும். அனைத்தும் நிறுவப்பட்ட பிறகு, [deno.json][deno-json] இல் உள்ள பணிகளை இயக்க முயற்சிக்கலாம், இது இந்த டெம்ப்ளேட்டின் மற்ற அனைத்து அம்சங்களையும் பயன்படுத்துகிறது.

## சாலை வரைபடம்

சூசிக்கப்பட்ட அம்சங்கள் மற்றும் அறியப்பட்ட பிரச்சினைகளின் பட்டியலுக்காக [தற்போதைய திட்டங்கள்][projects] மற்றும் [திறந்த பிரச்சினைகள்][issues] ஐப் பாருங்கள்.

## பங்களிப்பு

நீங்கள் செய்யும் எந்த பங்களிப்பும் **மிகுந்த மதிப்புள்ள**.

பணிகள் தொடங்க [பங்களிப்பு வழிகாட்டி][contributing] பார்க்கவும்.

இந்த திட்டத்திற்கு ஒரு [நடத்தை விதிமுறை][code-of-conduct] உள்ளது. இந்த சேமிப்புடன் தொடர்பு கொண்டால், அதன் விதிமுறைகளை நீங்கள் பின்பற்ற ஒப்புக்கொள்கிறீர்கள்.

## தொடர்பு

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

திட்ட இணைப்பு: <https://github.com/pumpncode/template>

## நன்றி

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## பங்களிப்பாளர்கள்

| பெயர் | இணையதளம் | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## உரிமம்

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
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[installation]: #நிறுவல்
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
