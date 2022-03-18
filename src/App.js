import "./App.css";
import "./css/main.css";

import {  Switch, Route, Link, Routes} from 'react-router-dom';
import { Nav, Footer } from "./Components";
import  { Home, Products } from "./Pages";
import { CategoryProvider, BrandProvider } from "./Context";

function App() {

  return (
    <div className="App">
      <Nav />
        <Routes>
          
        <Route path="/" 
            element={
              <CategoryProvider>
                <BrandProvider>
                  <Home />
                </BrandProvider>
              </CategoryProvider>                    
            } />

          <Route path="/products" 
            element={
              <CategoryProvider>
                <BrandProvider>
                  <Products/>
                </BrandProvider>
              </CategoryProvider>} />

        </Routes>    
      <Footer />  
    </div>
   
  );
}

export default App;
