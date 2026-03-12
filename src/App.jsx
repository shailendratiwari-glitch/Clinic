import { useState } from 'react';
// IMPORT THE NAVBAR HERE
import '../src/App.css'
import Navbar from './Components/Navbar/Navbar'; 
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Pharmacy from './Components/Pharmacy';
import Expertise from './Components/Expertise/Expertise';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact'
function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* USE THE NAVBAR COMPONENT HERE */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        
        {activeTab === 'pharmacy' && <Pharmacy />}
        {activeTab === 'expertise' && <Expertise/>}
        {activeTab ==='contact' &&  <Contact/>}
      </main>
      <Footer/>
     
    </div>
  );
}

export default App;