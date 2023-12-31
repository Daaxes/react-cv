import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      
    </>
  )
}


export default App;
