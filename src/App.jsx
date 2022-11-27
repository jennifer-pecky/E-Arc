import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin, Cart, Contact, Home } from './pages';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="*" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
