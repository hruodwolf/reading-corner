import BookComponent from './BookComponent';
import { BOOKS } from './data';
  
 const BooksPage: React.FC = () => {

  return (
    <>
      <div>
        <h1>Book List</h1>
        <ul>
          {BOOKS.map((book) => <BookComponent key={book.title} {...book} />)}
        </ul>
      </div>
    </>
  )

}

export default BooksPage;