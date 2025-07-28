import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import AccountingSuite from './pages/Products/AccountingSuite';
import InventoryManagement from './pages/Products/InventoryManagement';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="demo" element={<Demo />} />
            <Route path="trial" element={<Demo />} />
            <Route path="products">
              <Route path="accounting-suite" element={<AccountingSuite />} />
              <Route path="inventory-management" element={<InventoryManagement />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;