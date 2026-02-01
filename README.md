# Quiz Vui Lập Trình

Ứng dụng quiz lập trình web được xây dựng bằng React + Vite. Gồm 12 câu hỏi về JavaScript, HTML và thuật toán.

## Tính năng

- **12 câu hỏi** về lập trình: JavaScript, kiểu dữ liệu, thuật toán, cấu trúc dữ liệu, HTML...
- **Chọn đáp án** và nhận phản hồi ngay (đúng/sai)
- **Điều hướng** giữa các câu: nút Quay Lại, Kế Tiếp
- **Màn hình kết quả** hiển thị số câu trả lời đúng sau khi hoàn thành
- **Xem Lại**: xem lại các câu đã làm (giữ nguyên đáp án)
- **Làm Lại**: làm lại quiz từ đầu (reset điểm và đáp án)

## Công nghệ

- React 19
- Vite 7
- ESLint

## Cài đặt & Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy chế độ phát triển
npm run dev

# Build cho production
npm run build

# Xem bản preview sau khi build
npm run preview
```

## Cấu trúc dự án

```
src/
├── App.jsx          # Component chính, hiển thị tiêu đề và Quiz
├── main.jsx         # Entry point
├── index.css        # Style toàn cục
└── components/
    ├── Quiz.jsx     # Logic quiz, câu hỏi, điều hướng
    └── Results.jsx  # Màn hình kết quả, nút Xem Lại / Làm Lại
```

## Scripts

| Script           | Mô tả                     |
|------------------|---------------------------|
| `npm run dev`    | Chạy dev server (HMR)     |
| `npm run build`  | Build production          |
| `npm run preview`| Xem bản build             |
| `npm run lint`   | Chạy ESLint               |
