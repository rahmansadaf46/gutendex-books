import { useAppSelector } from '../app/hooks';
import BookCard from '../components/BookCard';

const WishlistPage = () => {
  const { books, wishlist } = useAppSelector(state => state.books);
  const wishlistedBooks = books.filter(book => wishlist.includes(book.id));

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistedBooks.length ? wishlistedBooks.map(book => <BookCard key={book.id} book={book} />) : <p>No books in wishlist.</p>}
    </div>
  );
};

export default WishlistPage;