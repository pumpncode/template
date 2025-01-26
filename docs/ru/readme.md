# template (шаблон)

[![логотип pumpncode/template][logo-wide]][self]

🌐 Переводы:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
[हिन्दी][readme-hi] 🤖,
[বাংলা][readme-bn] 🤖,
[Português][readme-pt] 🤖,
**Русский** 🤖,
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

[✍️ Внести вклад в перевод][contribute-translation]

> [!WARNING]
> Языки, помеченные 🤖, являются переводами, созданными ИИ, и могут содержать неточности. Внесение улучшений приветствуется!

---

Это основной репозиторий шаблонов для наших проектов и источник всех остальных шаблонов, поэтому он не должен использоваться напрямую для конечных продуктов. Он включает базовую структуру и важные конфигурационные файлы для современного проекта на JavaScript.

---

> [!NOTE]
> "Неупорядоченные" списки в этом документе отсортированы по приоритету сверху вниз, но не являются упорядоченными списками Markdown, так как они не обозначают фиксированную последовательность шагов.
>
> В некоторых случаях в этом документе используются суффиксы с эмодзи, чтобы, возможно, ускорить ваш процесс настройки, выделяя варианты, которые вы можете или не можете учитывать:
>
> - Суффикс 💎 указывает на **рекомендуемый** вариант или дополнительный шаг.
> - Суффикс 🤡 указывает на возможный, но **не рекомендуемый** вариант.
> - Суффиксы 🍎 (macOS), 🪟 (Windows и [WSL][wsl]) и 🐧 (Linux) указывают информацию или шаги установки, уникальные для **определенных платформ**.

## Начало работы

### Предварительные условия

Если вы разработчик, вероятно, у вас уже есть перечисленные ниже инструменты или их аналоги, поэтому можете перейти к [разделу установки][installation]. В этом руководстве предполагается, что у вас установлен [Windows][windows] или операционная система Unix или подобная Unix (например, [macOS][mac-os]) и [современный браузер][browsehappy]. Этот проект должен работать на любой современной конфигурации системы, но предпочтительно использовать хорошо зарекомендовавшую себя и популярную платформу.

- [Аккаунт на GitHub][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Используйте интерфейс загрузки][node-js-download]
- [Редактор исходного кода][source-code-editors]

### Установка

1. Получите шаблон
	- Создайте новый репозиторий на основе шаблона 💎
		1. Нажмите "Use this template"
			![Скриншот кнопки "Use this template"][screenshot-use-template]
		2. Заполните детали, отметьте "Include all branches" и нажмите "Create repository from template"
			![Скриншот создания нового репозитория из шаблона][screenshot-create-from-template]
		3. Клонируйте ваш новый репозиторий

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Создайте новый репозиторий клонированием 🤡
		> Это полностью противоречит цели функции шаблонов GitHub, так как обычные клоны (и форки) копируют всю историю коммитов (и другие данные), но не все ветки, что обычно не подходит для создания нового проекта на основе шаблона. Подробнее читайте [здесь][github-docs-template].
		1. Клонируйте этот репозиторий в новую папку

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Настройте
	1. Перейдите в папку вашего нового репозитория

		```sh
		cd my-new-repository
		```

	2. Инициализируйте проект

		```sh
		deno task initialize
		```

## Использование

Так как это шаблон, его использование зависит от того, для чего предназначен ваш новый проект. После установки вы можете попробовать выполнить задачи из [deno.json][deno-json], которые используют все остальные функции этого шаблона.

## План

Смотрите [текущие проекты][projects] и [открытые проблемы][issues] для списка предложенных функций и известных проблем.

## Вклад

Любой ваш вклад будет **очень ценен**.

Ознакомьтесь с [руководством по внесению вклада][contributing], чтобы начать.

В этом проекте действует [кодекс поведения][code-of-conduct]. Взаимодействуя с этим репозиторием, вы соглашаетесь соблюдать его условия.

## Контакты

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Ссылка на проект: <https://github.com/pumpncode/template>

## Благодарности

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Участники

| Имя | Вебсайт | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Лицензия

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
[installation]: #установка
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
