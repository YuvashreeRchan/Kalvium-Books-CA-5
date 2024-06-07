import "./Book.css";
import StarIcon from '@mui/icons-material/Star';

//Book Component
const Book = ({ book }) => {
    const price = 'Free';
    const rating = book.averageRating ? book.averageRating : 'N/A';
    return (
        <div className="book">
        <img src={book.imageLinks.thumbnail} alt={book.title} />
        <h2>{book.title}</h2>
        <div className="book-info">
            <span>{rating}</span>
            {rating !== 'N/A' && <StarIcon className="star-icon" />}
            <span className="price">{price}</span>
        </div>
        </div>
    );
};

const BookList = ({ books }) => {
    return (
        <div className="book-list">
        {books.map(book => (
            <Book key={book.id} book={book} />
        ))}
        </div>
    );
};

export default BookList;