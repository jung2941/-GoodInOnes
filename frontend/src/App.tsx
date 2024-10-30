import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ProductRegistration from './pages/ProductRegistration';
import ProductList from './pages/ProductList';
import SalesPage from './pages/SalesPage';
import SalesHistory from './pages/SalesHistory';
import WebsiteManagement from './pages/WebsiteManagement';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/mypage/*" element={
            <div className="flex w-full">
              <Sidebar />
              <div className="flex-1">
                <Routes>
                  <Route path="sales" element={<SalesPage />} />
                  <Route path="sales-history" element={<SalesHistory />} />
                  <Route path="product-list" element={<ProductList />} />
                  <Route path="product-registration" element={<ProductRegistration />} />
                  <Route path="website-management" element={<WebsiteManagement />} />
                </Routes>
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;