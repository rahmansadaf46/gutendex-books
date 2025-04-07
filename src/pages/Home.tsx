import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BookCard from '../components/BookCard';
import { fetchBooks, setPage, setSearch } from '../features/books/BooksSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { books, loading, search, page } = useAppSelector(state => state.books);

  // Local input state for debouncing
  const [inputValue, setInputValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(inputValue));
    }, 500); // 500ms debounce

    return () => clearTimeout(timer); // clear timeout if input changes before 500ms
  }, [inputValue, dispatch]);

  useEffect(() => {
    dispatch(fetchBooks({ page, search }));
  }, [dispatch, page, search]);

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {loading ? <p>Loading...</p> : books.map(book => <BookCard key={book.id} book={book} />)}
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={() => dispatch(setPage(page - 1))} disabled={page <= 1}>Prev</button>
        <span>Page {page}</span>
        <button className="btn btn-secondary" onClick={() => dispatch(setPage(page + 1))}>Next</button>
      </div>
    </div>
  );
};

export default Home;
