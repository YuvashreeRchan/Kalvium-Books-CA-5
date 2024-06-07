import { useState,useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

const HomePage = ({ searchTerm }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
            const fetchBooks = async () => {
            const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
                headers: { 'Authorization': 'whatever-you-want' }
            });
            console.log(result.data.books);
            setBooks(result.data.books);
            };
            fetchBooks();
        }, []);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
        <BookList books={filteredBooks} />
        </div>
    );
};

export default HomePage;
