### 📚 GutenDex Books

A responsive React + TypeScript application that fetches and displays a list of books from the [GutenDex API](https://gutendex.com/). It features book search, filtering by genre, pagination, wishlist functionality, and detailed book pages — all styled using **vanilla CSS** and **Bootstrap**.

---

## 🚀 Live Demo

🔗 [Click here to view live](https://gutendex-books.netlify.app/)

---

## 🧰 Tech Stack

- ⚛️ **React** + **TypeScript**
- 🧭 **React Router DOM**
- 📦 **Redux Toolkit** & **React-Redux**
- 🎨 **Bootstrap 5**
- 💾 **LocalStorage** (wishlist, search/filter persistence)
- 🌐 **Gutendex API**
- ⚡ **Vite** (blazing-fast dev environment)

---

## 🖼️ Features

- ✅ **Book List** – Displays books with title, author, cover, genre & ID.
- 🔍 **Real-time Search** – Filter books by title with debounce.
- ❤️ **Wishlist** – Add/remove books to wishlist, saved in `localStorage`.
- 📄 **Book Detail Page** – Shows full information on a single book.
- 📃 **Pagination** – Navigate through pages of results.
- 💻 **Responsive Design** – Optimized for desktop and mobile views.
- 🎨 **Vanilla CSS + Bootstrap** – Clean UI with production quality styling.

---

## 📁 Project Structure

```
src/
├── app/                 # Redux store & hooks
├── components/          # Shared UI components (Navbar, BookCard)
├── features/books/      # Redux slice (BooksSlice)
├── pages/               # Route-based components (Home, Wishlist, BookPage)
├── types/               # TypeScript interfaces
├── App.tsx              # Root app
├── main.tsx             # App entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/rahmansadaf46/gutendex-books.git
cd gutendex-books
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🧪 API Reference

- [Gutendex API](https://gutendex.com/)
- Example endpoint: `https://gutendex.com/books/`


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
