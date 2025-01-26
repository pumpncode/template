# &rlm;template (سانچا)

[![pumpncode/template کا لوگو][logo-wide]][self]

🌐 ترجمے:

&rlm;[简体中文][readme-zh-cn] 🤖,
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
**پنجابی** 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ ترجمہ میں تعاون کریں][contribute-translation]

> [!WARNING]
> 🤖 کے ساتھ نشان زد زبانیں AI کے ذریعے ترجمہ کی گئی ہیں اور ان میں غلطیاں ہو سکتی ہیں۔ ان تراجم کو بہتر بنانے کے لیے تعاون کی حوصلہ افزائی کی جاتی ہے!

---

یہ ہمارے پروجیکٹس کے لیے مرکزی سانچا ذخیرہ ہے اور دیگر تمام سانچوں کا ماخذ ہے، لہذا اسے حتمی مصنوعات کے لیے براہ راست استعمال نہیں کرنا چاہیے۔ اس میں ایک جدید JavaScript پروجیکٹ کے لیے بنیادی ساخت اور اہم تشکیل فائلیں شامل ہیں۔

---

> [!NOTE]
> اس دستاویز میں "غیر ترتیب شدہ" فہرستیں ترجیح کے لحاظ سے اوپر سے نیچے ترتیب دی گئی ہیں، لیکن یہ Markdown کی ترتیب شدہ فہرستیں نہیں ہیں کیونکہ یہ فکسڈ قدموں کی ترتیب کی نمائندگی نہیں کرتی ہیں۔
>
> یہ دستاویز کچھ معاملات میں آپ کے سیٹ اپ کے عمل کو تیز کرنے کے لیے ایموجی لاحقے استعمال کرتی ہے، جو اختیارات کو نمایاں کرتی ہے جو آپ پر غور کر سکتے ہیں یا نہیں:
>
> - لاحقہ 💎 ایک **تجویز کردہ** آپشن یا اضافی قدم کو ظاہر کرتا ہے۔
> - لاحقہ 🤡 ایک ممکنہ لیکن **تجویز نہ کردہ** آپشن کو ظاہر کرتا ہے۔
> - لاحقے 🍎 (macOS)، 🪟 (Windows اور [WSL][wsl])، اور 🐧 (Linux) مخصوص پلیٹ فارمز کے لیے معلومات یا تنصیب کے اقدامات کی نشاندہی کرتے ہیں۔

## شروعات کریں

اگر آپ ایک ڈویلپر ہیں، تو امکان ہے کہ آپ کے پاس یہ یا متبادل حل موجود ہوں، براہ کرم [تنصیب کے حصے][installation] کو چھوڑ دیں۔ یہ گائیڈ توقع کرتا ہے کہ آپ کے پاس [Windows][windows]، یا ایک یونکس یا یونکس جیسا آپریٹنگ سسٹم (مثال کے طور پر [macOS][mac-os]) اور ایک [جدید براؤزر][browsehappy] موجود ہو۔ یہ پروجیکٹ ہر ممکنہ جدید سسٹم کنفیگریشن پر کام کرنا چاہیے، لیکن آپ کا بہترین انتخاب ایک مستند اور مقبول سسٹم استعمال کرنا ہوگا۔

### ضروریات

- &rlm;[GitHub اکاؤنٹ][github-join] 💎
- [Git][git]
	- &rlm;[macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [ڈاؤنلوڈ انٹرفیس استعمال کریں][node-js-download]
- [ایک سورس کوڈ ایڈیٹر][source-code-editors]

### تنصیب

1. سانچا حاصل کریں
	- سانچے سے ایک نیا ذخیرہ بنائیں 💎
		1. &rlm;"Use this template" پر کلک کریں
			![Use this template بٹن کا اسکرین شاٹ][screenshot-use-template]
		2. تفصیلات پُر کریں، "Include all branches" کو چیک کریں اور "Create repository from template" پر کلک کریں
			![سانچے سے نیا ذخیرہ بنانے کا اسکرین شاٹ][screenshot-create-from-template]
		3. اپنے نئے ذخیرے کو کلون کریں
			```sh
			git clone https://github.com/username/my-new-repository.git
			```
	- کلوننگ کے ذریعے ایک نیا ذخیرہ بنائیں 🤡
		> یہ GitHub کے سانچہ فیچر کے مقصد کے خلاف ہے، کیونکہ عام کلونز (اور فورکس) پورے کمیٹ ہسٹری (اور دیگر چیزوں) کو کاپی کرتے ہیں لیکن تمام شاخوں کو نہیں، جو کہ عام طور پر سانچے پر مبنی نیا پروجیکٹ بناتے وقت مثالی نہیں ہوتا۔ مزید پڑھیں [یہاں][github-docs-template]۔
		1. اس ذخیرے کو ایک نئے فولڈر میں کلون کریں
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```
2. ترتیب دیں
	1. اپنے نئے ذخیرے کے فولڈر میں جائیں
		```sh
		cd my-new-repository
		```
	2. پروجیکٹ کو ابتدائی کریں
		```sh
		deno task initialize
		```

## استعمال

چونکہ یہ ایک سانچہ ہے، اس کا استعمال اس بات پر منحصر ہے کہ آپ کا نیا پروجیکٹ کیا کرے گا۔ سب کچھ انسٹال کرنے کے بعد، آپ [deno.json][deno-json] میں موجود ٹاسک کو چلا کر دیکھ سکتے ہیں، جو اس سانچے کی دیگر تمام خصوصیات کا استعمال کرتے ہیں۔

## روڈ میپ

[موجودہ پروجیکٹس][projects] اور [کھلے مسائل][issues] دیکھیں، تجویز کردہ خصوصیات اور معلوم مسائل کی فہرست کے لیے۔

## تعاون

آپ کی طرف سے کیا گیا کوئی بھی تعاون **بہت سراہا جائے گا**۔

[تعاون گائیڈ][contributing] دیکھیں، شروع کرنے کے لیے۔

اس پروجیکٹ کے لیے ایک [ضابطہ اخلاق][code-of-conduct] ہے۔ اس ذخیرے کے ساتھ بات چیت کرتے ہوئے، آپ اس کی شرائط پر عمل کرنے سے اتفاق کرتے ہیں۔

## رابطہ کریں

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

پروجیکٹ لنک: <https://github.com/pumpncode/template>

## شکریہ

- &rlm;[unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## شراکت دار

| نام | ویب سائٹ | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## لائسنس

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
[readme-pa]: /docs/pa/readme.md
[readme-ko]: /docs/ko/readme.md
[readme-ta]: /docs/ta/readme.md
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[windows]: https://www.microsoft.com/windows
[mac-os]: https://www.apple.com/macos
[browsehappy]: https://browsehappy.com
[installation]: #تنصيب
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
