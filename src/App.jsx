import RegisterPage from '../src/pages/register/RegisterPage'
import LoginPage from './pages/login/LoginPage';
import ForgotPass from "./pages/forgotPassword/ForgotPass.jsx";
import PinCode from "./pages/pinCode/PinCode.jsx";
import ImportReg from "./pages/importRegister/ImportReg.jsx";
import Reklama from "./reklama/Reklama.jsx";
import Basketbol from "./pages/BasketbollSection/Basketbol.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GymHero from './pages/home/GymHero.jsx';
import Layout from './layout/Layout.jsx';
import Sports from './sports/Sports.jsx';
import ReclamaCards from './reklama/reklamaCards/ReclamaCards.jsx';
import { Home } from 'lucide-react';


const MainLayout = ({ children }) => (
  <>
    {children}
    <HomePage/>

    <Sports/>
  </>

);

function App() {
    return (
        <BrowserRouter   BrowserRouter>
        <Routes>
            <Route path='/' element= {<Layout/>}>
            <Route path='/' element= {<GymHero/>}/>    
            {/* <Route path='/sport' element={<Sports/>}/>              */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot" element={<ForgotPass />} />
                <Route path="/pincode" element={<PinCode />} />
                <Route path="/imregister" element={<ImportReg />} />
                <Route path="/reklama" element={<Reklama />} />
                <Route path="/basketbol" element={<Basketbol />} />

                
            
                    </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;

