import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={[<Login/>,<Footer/>]}></Route>
          <Route path="/signup" element={[<Signup/>,<Footer/>]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
