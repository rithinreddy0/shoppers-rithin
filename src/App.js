import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Shopcategory from './components/Shopcategory'
import Product from './components/Product'
import Shop from './components/Shop'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import LoginSignup from './components/LoginSignup'
import { useState } from 'react';
function App() {
  const [loggedin,setloggedin]  = useState(false);
  useState(()=>{
    auth();
  })
  async function auth(){
    
  }
  return (
    <>
    <Navbar loggedin={loggedin} setloggedin={setloggedin}></Navbar>
    <Routes>
    <Route path='/' element={<Shop />}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/kids' element={<Shopcategory category="Kids"/>}></Route>
      <Route path='/men' element={<Shopcategory category="Men"/>}></Route>
      <Route path='/women' element={<Shopcategory category="Women"/>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/login' element={<LoginSignup loggedin={loggedin} setloggedin={setloggedin}/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
