import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import {Navbar} from './components/Navbar.jsx';
import { Home } from './components/home';
import {Registro} from './components/Registro';
import {Footer} from './components/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="page">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
