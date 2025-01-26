# template (şablon)

[![pumpncode/template logosu][logo-wide]][self]

🌐 Çeviriler:

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
**Türkçe** 🤖,
[मराठी][readme-mr] 🤖,
[తెలుగు][readme-te] 🤖,
[پنجابی][readme-pa-Arab] 🤖,
[ਪੰਜਾਬੀ][readme-pa] 🤖,
[한국어][readme-ko] 🤖,
[தமிழ்][readme-ta] 🤖,
[مصرى][readme-arz] 🤖,
[Deutsch][readme-de] 🤖,
[Français][readme-fr] 🤖

[✍️ Çeviriye katkıda bulunun][contribute-translation]

> [!WARNING]
> 🤖 ile işaretlenmiş diller, AI tarafından çevrilmiştir ve doğruluk içermeyebilir. Bu çevirileri geliştirmek için katkılar memnuniyetle karşılanır!

---

Bu, projelerimiz için ana şablon deposudur ve diğer tüm şablonların kaynağıdır, bu nedenle doğrudan nihai ürünler için kullanılmamalıdır. Modern bir JavaScript projesi için temel yapı ve önemli yapılandırma dosyalarını içerir.

---

> [!NOTE]
> Bu belgede "sırasız" listeler, yukarıdan aşağıya öncelik sırasına göre sıralanmıştır, ancak sabit adımları temsil etmediği için Markdown sıralı listeleri değildir.
>
> Bu belge, kurulum sürecinizi hızlandırmak için belirli durumlarda emoji ekleri kullanır ve dikkate almak isteyebileceğiniz veya istemeyebileceğiniz seçenekleri vurgular:
>
> - 💎 eki, **önerilen** bir seçeneği veya ek bir adımı belirtir.
> - 🤡 eki, olası ancak **önerilmeyen** bir seçeneği belirtir.
> - 🍎 (macOS), 🪟 (Windows ve [WSL][wsl]), ve 🐧 (Linux) ekleri, **belirli platformlara** özgü bilgi veya kurulum adımlarını işaret eder.

## Başlarken

### Ön Koşullar

Bir geliştiriciyseniz, muhtemelen aşağıdaki araçlara veya işlevsel alternatiflerine zaten sahipsinizdir, bu nedenle [Kurulum bölümüne][installation] geçebilirsiniz. Bu kılavuz, [Windows][windows] veya bir Unix veya Unix benzeri işletim sistemi (örneğin [macOS][mac-os]) ve [modern bir tarayıcı][browsehappy] kurulu olduğunu varsayar. Bu proje, tüm modern sistem yapılandırmalarında çalışmalıdır, ancak iyi bilinen ve popüler bir yapılandırmayı kullanmanız önerilir.

- [GitHub Hesabı][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [İndirme arayüzünü kullanın][node-js-download]
- [Bir kaynak kod editörü][source-code-editors]

### Kurulum

1. Şablonu alın
	- Şablondan yeni bir depo oluşturun 💎
		1. "Use this template" butonuna tıklayın
			![Use this template butonunun ekran görüntüsü][screenshot-use-template]
		2. Ayrıntıları doldurun, "Include all branches" kutusunu işaretleyin ve "Create repository from template" butonuna tıklayın
			![Şablondan yeni bir depo oluşturma ekranının ekran görüntüsü][screenshot-create-from-template]
		3. Yeni deponuzu klonlayın

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Klonlama yoluyla yeni bir depo oluşturun 🤡
		> Bu, GitHub şablon özelliğinin amacına tamamen aykırıdır, çünkü normal klonlar (ve forklar), tüm commit geçmişini (ve diğer şeyleri) kopyalar ancak tüm dalları kopyalamaz, bu da genellikle bir şablona dayalı yeni bir proje oluştururken istenmez. Daha fazla bilgi için [burayı][github-docs-template] okuyun.
		1. Bu depoyu yeni bir klasöre klonlayın

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Yapılandırma
	1. Yeni deponuzun klasörüne gidin

		```sh
		cd my-new-repository
		```

	2. Projeyi başlatın

		```sh
		deno task initialize
		```

## Kullanım

Bu bir şablon olduğu için, kullanımı yeni projenizin ne yapacağına bağlıdır. Her şey kurulduktan sonra, [deno.json][deno-json] içindeki görevleri çalıştırmayı deneyebilirsiniz; bu görevler, bu şablonun tüm özelliklerini kullanır.

## Yol Haritası

Önerilen özellikler ve bilinen sorunların bir listesi için [güncel projelere][projects] ve [açık sorunlara][issues] bakın.

## Katkıda Bulunma

Yaptığınız her katkı **büyük takdirle karşılanır**.

Başlamak için [katkı kılavuzuna][contributing] bakın.

Bu projede bir [davranış kuralları][code-of-conduct] vardır. Bu depoyla etkileşimde bulunarak, şartlarına uymayı kabul edersiniz.

## İletişim

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Proje Bağlantısı: <https://github.com/pumpncode/template>

## Teşekkürler

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Katkıda Bulunanlar

| İsim | Web Sitesi | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Lisans

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
[installation]: #kurulum
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
[projects]: https
