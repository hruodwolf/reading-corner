import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import BooksPage from './pages/books/BooksPage';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import RemindersPage from './pages/reminders/RemidersPage';



const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Header wird auf allen Seiten angezeigt */}
      
      <Routes>
        <Route path="/reading-corner/books" element={<BooksPage />} />
        <Route path="/reading-corner/remiders" element={<RemindersPage />} />
      </Routes>
      
      <Footer /> {/* Footer wird auf allen Seiten angezeigt */}
    </Router>



  );
  

}

export default App
