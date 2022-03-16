import "./App.css";
import "./css/main.css";

import {  Switch, Route, Link, Routes} from 'react-router-dom';
import { Nav, Footer } from "./Components/index";
import  { Home } from "./Pages/index";
import { CategoryProvider } from "./Context/CategoriesContext";

function App() {

  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" 
            element={
              <CategoryProvider>
                <Home />
              </CategoryProvider>                    
            } />
        </Routes>    
      <Footer />  
    </div>
   
  );
}

export default App;
