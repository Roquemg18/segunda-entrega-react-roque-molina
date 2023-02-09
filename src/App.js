import NavBar from './componentes/header/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './componentes/main/productos/itemListContainer/ItemListContainer'
import Footer from './componentes/footer/Footer';
import PagHome from './componentes/main/home/PagHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/main/productos/itemDetailContainer/ItemDetailContainer';
import Nosotros from './componentes/main/nosotros/Nosotros';
import LogOut from './componentes/main/login/LogOut';
import Login from './componentes/main/login/Login'
import Carrito from './componentes/main/carrito/Carrito';
import CartProvider from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
        <Route
          path="/"
          element={
          <PagHome/> 
          } 
        />
        <Route
        path='/productos'
        element={
          <ItemListContainer palabra="Productos"/>
        }
        />
        <Route
          path="/productos/:categoryName"
          element={
            <ItemListContainer palabra="Productos"/>
          }
        />

        <Route
        path="/detail/:id"
        element={<ItemDetailContainer/>}
        />
      
      <Route
      path='/nosotros'
      element={<Nosotros/>}
      />

      <Route
      path='/register'
      element={<LogOut/>}
      />
      <Route
      path='/login'
      element={<Login/>}
      />
      <Route
      path='/carrito'
      element={<Carrito/>}
      />
        </Routes>
      </CartProvider>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  );
}


export default App;
