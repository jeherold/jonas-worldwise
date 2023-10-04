import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <h2>Above browser Router - displays on all routes</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
