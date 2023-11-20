import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/RegisterPage/registerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import VerifyOtp from "./components/verify/verifyOtp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="/login" element={<MyForm />} />
            <Route path="/verify" element={<VerifyOtp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
