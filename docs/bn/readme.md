# template (টেমপ্লেট)

[![pumpncode/template এর লোগো][logo-wide]][self]

🌐 অনুবাদসমূহ:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
[हिन्दी][readme-hi] 🤖,
**বাংলা** 🤖,
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

[✍️ একটি অনুবাদে অবদান রাখুন][contribute-translation]

> [!WARNING]
> 🤖 চিহ্নিত ভাষাগুলি AI দ্বারা অনূদিত হয়েছে এবং এতে ভুল থাকতে পারে। এই অনুবাদগুলিকে উন্নত করার জন্য অবদান স্বাগত!

---

এটি আমাদের প্রকল্পগুলির জন্য মূল টেমপ্লেট রিপোজিটরি এবং অন্যান্য সমস্ত টেমপ্লেটের উত্স, তাই এটি সরাসরি চূড়ান্ত পণ্যগুলির জন্য ব্যবহার করা উচিত নয়। এটি একটি আধুনিক জাভাস্ক্রিপ্ট প্রকল্পের জন্য মৌলিক কাঠামো এবং গুরুত্বপূর্ণ কনফিগারেশন ফাইল অন্তর্ভুক্ত করে।

---

> [!NOTE]
> এই নথিতে "অনির্ধারিত" তালিকাগুলি উপরে থেকে নিচে অগ্রাধিকার অনুযায়ী সাজানো হয়েছে, তবে এগুলি Markdown অনুক্রমিক তালিকা নয় কারণ এগুলি নির্দিষ্ট ক্রমের ধাপ নির্দেশ করে না।
>
> এই নথিতে কিছু ক্ষেত্রে ইমোজি উপসর্গ ব্যবহার করা হয়েছে আপনার সেটআপ প্রক্রিয়াটি দ্রুত করতে এবং সেই বিকল্পগুলি হাইলাইট করতে যা আপনি বিবেচনা করতে পারেন বা নাও করতে পারেন:
>
> - উপসর্গ 💎 একটি **প্রস্তাবিত** বিকল্প বা অতিরিক্ত ধাপ নির্দেশ করে।
> - উপসর্গ 🤡 একটি সম্ভাব্য কিন্তু **প্রস্তাবিত নয়** বিকল্প নির্দেশ করে।
> - উপসর্গ 🍎 (macOS), 🪟 (Windows এবং [WSL][wsl]), এবং 🐧 (Linux) নির্দিষ্ট প্ল্যাটফর্মের জন্য তথ্য বা ইনস্টলেশন ধাপ নির্দেশ করে।

## শুরু করুন

### প্রয়োজনীয়তা

আপনি যদি একজন ডেভেলপার হন, তবে আপনার ইতিমধ্যেই এইগুলি বা কার্যকর বিকল্পগুলি থাকতে পারে, সুতরাং আপনি [ইনস্টলেশন বিভাগে][installation] যেতে পারেন। এই গাইড ধরে নিচ্ছে যে আপনার কাছে [Windows][windows], বা একটি Unix বা Unix-এর মতো অপারেটিং সিস্টেম ([macOS][mac-os] উদাহরণস্বরূপ) এবং একটি [আধুনিক ব্রাউজার][browsehappy] ইনস্টল করা আছে। এই প্রকল্পটি প্রতিটি কল্পনীয় আধুনিক সিস্টেম কনফিগারেশনে কাজ করা উচিত, তবে আপনার সেরা বাজি একটি সুপ্রতিষ্ঠিত এবং জনপ্রিয় একটি ব্যবহার করা।

- [GitHub অ্যাকাউন্ট][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [ডাউনলোড ইন্টারফেস ব্যবহার করুন][node-js-download]
- [একটি সোর্স-কোড এডিটর][source-code-editors]

### ইনস্টলেশন

1. টেমপ্লেট পান
	- একটি নতুন রিপোজিটরি তৈরি করুন 💎
		1. "Use this template"-এ ক্লিক করুন
			![Use this template বোতামের স্ক্রিনশট][screenshot-use-template]
		2. বিশদ পূরণ করুন, "Include all branches" চেক করুন এবং "Create repository from template"-এ ক্লিক করুন
			![টেমপ্লেট থেকে একটি নতুন রিপোজিটরি তৈরি করার স্ক্রিনশট][screenshot-create-from-template]
		3. আপনার নতুন রিপোজিটরিটি ক্লোন করুন

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- ক্লোন করে নতুন রিপোজিটরি তৈরি করুন 🤡
		> এটি সম্পূর্ণরূপে GitHub টেমপ্লেট বৈশিষ্ট্যের উদ্দেশ্যকে পরাজিত করে, কারণ সাধারণ ক্লোন (এবং forks) পুরো কমিট ইতিহাস (এবং অন্যান্য জিনিস) কপি করে কিন্তু সমস্ত ব্রাঞ্চ নয়, যা সাধারণত একটি নতুন প্রকল্প তৈরির সময় প্রয়োজন হয় না। আরও জানুন [এখানে][github-docs-template]।
		1. এই রিপোজিটরিটি একটি নতুন ফোল্ডারে ক্লোন করুন

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. সেটআপ করুন
	1. আপনার নতুন রিপোজিটরি ফোল্ডারে যান

		```sh
		cd my-new-repository
		```

	2. প্রজেক্ট ইনিশিয়ালাইজ করুন

		```sh
		deno task initialize
		```

## ব্যবহার

কারণ এটি একটি টেমপ্লেট, এর ব্যবহার আপনার নতুন প্রকল্পটি কী করবে তার উপর নির্ভর করে। একবার সবকিছু ইনস্টল হয়ে গেলে, আপনি [deno.json][deno-json]-এ দেওয়া কাজগুলি চালানোর চেষ্টা করতে পারেন, যা এই টেমপ্লেটের প্রতিটি ফিচার ব্যবহার করে।

## রোডম্যাপ

[বর্তমান প্রকল্প][projects] এবং [খোলা সমস্যা][issues] দেখুন প্রস্তাবিত বৈশিষ্ট্য এবং পরিচিত সমস্যার একটি তালিকার জন্য।

## অবদান

আপনার করা যেকোন অবদান **অত্যন্ত প্রশংসিত** হবে।

[অবদান গাইড][contributing] দেখুন শুরু করার জন্য।

এই প্রকল্পে একটি [আচরণবিধি][code-of-conduct] আছে। এই রিপোজিটরির সাথে ইন্টারঅ্যাক্ট করে, আপনি এর শর্তাবলী মেনে চলতে সম্মত হন।

## যোগাযোগ

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

প্রকল্পের লিঙ্ক: <https://github.com/pumpncode/template>

## কৃতজ্ঞতা

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## অবদানকারী

| নাম | ওয়েবসাইট | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## লাইসেন্স

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
[readme-es]: /docs/es/readme.md
[readme-en]: /readme.md
[readme-hi]: /docs/hi/readme.md
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
[installation]: #ইনস্টলেশন
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
