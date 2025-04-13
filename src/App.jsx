import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './footer/Footer.jsx';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ForgotPass from "./pages/forgotPassword/ForgotPass.jsx";
import PinCode from "./pages/pinCode/PinCode.jsx";
import ImportReg from "./pages/importRegister/ImportReg.jsx";
import Reklama from "./reklama/Reklama.jsx";
import Basketbol from "./pages/BasketbollSection/Basketbol.jsx";
import Sports from './sports/Sports.jsx';
import Profile from "./profile/Profile.jsx";


const MainLayout = ({ children }) => (
    <>
        {children}
        <Sports />
        <Footer />
    </>
);


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/forgot" element={<ForgotPass/>}/>
                <Route path="/pincode" element={<PinCode/>}/>
                <Route path="/imregister" element={<ImportReg/>}/>
                <Route path="/reklama" element={<Reklama/>}/>
                <Route path="/basketbol" element={<Basketbol/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

