# template (टेम्पलेट)

[![pumpncode/template चा लोगो][logo-wide]][self]

🌐 भाषांतर:

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
**मराठी** 🤖,
[తెలుగు][readme-te] 🤖,
[پنجابی][readme-pa-Arab] 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ भाषांतरासाठी योगदान द्या][contribute-translation]

> [!WARNING]
> 🤖 चिन्हांकित भाषा AI द्वारे अनुवादित केल्या आहेत आणि त्यात त्रुटी असू शकतात. या भाषांतरांना सुधारण्यासाठी योगदानाचे स्वागत आहे!

---

हे आमच्या प्रकल्पांसाठी मुख्य टेम्पलेट रिपॉझिटरी आहे आणि इतर सर्व टेम्पलेट्सचे स्रोत आहे, त्यामुळे अंतिम उत्पादने तयार करण्यासाठी याचा थेट वापर करू नये. यात आधुनिक JavaScript प्रकल्पासाठी मूलभूत रचना आणि महत्त्वाच्या कॉन्फिगरेशन फाइल्स समाविष्ट आहेत.

---

> [!NOTE]
> या दस्तऐवजातील "अनऑर्डर्ड" यादी वरीपासून खालपर्यंत प्राधान्यानुसार क्रमाने मांडलेल्या आहेत, परंतु Markdown ऑर्डर्ड यादी नाहीत कारण त्या निश्चित क्रमाचे पाऊल दर्शवत नाहीत.
>
> या दस्तऐवजात काही प्रकरणांमध्ये सेटअप प्रक्रिया गतीवान करण्यासाठी इमोजी प्रत्ययांचा वापर केला जातो, ज्यायोगे तुम्ही विचार करू इच्छित असलेल्या किंवा विचार न करण्याच्या पर्यायांवर प्रकाश टाकला जातो:
>
> - प्रत्यय 💎 एक **शिफारस केलेला** पर्याय किंवा अतिरिक्त पाऊल दर्शवितो.
> - प्रत्यय 🤡 एक शक्य परंतु **शिफारस न केलेला** पर्याय दर्शवितो.
> - प्रत्यय 🍎 (macOS), 🪟 (Windows आणि [WSL][wsl]) आणि 🐧 (Linux) **विशिष्ट प्लॅटफॉर्मसाठी** माहिती किंवा स्थापना चरण दर्शवितो.

## सुरुवात करा

### पूर्वअट

जर तुम्ही विकसक असाल, तर कदाचित तुमच्याकडे खालील साधने किंवा कार्यक्षम पर्याय आधीपासूनच असतील, त्यामुळे तुम्ही [इंस्टॉलेशन विभागावर][installation] जाऊ शकता. या मार्गदर्शकात [Windows][windows], किंवा Unix किंवा Unix-सदृश ऑपरेटिंग सिस्टम (उदाहरणार्थ [macOS][mac-os]) आणि [आधुनिक ब्राउझर][browsehappy] स्थापित केलेला आहे असे गृहीत धरले आहे. हा प्रकल्प सर्व आधुनिक प्रणाली कॉन्फिगरेशनवर कार्य करेल, परंतु एक प्रस्थापित आणि लोकप्रिय प्रणाली वापरणे चांगले ठरेल.

- [GitHub खाते][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [डाउनलोड इंटरफेस वापरा][node-js-download]
- [स्रोत कोड संपादक][source-code-editors]

### स्थापना

1. टेम्पलेट मिळवा
	- टेम्पलेटमधून नवीन रिपॉझिटरी तयार करा 💎
		1. "Use this template" वर क्लिक करा
			![Use this template बटणाचा स्क्रीनशॉट][screenshot-use-template]
		2. तपशील भरा, "Include all branches" वर टिकल करा आणि "Create repository from template" वर क्लिक करा
			![टेम्पलेटमधून नवीन रिपॉझिटरी तयार करण्याचा स्क्रीनशॉट][screenshot-create-from-template]
		3. तुमची नवीन रिपॉझिटरी क्लोन करा

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- क्लोन करून नवीन रिपॉझिटरी तयार करा 🤡
		> हे GitHub च्या टेम्पलेट वैशिष्ट्याच्या उद्देशाशी पूर्णपणे विरोधाभासी आहे, कारण सामान्य क्लोन्स (आणि फोर्क्स) संपूर्ण कमिट इतिहास (आणि इतर गोष्टी) कॉपी करतात परंतु सर्व शाखा नाहीत, जे सामान्यतः टेम्पलेट-आधारित नवीन प्रकल्प तयार करताना आदर्श नसते. अधिक वाचा [येथे][github-docs-template].
		1. ही रिपॉझिटरी नवीन फोल्डरमध्ये क्लोन करा

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. सेट करा
	1. तुमच्या नवीन रिपॉझिटरी फोल्डरमध्ये जा

		```sh
		cd my-new-repository
		```

	2. प्रकल्प प्रारंभ करा

		```sh
		deno task initialize
		```

## वापर

हे एक टेम्पलेट असल्याने, त्याचा वापर तुमच्या नवीन प्रकल्पाचे उद्दिष्ट काय आहे यावर अवलंबून असतो. सर्वकाही स्थापित केल्यानंतर, [deno.json][deno-json] मध्ये दिलेली कार्ये चालवून पाहा, जी या टेम्पलेटच्या इतर सर्व वैशिष्ट्यांचा उपयोग करतात.

## रोडमॅप

[सध्याचे प्रकल्प][projects] आणि [उघड्या समस्या][issues] पहा, सुचवलेल्या वैशिष्ट्ये आणि ज्ञात समस्यांची यादी जाणून घेण्यासाठी.

## योगदान

तुमच्या केलेल्या कोणत्याही प्रकारचे योगदान **खूप कौतुकास्पद** आहे.

[योगदान मार्गदर्शक][contributing] पहा, सुरुवात कशी करायची ते जाणून घ्या.

या प्रकल्पामध्ये [आचारसंहिता][code-of-conduct] आहे. या रिपॉझिटरीशी संवाद साधून, तुम्ही त्याच्या अटींशी सहमत आहात.

## संपर्क

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

प्रकल्प लिंक: <https://github.com/pumpncode/template>

## धन्यवाद

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## योगदानकर्ते

| नाव | वेबसाइट | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## परवाना

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
[installation]: #स्थापना
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
