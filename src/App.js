
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { auth } from './firebase'
import Login from './components/login/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Profile from './components/profile/Profile';
import Reviews from './components/reviews/Reviews';
import CreateOrder from './components/createOrder/CreateOrder';
import Orders from './components/orders/Orders';
function App() {


  const [user, setUser] = useState({})
  // const [cart, setCart] = useState([]);


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)


      } else {

      }
    });
  }, [user])

  return (
    <BrowserRouter>

      <ToastContainer />

      <Header user={user} />

      {/* <Services /> */}

      <Routes>

        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />

        <Route element={<ProtectedRoutes user={user} />}>
          {/* <Route path="/cart" element={<Cart cart={cart} user={user} />} /> */}
          <Route path="/orders" element={<Orders user={user} />} />
          <Route path="/reviews" element={<Reviews user={user} />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/order" element={<CreateOrder user={user} />} />
          {/* <Route path="create-product" element={<CreateProduct user={user} />} /> */}

        </Route>

      </Routes>

      {/* home */}
      {/* services */}
      {/* testimornial */}
      {/* order */}

      <Footer />

    </BrowserRouter>
  );
}

export default App;
