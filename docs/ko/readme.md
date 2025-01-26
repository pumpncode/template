# template (템플릿)

[![pumpncode/template 로고][logo-wide]][self]

🌐 번역:

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
**한국어** 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ 번역에 기여하기][contribute-translation]

> [!WARNING]
> 🤖로 표시된 언어는 AI를 통해 번역된 것으로 부정확할 수 있습니다. 이 번역을 개선하기 위한 기여를 환영합니다!

---

이 저장소는 프로젝트의 메인 템플릿 저장소이며, 다른 모든 템플릿의 기원이 됩니다. 따라서 최종 제품에 직접 사용해서는 안 됩니다. 현대적인 JavaScript 프로젝트를 위한 기본 구조와 중요한 구성 파일을 포함하고 있습니다.

---

> [!NOTE]
> 이 문서의 "순서 없는" 목록은 위에서 아래로 우선 순위에 따라 정렬되어 있지만, 이는 고정된 단계의 순서를 의미하지 않기 때문에 Markdown 순서 목록이 아닙니다.
>
> 이 문서는 설정 과정을 빠르게 하기 위해 특정 경우에 이모지 접미사를 사용하여 고려할 수 있거나 고려하지 않을 수도 있는 옵션을 강조합니다:
>
> - 💎 접미사는 **추천** 옵션 또는 추가 단계를 나타냅니다.
> - 🤡 접미사는 가능하지만 **추천하지 않는** 옵션을 나타냅니다.
> - 🍎 (macOS), 🪟 (Windows 및 [WSL][wsl]), 🐧 (Linux)는 **특정 플랫폼**에 대한 정보 또는 설치 단계를 나타냅니다.

## 시작하기

### 사전 요구 사항

개발자라면 아래 항목들을 이미 가지고 있거나 대체 도구를 사용할 가능성이 높습니다. [설치 섹션][installation]으로 바로 건너뛰어도 좋습니다. 이 가이드는 [Windows][windows], 또는 Unix나 Unix와 유사한 운영 체제 ([macOS][mac-os] 등)와 [최신 브라우저][browsehappy]가 설치되어 있다고 가정합니다. 이 프로젝트는 상상할 수 있는 모든 최신 시스템 구성에서 작동해야 하지만, 잘 알려져 있고 인기 있는 구성을 사용하는 것이 가장 좋습니다.

- [GitHub 계정][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [다운로드 인터페이스 사용][node-js-download]
- [소스 코드 편집기][source-code-editors]

### 설치

1. 템플릿 가져오기
	- 템플릿에서 새 저장소 만들기 💎
		1. "Use this template" 버튼 클릭
			!["Use this template" 버튼 스크린샷][screenshot-use-template]
		2. 세부 정보를 입력하고 "Include all branches"를 선택한 후 "Create repository from template" 클릭
			![템플릿에서 새 저장소 생성 화면 스크린샷][screenshot-create-from-template]
		3. 새 저장소를 클론
			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- 클론하여 새 저장소 만들기 🤡
		> 일반 클론(및 포크)은 전체 커밋 기록(및 기타 항목)을 복사하지만 모든 브랜치를 복사하지 않으므로, GitHub 템플릿 기능의 목적을 완전히 무색하게 만듭니다. 더 알아보기 [여기][github-docs-template].
		1. 이 저장소를 새 폴더에 클론
			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. 설정
	1. 새 저장소 폴더로 이동
		```sh
		cd my-new-repository
		```
	2. 프로젝트 초기화
		```sh
		deno task initialize
		```

## 사용법

이 저장소는 템플릿이므로, 사용법은 새 프로젝트의 목적에 따라 달라집니다. 설치가 완료된 후 [deno.json][deno-json]의 작업을 실행하여 템플릿의 모든 기능을 사용할 수 있습니다.

## 로드맵

[현재 프로젝트][projects]와 [열린 문제][issues]를 확인하여 제안된 기능 및 알려진 문제의 목록을 확인하세요.

## 기여

여러분의 기여는 **대단히 환영합니다**.

[기여 가이드][contributing]를 확인하여 시작하세요.

이 프로젝트에는 [행동 강령][code-of-conduct]이 있습니다. 이 저장소와 상호작용함으로써 해당 조건을 준수하는 데 동의하게 됩니다.

## 연락처

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

프로젝트 링크: <https://github.com/pumpncode/template>

## 감사의 말

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## 기여자

| 이름 | 웹사이트 | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## 라이선스

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
[readme-ta]: /docs/ta/readme.md
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[windows]: https://www.microsoft.com/windows
[mac-os]: https://www.apple.com/macos
[browsehappy]: https://browsehappy.com
[installation]: #설치
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
