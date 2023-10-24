import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./pages/Store/Store";
import MenuItem from "./components/Menu-Item/MenuItem";
import Category from "./pages/Category/Category";
import { store } from "./store/store";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
          <ToastContainer />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/*" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu-item" element={<MenuItem />} />
            <Route path="/category/*" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
