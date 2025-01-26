# template (mẫu)

[![logo của pumpncode/template][logo-wide]][self]

🌐 Dịch thuật:

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
**Tiếng Việt** 🤖,
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

[✍️ Đóng góp bản dịch][contribute-translation]

> [!WARNING]
> Các ngôn ngữ được đánh dấu bằng 🤖 là bản dịch do AI tạo ra và có thể chứa các lỗi không chính xác. Rất hoan nghênh các đóng góp để cải thiện các bản dịch này!

---

Đây là kho lưu trữ mẫu chính cho các dự án của chúng tôi và là nguồn gốc của tất cả các mẫu khác, vì vậy không nên sử dụng nó trực tiếp cho các sản phẩm cuối cùng. Nó bao gồm cấu trúc cơ bản và các tệp cấu hình quan trọng cho một dự án JavaScript hiện đại.

---

> [!NOTE]
> Các danh sách "không được sắp xếp" trong tài liệu này được sắp xếp theo thứ tự ưu tiên từ trên xuống dưới, nhưng không phải là danh sách có thứ tự trong Markdown vì chúng không đại diện cho một chuỗi bước cố định.
>
> Tài liệu này trong một số trường hợp sử dụng hậu tố emoji để có thể đẩy nhanh quá trình thiết lập của bạn bằng cách làm nổi bật các tùy chọn bạn có thể muốn hoặc không muốn cân nhắc:
>
> - Hậu tố 💎 đánh dấu một tùy chọn hoặc bước bổ sung **được khuyến nghị**.
> - Hậu tố 🤡 đánh dấu một tùy chọn có thể nhưng **không được khuyến nghị**.
> - Hậu tố 🍎 (macOS), 🪟 (Windows và [WSL][wsl]) và 🐧 (Linux) đánh dấu thông tin hoặc bước cài đặt dành riêng cho **các nền tảng cụ thể**.

## Bắt đầu

### Điều kiện tiên quyết

Nếu bạn là nhà phát triển, bạn có thể đã có các công cụ sau hoặc các công cụ thay thế hoạt động, vì vậy hãy chuyển đến [phần cài đặt][installation]. Hướng dẫn này giả định rằng bạn đã cài đặt [Windows][windows], hoặc một hệ điều hành tương tự Unix (ví dụ: [macOS][mac-os]) và một [trình duyệt hiện đại][browsehappy]. Dự án này nên hoạt động trên mọi cấu hình hệ thống hiện đại có thể tưởng tượng được, nhưng cách tốt nhất là sử dụng một cấu hình được thiết lập và phổ biến.

- [Tài khoản GitHub][github-join] 💎
- [Git][git]
	- [macOS][git-macos] 🍎
	- [Windows][git-windows] 🪟
	- [Linux][git-linux] 🐧
- [Deno][deno]
- [Node.js][node-js] 💎
	- [Sử dụng giao diện tải xuống][node-js-download]
- [Trình chỉnh sửa mã nguồn][source-code-editors]

### Cài đặt

1. Lấy mẫu
	- Tạo một kho lưu trữ mới từ mẫu 💎
		1. Nhấp vào "Use this template"
			![Ảnh chụp màn hình nút "Use this template"][screenshot-use-template]
		2. Điền thông tin chi tiết, chọn "Include all branches" và nhấp vào "Create repository from template"
			![Ảnh chụp màn hình tạo một kho lưu trữ mới từ mẫu][screenshot-create-from-template]
		3. Sao chép kho lưu trữ mới của bạn

			```sh
			git clone https://github.com/username/my-new-repository.git
			```

	- Tạo một kho lưu trữ mới bằng cách sao chép 🤡
		> Điều này hoàn toàn đi ngược lại mục đích của tính năng mẫu GitHub, vì các bản sao thông thường (và forks) sao chép toàn bộ lịch sử commit (và các thông tin khác) nhưng không phải tất cả các nhánh, điều này thường không phải là điều bạn muốn khi tạo một dự án mới dựa trên mẫu. Đọc thêm [tại đây][github-docs-template].
		1. Sao chép kho lưu trữ này vào một thư mục mới

			```sh
			git clone https://github.com/pumpncode/template.git my-new-repository
			```

2. Thiết lập
	1. Vào thư mục kho lưu trữ mới của bạn

		```sh
		cd my-new-repository
		```

	2. Khởi tạo dự án

		```sh
		deno task initialize
		```

## Sử dụng

Vì đây là một mẫu, cách sử dụng phụ thuộc vào dự án mới của bạn sẽ làm gì. Sau khi mọi thứ được cài đặt, bạn có thể thử chạy các tác vụ trong [deno.json][deno-json], những tác vụ này sử dụng tất cả các tính năng khác của mẫu này.

## Lộ trình

Xem [các dự án hiện tại][projects] và [các vấn đề mở][issues] để biết danh sách các tính năng được đề xuất và các vấn đề đã biết.

## Đóng góp

Bất kỳ đóng góp nào bạn thực hiện đều được **rất hoan nghênh**.

Xem [hướng dẫn đóng góp][contributing] để bắt đầu.

Dự án này có [bộ quy tắc ứng xử][code-of-conduct]. Bằng cách tương tác với kho lưu trữ này, bạn đồng ý tuân thủ các điều khoản của nó.

## Liên hệ

Pumpn Code - <office@pumpn.net>

Nano Miratus - [@nnmrts][nnmrts-github] - <nanomiratus@gmail.com>

Liên kết dự án: <https://github.com/pumpncode/template>

## Lời cảm ơn

- [unified][unified]
- [remark][remark]
- [Best-README-Template][best-readme-tempplate]

## Người đóng góp

| Tên | Trang web | GitHub |
| -- | -- | -- |
| **Nano Miratus** | <https://pumpn.net/> | [**@nnmrts**][nnmrts-github] |

## Giấy phép

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
[installation]: #cài-đặt
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
