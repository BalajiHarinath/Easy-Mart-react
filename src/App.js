import "./App.css";
import "./css/main.css";

import {  Switch,
          Route,
          Link, 
          Routes} from 'react-router-dom';
import { Nav } from "./Components/Header/Nav";
import { Footer } from "./Components/Footer/Footer";
import  { Home } from "./Pages/Home/Home";
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