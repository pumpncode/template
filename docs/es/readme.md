# template (plantilla)

[![logo of pumpncode/template][logo-wide]][self]

🌐 Traducciones:

[简体中文][readme-zh-cn] 🤖,
[繁體中文][readme-zh-tw] 🤖,
[粵語][readme-zh-hk] 🤖,
**Español** 🤖,
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
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ Contribuir con una traducción][contribute-translation]

> [!WARNING]
> Los idiomas marcados con 🤖 son traducciones generadas por IA y pueden contener imprecisiones. ¡Se agradecen las contribuciones para mejorar estas traducciones!

---

Este es el repositorio principal de plantillas para nuestros proyectos y el origen de todas las demás plantillas, por lo que no debe usarse directamente para productos finales. Incluye la estructura básica y los archivos de configuración importantes para un proyecto moderno de JavaScript.

---

> [!NOTE]
> Las listas "no ordenadas" en este documento están ordenadas por prioridad de arriba hacia abajo, pero no son listas ordenadas en Markdown porque no representan secuencias fijas de pasos.
>
> Este documento utiliza sufijos de emoji en algunos casos para posiblemente acelerar tu proceso de configuración destacando opciones que podrías o no querer considerar:
>
> - El sufijo 💎 marca una opción o paso adicional **recomendado**.
> - El sufijo 🤡 marca una opción posible pero **no recomendada**.
> - Los sufijos 🍎 (macOS), 🪟 (Windows y [WSL][wsl]) y 🐧 (Linux) marcan información o pasos de instalación específicos de **plataformas concretas**.

## Comenzando

### Requisitos previos

Si eres desarrollador, probablemente ya tengas estos elementos o alternativas funcionales, así que puedes saltar a la [sección de instalación][installation]. Esta guía supone que tienes instalado [Windows][windows], o un sistema operativo Unix o similar a Unix (por ejemplo, [macOS][mac-os]) y un [navegador moderno][browsehappy]. Este proyecto debería funcionar en cualquier configuración moderna imaginable, pero tu mejor opción sería usar una bien establecida y popular.

- [Cuenta de GitHub][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Usa la interfaz de descarga][node-js-download]
- [Un editor de código fuente][source-code-editors]

### Instalación

1. Obtener la plantilla
	- Crear un nuevo repositorio a partir de la plantilla 💎
		1. Haz clic en "Use this template"
			![Captura de pantalla del botón "Use this template"][screenshot-use-template]
		2. Completa los detalles, marca "Include all branches" y haz clic en "Create repository from template"
			![Captura de pantalla de la pantalla para crear un nuevo repositorio a partir de una plantilla][screenshot-create-from-template]
		3. Clona tu nuevo repositorio

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Crear un nuevo repositorio clonando 🤡
		> Esto derrota completamente el propósito de la función de plantillas de GitHub, porque los clones normales (y forks) copian todo el historial de commits (y otras cosas) pero no todas las ramas, lo cual normalmente no es lo que deseas cuando creas un nuevo proyecto basado en una plantilla. Lee más [aquí][github-docs-template].
		1. Clona este repositorio en una nueva carpeta

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Configúralo
	1. Entra en la carpeta de tu nuevo repositorio

		```sh
		cd my-new-repository
		```

	2. Inicializa el proyecto

		```sh
		deno task initialize
		```

## Uso

Como esto es una plantilla, su uso depende de lo que hará tu nuevo proyecto. Una vez que todo esté instalado, puedes intentar ejecutar las tareas en el archivo [deno.json][deno-json], las cuales utilizan todas las demás características de esta plantilla.

## Planificación

Consulta los [proyectos actuales][projects] y los [problemas abiertos][issues] para obtener una lista de características propuestas y problemas conocidos.

## Contribuyendo

Cualquier contribución que hagas será **enormemente apreciada**.

Consulta la [guía de contribución][contributing] para comenzar.

Este proyecto tiene un [código de conducta][code-of-conduct]. Al interactuar con este repositorio, aceptas seguir sus términos.

## Contacto

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Enlace del proyecto: <https://github.com/pumpncode/template>

## Agradecimientos

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Contribuidores

| Nombre | Sitio web | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Licencia

[0BSD][license] © [Pumpn Code][pumpn-website]

[logo-wide]: /media/images/logo/wide.svg
[self]: https://github.com/pumpncode/template
[readme-zh-cn]: /docs/zh-CN/readme.md
[readme-zh-tw]: /docs/zh-TW/readme.md
[readme-zh-hk]: /docs/zh-HK/readme.md
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
[readme-arz]: /docs/arz/readme.md
[readme-de]: /docs/de/readme.md
[readme-fr]: /docs/fr/readme.md
[contribute-translation]: https://github.com/pumpncode/.github/blob/main/contributing.md#translations
[wsl]: https://docs.microsoft.com/en-us/windows/wsl/about
[installation]: #instalación
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
