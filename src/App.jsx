
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Shared/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import Product from './pages/Product';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Purchases from './pages/Purchases';
import Register from './pages/Register';
import { getCartThunk } from './store/slices/cart.slice';
import { getAllProductsThunk } from './store/slices/products.slice';

function App() {
  //la peticion se hace en el primer renderizado para evitar posibles bugs
  const dispatch = useDispatch(state => state);

  // useSelector(reducer => reducer)

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/product/:id' element={<Product></Product>}></Route>

        <Route path='/user'>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
        </Route>

        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/purchases' element={<Purchases></Purchases>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
