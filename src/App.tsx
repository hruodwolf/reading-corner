import './App.css'
import BookComponent from './BookComponent';
import { BOOKS } from './data';

function App() {

  return (
    <>
      <div>
        <h1>Book List</h1>
        {BOOKS.map((book) => <BookComponent key={book.title} {...book} />)}
      </div>
    </>
  )
}

export default App
