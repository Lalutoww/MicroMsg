import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/navbar/NavBar.jsx';
import Home from './Components/home/Home.jsx';
import About from './Components/about/About.jsx'


function App() {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
         </Routes>
      </>
   );
}

export default App;
