import './App.css';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import Populer from './Componants/Populer';
import Recommended from './Componants/Recommended';
import Fixedwidth from './Fixedwidth';

function App() {
  return (
    <>
      <Fixedwidth>
        <Navbar />
        <Home />
        <Populer />
        <Recommended />
      </Fixedwidth>
      <Footer />
    </>
  );
}

export default App;
