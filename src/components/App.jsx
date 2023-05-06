import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';

import CreateBook from './CreateBook';
import ShowBookList from './ShowBookList';
import ShowBookDetails from './ShowBookDetails';
import UpdateBookInfo from './UpdateBookInfo';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<ShowBookList />} />
                    <Route path='/create-book' element={<CreateBook />} />
                    <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
                    <Route path='/show-book/:id' element={<ShowBookDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;