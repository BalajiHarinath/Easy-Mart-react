import "./App.css";
import "./css/main.css";

import {  Switch, Route, Link, Routes} from 'react-router-dom';
import { Nav, Toast, Footer, RestrictAuth, RequireAuth } from "./Components";
import  { Home, Products, SignUp, Login, Wishlist, Cart } from "./Pages";
import { CategoryProvider, BrandProvider } from "./Context";
import MockAPI from "./Components/Mockman/mockman";

function App() {

  return (
    <div className="App">
      <Nav />
      <Toast />
        <Routes>
          <Route path="/mockman" element={<MockAPI />}/>
          
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
              </CategoryProvider>
            } />

          <Route element={<RestrictAuth />}>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/cart" element={<Cart />}/>
          </Route>

        </Routes>    
      <Footer />  
    </div>
   
  );
}

export default App;
