import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ForgotPass from "./pages/forgotPassword/ForgotPass.jsx";
import PinCode from "./pages/pinCode/PinCode.jsx";
import ImportReg from "./pages/importRegister/ImportReg.jsx";
import Reklama from "./reklama/Reklama.jsx";
import Basketbol from "./pages/BasketbollSection/Basketbol.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot" element={<ForgotPass />} />
                <Route path="/pincode" element={<PinCode />} />
                <Route path="/imregister" element={<ImportReg />} />
                <Route path="/reklama" element={<Reklama />} />
                <Route path="/basketbol" element={<Basketbol />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;