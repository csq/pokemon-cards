import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
