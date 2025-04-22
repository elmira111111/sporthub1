import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ForgotPass from "./pages/forgotPassword/ForgotPass.jsx";
import PinCode from "./pages/pinCode/PinCode.jsx";
import ImportReg from "./pages/importRegister/ImportReg.jsx";
import Reklama from "./reklama/Reklama.jsx";
import Basketbol from "./pages/BasketbollSection/Basketbol.jsx";
import GymHero from './pages/home/GymHero.jsx';
import Layout from './layout/Layout.jsx';
import PersonalInfo from './menu/personalinfo/PersonalInfo.jsx'
import Inbox from './menu/inbox/Inbox.jsx';
// import Sports from './sports/Sports.jsx';



// const MainLayout = ({ children }) => (
//   <>
//     {children}
//     <Sports />
//     <HomePage/>



//     <Sports/>
//   </>

// );



function App() {
    return (
        <BrowserRouter BrowserRouter>
            
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
                      <Route path="/personal" element={<PersonalInfo />} />
                    
                
            
                    </Route>

            </Routes>
        </BrowserRouter>
    );
}



export default App;

