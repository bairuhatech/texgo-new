import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SmoothScrollProvider from './SmoothScrollProvider';
import { ScrollProgress } from './ScrollAnimations';
import AIChatbot from './AIChatbot';

const Layout: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 relative">
        <ScrollProgress />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </SmoothScrollProvider>
  );
};

export default Layout;