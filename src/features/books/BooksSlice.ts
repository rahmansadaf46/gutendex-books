import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BooksState } from '../../types/Book';



const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
  page: 1,
  search: '',
  genre: '',
  wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async ({ page = 1, search = '' }: { page: number; search?: string }) => {
    const response = await axios.get(`https://gutendex.com/books/?page=${page}&search=${search}`);
    return response.data.results;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    toggleWishlist(state, action) {
      const id = action.payload;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter(wid => wid !== id);
      } else {
        state.wishlist.push(id);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBooks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch books';
    });
  },
});

export const { setSearch, setGenre, toggleWishlist, setPage } = booksSlice.actions;
export default booksSlice.reducer;