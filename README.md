# UnifyApps

Cổng tập hợp các ứng dụng web tĩnh (HTML · CSS · JavaScript), triển khai bằng GitHub Pages.

## Cấu trúc

```
unifyapps/
├── index.html            # Trang landing / danh mục ứng dụng
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── apps.js       # DANH SÁCH ỨNG DỤNG (sửa ở đây)
│       └── main.js
├── apps/
│   └── demo-app/         # Mỗi app một thư mục, có index.html
└── .nojekyll
```

## Thêm ứng dụng mới

1. Upload thư mục app vào `apps/ten-app/` (bắt buộc có `index.html`).
2. Thêm một mục trong `assets/js/apps.js`:
   ```js
   { id: "ten-app", name: "Tên app", description: "Mô tả", category: "Tiện ích",
     icon: "🧮", url: "apps/ten-app/", status: "live" }   // live | beta | soon
   ```
3. Commit → GitHub Pages tự cập nhật sau ~1 phút.

## Chạy thử local

Mở trực tiếp `index.html` bằng trình duyệt, hoặc:

```bash
python -m http.server 8080
```
