# template (modelo)

[![logo do pumpncode/template][logo-wide]][self]

🌐 Traduções:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
[Español][readme-es] 🤖,
[English][readme-en],
[हिन्दी][readme-hi] 🤖,
[বাংলা][readme-bn] 🤖,
**Português** 🤖,
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

[✍️ Contribua com uma tradução][contribute-translation]

> [!WARNING]
> Idiomas marcados com 🤖 são traduções geradas por IA e podem conter imprecisões. Contribuições para melhorar estas traduções são bem-vindas!

---

Este é o repositório principal de modelos para nossos projetos e a origem de todos os outros modelos, portanto, não deve ser usado diretamente para produtos finais. Ele inclui a estrutura básica e os arquivos de configuração importantes para um projeto moderno de JavaScript.

---

> [!NOTE]
> As listas "não ordenadas" neste documento estão organizadas por prioridade, de cima para baixo, mas não são listas ordenadas no Markdown, pois não representam sequências fixas de etapas.
>
> Este documento usa sufixos de emoji em alguns casos para possivelmente acelerar seu processo de configuração destacando opções que você pode ou não querer considerar:
>
> - O sufixo 💎 indica uma opção ou etapa extra **recomendada**.
> - O sufixo 🤡 indica uma opção possível, mas **não recomendada**.
> - Os sufixos 🍎 (macOS), 🪟 (Windows e [WSL][wsl]) e 🐧 (Linux) marcam informações ou etapas de instalação específicas de **plataformas específicas**.

## Introdução

### Pré-requisitos

Se você é desenvolvedor, provavelmente já possui os seguintes itens ou alternativas funcionais, então pode pular para a [seção de instalação][installation]. Este guia pressupõe que você possui [Windows][windows], ou um sistema operacional Unix ou similar ao Unix (por exemplo, [macOS][mac-os]) e um [navegador moderno][browsehappy]. Este projeto deve funcionar em todas as configurações modernas imagináveis, mas a melhor aposta seria usar uma bem estabelecida e popular.

- [Conta no GitHub][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Use a interface de download][node-js-download]
- [Um editor de código-fonte][source-code-editors]

### Instalação

1. Obtenha o modelo
	- Crie um novo repositório a partir do modelo 💎
		1. Clique em "Use this template"
			![Captura de tela do botão "Use this template"][screenshot-use-template]
		2. Preencha os detalhes, marque "Include all branches" e clique em "Create repository from template"
			![Captura de tela da tela de criação de um novo repositório a partir do modelo][screenshot-create-from-template]
		3. Clone seu novo repositório

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Crie um novo repositório clonando 🤡
		> Isso derrota completamente o propósito do recurso de modelo do GitHub, porque clones normais (e forks) copiam todo o histórico de commits (e outras coisas), mas não todos os branches, o que normalmente não é o desejado ao criar um novo projeto com base em um boilerplate. Leia mais [aqui][github-docs-template].
		1. Clone este repositório para uma nova pasta

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Configure-o
	1. Acesse a pasta do seu novo repositório

		```sh
		cd my-new-repository
		```

	2. Inicialize o projeto

		```sh
		deno task initialize
		```

## Uso

Como este é um modelo, o uso depende do que seu novo projeto fará. Depois de tudo instalado, você pode tentar executar as tarefas no [deno.json][deno-json], que utilizam todos os outros recursos deste modelo.

## Planejamento

Veja os [projetos atuais][projects] e os [problemas abertos][issues] para obter uma lista de recursos propostos e problemas conhecidos.

## Contribuindo

Qualquer contribuição que você fizer será **enormemente apreciada**.

Confira o [guia de contribuição][contributing] para começar.

Este projeto tem um [código de conduta][code-of-conduct]. Ao interagir com este repositório, você concorda em seguir seus termos.

## Contato

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Link do projeto: <https://github.com/pumpncode/template>

## Agradecimentos

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Contribuidores

| Nome | Website | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Licença

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
[installation]: #instalação
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
