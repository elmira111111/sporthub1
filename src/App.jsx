import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ForgotPass from "./pages/forgotPassword/ForgotPass.jsx";
import PinCode from "./pages/pinCode/PinCode.jsx";
import ImportReg from "./pages/importRegister/ImportReg.jsx";
import Reklama from "./reklama/Reklama.jsx";
import Basketbol from "./pages/BasketbollSection/Basketbol.jsx";
import GymHero from './pages/home/GymHero.jsx';
import Layout from './layout/Layout.jsx';
import Profile from "./adminProfile/profile/Profile.jsx";
import LayoutAdmin from "./adminProfile/LayoutAdmin.jsx";
import Trenery from "./adminProfile/trenery/Trenery.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot" element={<ForgotPass />} />
                <Route path="/pincode" element={<PinCode />} />
                <Route path="/imregister" element={<ImportReg />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<GymHero />} />
                    <Route path="/reklama" element={<Reklama />} />
                    <Route path="/basketbol" element={<Basketbol />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    {/*<Route path="profile" element={<Profile />} />*/}
                    <Route path="trenery" element={<Trenery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
