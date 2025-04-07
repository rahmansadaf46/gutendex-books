import React from 'react';
import { Book } from '../types/Book';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleWishlist } from '../features/books/BooksSlice';
import { Link } from 'react-router-dom';

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(state => state.books.wishlist);
  const isWishlisted = wishlist.includes(book.id);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={book.formats["image/jpeg"]} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <Link to={`/book/${book.id}`}><h5 className="card-title">{book.title}</h5></Link>
            <p className="card-text">
              <small className="text-muted">{book.authors.map(a => a.name).join(', ')}</small><br />
              <small>{book.subjects[0] || 'N/A'}</small>
            </p>
            <button className="btn btn-outline-danger" onClick={() => dispatch(toggleWishlist(book.id))}>
              {isWishlisted ? '♥ Remove' : '♡ Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
