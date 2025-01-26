# template (टेम्पलेट)

[![pumpncode/template का लोगो][logo-wide]][self]

🌐 अनुवाद:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
**हिन्दी** 🤖,
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

[✍️ योगदान करें][contribute-translation]

> [!WARNING]
> 🤖 वाले भाषाएं AI द्वारा अनुवादित हैं और इनमें अशुद्धियां हो सकती हैं। इन अनुवादों को सुधारने के लिए योगदान का स्वागत है!

---

यह हमारे प्रोजेक्ट्स के लिए मुख्य टेम्पलेट रिपॉजिटरी है और अन्य सभी टेम्पलेट्स का स्रोत है, इसलिए इसे सीधे अंतिम उत्पादों के लिए उपयोग नहीं करना चाहिए। यह आधुनिक जावास्क्रिप्ट प्रोजेक्ट के लिए मूलभूत संरचना और महत्वपूर्ण कॉन्फ़िगरेशन फाइलें शामिल करता है।

---

> [!NOTE]
> इस दस्तावेज़ में "अनऑर्डर्ड" सूची ऊपर से नीचे तक प्राथमिकता के अनुसार क्रमित हैं, लेकिन ये Markdown ऑर्डर्ड सूची नहीं हैं क्योंकि ये निश्चित क्रम के चरणों का संकेत नहीं देती हैं।
>
> इस दस्तावेज़ में कुछ मामलों में इमोजी उपसर्ग का उपयोग किया गया है ताकि आपकी सेटअप प्रक्रिया को तेज किया जा सके और उन विकल्पों को हाइलाइट किया जा सके जिन्हें आप विचार में ले सकते हैं या नहीं:
>
> - उपसर्ग 💎 एक **सुझाया गया** विकल्प या अतिरिक्त कदम को इंगित करता है।
> - उपसर्ग 🤡 एक संभव लेकिन **अनुशंसित नहीं** विकल्प को इंगित करता है।
> - उपसर्ग 🍎 (macOS), 🪟 (Windows और [WSL][wsl]), और 🐧 (Linux) विशेष प्लेटफ़ॉर्म के लिए जानकारी या इंस्टॉलेशन चरणों को इंगित करते हैं।

## शुरुआत करें

### आवश्यकताएँ

यदि आप एक डेवलपर हैं, तो आपके पास पहले से ये उपकरण या इनके विकल्प हो सकते हैं, इसलिए आप [इंस्टॉलेशन सेक्शन][installation] पर जा सकते हैं। यह गाइड मानता है कि आपके पास [Windows][windows] या कोई Unix या Unix-प्रकार का ऑपरेटिंग सिस्टम (उदाहरण के लिए [macOS][mac-os]) और एक [आधुनिक ब्राउज़र][browsehappy] है। यह प्रोजेक्ट हर आधुनिक सिस्टम पर काम करना चाहिए, लेकिन एक लोकप्रिय और स्थापित प्रणाली का उपयोग करना सबसे बेहतर होगा।

- [GitHub खाता][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [डाउनलोड इंटरफेस का उपयोग करें][node-js-download]
- [एक सोर्स कोड एडिटर][source-code-editors]

### इंस्टॉलेशन

1. टेम्पलेट प्राप्त करें
	- टेम्पलेट से नया रिपॉजिटरी बनाएं 💎
		1. "Use this template" पर क्लिक करें
			!["Use this template" बटन का स्क्रीनशॉट][screenshot-use-template]
		2. विवरण भरें, "Include all branches" को चेक करें और "Create repository from template" पर क्लिक करें
			![टेम्पलेट से नया रिपॉजिटरी बनाने की स्क्रीन का स्क्रीनशॉट][screenshot-create-from-template]
		3. अपने नए रिपॉजिटरी को क्लोन करें

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- क्लोनिंग के द्वारा नया रिपॉजिटरी बनाएं 🤡
		> यह पूरी तरह से GitHub टेम्पलेट फीचर के उद्देश्य को विफल कर देता है, क्योंकि सामान्य क्लोन (और फोर्क्स) पूरे कमिट हिस्ट्री (और अन्य चीजें) की प्रतिलिपि बनाते हैं, लेकिन सभी शाखाओं को नहीं, जो आमतौर पर एक नए प्रोजेक्ट के लिए आदर्श नहीं होता है। और अधिक पढ़ें [यहाँ][github-docs-template]।
		1. इस रिपॉजिटरी को एक नए फोल्डर में क्लोन करें

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. इसे सेटअप करें
	1. अपने नए रिपॉजिटरी फोल्डर में जाएं

		```sh
		cd my-new-repository
		```

	2. प्रोजेक्ट को इनिशियलाइज़ करें

		```sh
		deno task initialize
		```

## उपयोग

यह एक टेम्पलेट है, इसलिए इसका उपयोग इस बात पर निर्भर करता है कि आपका नया प्रोजेक्ट क्या करेगा। एक बार सब कुछ स्थापित हो जाने के बाद, आप [deno.json][deno-json] में दिए गए टास्क्स को चलाने की कोशिश कर सकते हैं, जो इस टेम्पलेट की हर विशेषता का उपयोग करते हैं।

## रोडमैप

[वर्तमान प्रोजेक्ट्स][projects] और [खुले मुद्दे][issues] देखें, प्रस्तावित सुविधाओं और ज्ञात समस्याओं की सूची प्राप्त करने के लिए।

## योगदान

आपके द्वारा किया गया कोई भी योगदान **बहुत सराहनीय** होगा।

[योगदान गाइड][contributing] को देखें कि कैसे शुरुआत करें।

इस प्रोजेक्ट में एक [आचार संहिता][code-of-conduct] है। इस रिपॉजिटरी के साथ इंटरैक्ट करके, आप इसके नियमों का पालन करने के लिए सहमत होते हैं।

## संपर्क करें

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

प्रोजेक्ट लिंक: <https://github.com/pumpncode/template>

## धन्यवाद

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## योगदानकर्ता

| नाम | वेबसाइट | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## लाइसेंस

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
[readme-es]: /docs/es/readme.md
[readme-en]: /readme.md
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
[installation]: #इंस्टॉलेशन
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
