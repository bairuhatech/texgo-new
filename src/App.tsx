import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import IndustrySolutions from './components/IndustrySolutions';
import GlobalMap from './components/GlobalMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress } from './components/ScrollAnimations';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import SectionTransition from './components/SectionTransition';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <SmoothScrollProvider>
        <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 relative">
          <ScrollProgress />
          <Header />
          <Hero />
          
          <SectionTransition variant="wave" color="#f8fafc" height={80} />
          <Features />
          
          <SectionTransition variant="curve" color="#ecfdf5" height={100} />
          <IndustrySolutions />
          
          <SectionTransition variant="diagonal" color="#f1f5f9" height={90} />
          <GlobalMap />
          
          <SectionTransition variant="zigzag" color="#f8fafc" height={120} />
          <Contact />
          
          <SectionTransition variant="wave" color="#111827" height={100} />
          <Footer />
        </div>
      </SmoothScrollProvider>
    </AppProvider>
  );
}

export default App;