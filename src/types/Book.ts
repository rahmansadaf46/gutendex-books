export interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  summaries: string[];
  bookshelves: string[];
  formats: {
    "image/jpeg"?: string;
    [key: string]: string | undefined;
  };
  download_count: number;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
  page: number;
  search: string;
  genre: string;
  wishlist: number[];
}