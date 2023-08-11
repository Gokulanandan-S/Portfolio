
import './App.css';
import './index.css';
import Layout from './Components/Layout.js';
import Profile from './Components/Profile.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} /> 
        <Route path="Resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
