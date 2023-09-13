import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMe, Resume, Portfolio, Blog, Contact  }  from './Pages/export';
import AnimatedCursor from './Components/AnimatedCursor';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
          </div>
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
