import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Book } from '../types/Book';



const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://gutendex.com/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.log(err)
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error || !book) return <div className="text-center text-danger mt-4">Book not found.</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={book.formats['image/jpeg']}
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{book.title}</h2>
          <p><strong>Author(s):</strong> {book.authors.map(author => author.name).join(', ')}</p>
          {book.summaries.length > 0 && (
            <div className="mb-3">
              <strong>Summary:</strong>
              <p>{book.summaries[0]}</p>
            </div>
          )}
          {book.subjects.length > 0 && (
            <div className="mb-2">
              <strong>Subjects:</strong>
              <ul>
                {book.subjects.map((subj, i) => (
                  <li key={i}>{subj}</li>
                ))}
              </ul>
            </div>
          )}
          {book.bookshelves.length > 0 && (
            <div className="mb-2">
              <strong>Bookshelves:</strong>
              <ul>
                {book.bookshelves.map((shelf, i) => (
                  <li key={i}>{shelf}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-3">
            <h5>Download Links:</h5>
            <ul>
              {Object.entries(book.formats).map(([format, link]) => {
                if (format.includes('zip') || format.includes('image')) return null;
                return (
                  <li key={format}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {format}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
