# &rlm;template (قالب)

[![شعار pumpncode/template][logo-wide]][self]

🌐 الترجمات:

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
[پنجابی][readme-pa-Arab] 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
**مصرى** 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ شارك في الترجمة][contribute-translation]

> [!WARNING]
> اللغات المميزة بـ 🤖 هي ترجمات تمت بواسطة الذكاء الاصطناعي وقد تحتوي على أخطاء. ندعوكم للمساهمة لتحسين هذه الترجمات!

---

ده المستودع الرئيسي لقوالب مشاريعنا وأصل كل القوالب الأخرى، علشان كده مش المفروض يتستخدم مباشرة للمنتجات النهائية. المستودع ده بيحتوي على الهيكل الأساسي والملفات الهامة لتكوين مشروع JavaScript حديث.

---

> [!NOTE]
> القوائم "غير المرتبة" في المستند ده مرتبة حسب الأولوية من أعلى لأسفل، لكنها مش قوائم مرتبة بـ Markdown علشان مش بتمثل تسلسل ثابت للخطوات.
>
> المستند ده بيستخدم رموز تعبيرية (إيموجي) في بعض الحالات علشان يسرع عملية الإعداد بتسليط الضوء على الخيارات اللي ممكن تكون عايز تفكر فيها أو لا:
>
> - 💎 الرمز ده معناه أن الخيار أو الخطوة الإضافية **موصى بها**.
> - 🤡 الرمز ده معناه أن الخيار ممكن لكن **غير موصى به**.
> - 🍎 (macOS)، 🪟 (Windows و[WSL][wsl])، و🐧 (Linux) بيعبروا عن خطوات التثبيت أو المعلومات الخاصة بأنظمة معينة.

## البداية

### المتطلبات الأساسية

لو انت مطور، على الأرجح عندك الأدوات المطلوبة أو بدائلها العملية، تقدر تتخطى للقسم الخاص بـ [التثبيت][installation]. الدليل ده بيفترض إنك عندك [Windows][windows] أو نظام تشغيل شبيه بـ Unix ([macOS][mac-os] مثلاً) ومثبت عليه [متصفح حديث][browsehappy]. المشروع ده شغال على كل التكوينات الحديثة، لكن الأفضل إنك تستخدم نظام معروف وشائع.

- [حساب GitHub][github-join] 💎
- [Git][git]
	- &rlm;[macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [استخدم واجهة التنزيل][node-js-download]
- [محرر كود مصدر][source-code-editors]

### التثبيت

1. احصل على القالب
	- أنشئ مستودع جديد من القالب 💎
		1. اضغط على "Use this template"
			![صورة زر "Use this template"][screenshot-use-template]
		2. املأ التفاصيل، حدد "Include all branches"، واضغط على "Create repository from template"
			![صورة إنشاء مستودع جديد من القالب][screenshot-create-from-template]
		3. استنسخ المستودع الجديد بتاعك
			```sh
			git clone https://github.com/username/my-new-repository.git
			```
	- أنشئ مستودع جديد عن طريق الاستنساخ 🤡
		> ده بيتعارض مع الهدف الأساسي لميزة القالب على GitHub، لأن الاستنساخ العادي (والتفرعات) بينسخ كل تاريخ الالتزامات (والحاجات التانية) لكن مش كل الفروع، وده غالباً مش اللي انت عايزه لما بتبدأ مشروع جديد معتمد على قالب. اقرأ أكتر [هنا][github-docs-template].
		1. استنسخ المستودع ده في مجلد جديد
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```
2. اضبط الإعدادات
	1. ادخل مجلد المستودع الجديد بتاعك
		```sh
		cd my-new-repository
		```
	2. قم بتشغيل الإعداد الأولي للمشروع
		```sh
		deno task initialize
		```

## الاستخدام

بما إن ده قالب، الاستخدام بيعتمد على نوع المشروع الجديد اللي انت عايز تعمله. بعد ما تنزل كل حاجة، ممكن تجرب تشغيل المهام اللي موجودة في [deno.json][deno-json]، المهام دي بتستفيد من كل مميزات القالب ده.

## خارطة الطريق

شوف [المشاريع الحالية][projects] و[المشاكل المفتوحة][issues] عشان قائمة الميزات المقترحة والمشاكل المعروفة.

## المساهمة

أي مساهمة منك هتكون **مقدرة جدًا**.

اتفرج على [دليل المساهمة][contributing] عشان تبدأ.

المشروع ده ليه [مدونة سلوك][code-of-conduct]. لما تتعامل مع المستودع ده، بتوافق إنك تلتزم بالشروط.

## تواصل معنا

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

رابط المشروع: <https://github.com/pumpncode/template>

## الشكر والتقدير

- &rlm;[unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## المساهمين

| الاسم | الموقع | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## الترخيص

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
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[installation]: #التثبيت
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
