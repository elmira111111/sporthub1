
import './forgotPass.css'
import {Link, useNavigate} from "react-router-dom";

const ForgotPass = () => {
    const navigate = useNavigate();
    return (
        <div className="forgot-container">
            <Link to={'/'} className="close-btnForgot">×</Link>
            <div className={'forgot-modal'}>
                <h1 className="title">Забыли пароль</h1>
                <p className="subtitle-forgot">Введите свой адрес электронной почты для процесса проверки, мы вышлем код
                    на ваш адрес электронной
                    почты</p>
                <div>
                    <input type="email" name="email" placeholder="Email" className={'forgot-email'}/>
                    <Link to={'/login'} className={'forgot-link'}>Вернуться на авторизацию</Link>
                    <div className={'underline'}></div>
                </div>
                <button className={'forgot-btn'}  onClick={() => navigate("/pincode" )}>Отправить</button>
            </div>
        </div>
    );
};

export default ForgotPass;