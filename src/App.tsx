import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import AccountingSuite from "./pages/Products/AccountingSuite";
import InventoryManagement from "./pages/Products/InventoryManagement";

// Feature Pages
import CompleteAccountingSuite from "./pages/features/CompleteAccountingSuite";
import SmartInventoryManagement from "./pages/features/SmartInventoryManagement";
import PayrollHRManagement from "./pages/features/PayrollHRManagement";
import ComprehensiveFinanceTools from "./pages/features/ComprehensiveFinanceTools";
import PurchaseSalesManagement from "./pages/features/PurchaseSalesManagement";
import PointOfSaleSystem from "./pages/features/PointOfSaleSystem";
import ExecutiveReportingApp from "./pages/features/ExecutiveReportingApp";
import OrderTakingApp from "./pages/features/OrderTakingApp";
import CustomerChefDisplaySystems from "./pages/features/CustomerChefDisplaySystems";
import SmartMenuBasedOrdering from "./pages/features/SmartMenuBasedOrdering";
import ReadyMadeEcommercePlatform from "./pages/features/ReadyMadeEcommercePlatform";
import CompleteMarketplaceSoftware from "./pages/features/CompleteMarketplaceSoftware";

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
              <Route
                path="inventory-management"
                element={<InventoryManagement />}
              />
            </Route>
            <Route path="features">
              <Route
                path="complete-accounting-suite"
                element={<CompleteAccountingSuite />}
              />
              <Route
                path="smart-inventory-management"
                element={<SmartInventoryManagement />}
              />
              <Route
                path="payroll-hr-management"
                element={<PayrollHRManagement />}
              />
              <Route
                path="comprehensive-finance-tools"
                element={<ComprehensiveFinanceTools />}
              />
              <Route
                path="purchase-sales-management"
                element={<PurchaseSalesManagement />}
              />
              <Route
                path="point-of-sale-system"
                element={<PointOfSaleSystem />}
              />
              <Route
                path="executive-reporting-app"
                element={<ExecutiveReportingApp />}
              />
              <Route path="order-taking-app" element={<OrderTakingApp />} />
              <Route
                path="customer-chef-display-systems"
                element={<CustomerChefDisplaySystems />}
              />
              <Route
                path="smart-menu-based-ordering"
                element={<SmartMenuBasedOrdering />}
              />
              <Route
                path="ready-made-ecommerce-platform"
                element={<ReadyMadeEcommercePlatform />}
              />
              <Route
                path="complete-marketplace-software"
                element={<CompleteMarketplaceSoftware />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
