import React from 'react';
import './imregister.css';
import {Link, useNavigate} from 'react-router-dom';


const ImportReg = () => {
    const navigate = useNavigate();

    return (
        <div className="import-reg-container">
            <div className="import-reg-modal">
                <Link to={'/'} className="import-reg-icon">
                    <svg
                        className="icon-cross"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7A1 1 0 0 0 5.7 7.1L10.6 12l-4.9 4.9a1 1 0 1 0 1.4 1.4L12 13.4l4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z"/>
                    </svg>
                </Link>                
                <p className="import-reg-message">
                    Для размещения рекламы сначала зарегистрируйтесь.
                </p>
                <div className="import-reg-buttons">
                    <button className="import-reg-button"  onClick={() => navigate("/register" )}>Регистрация</button>
                    <button className="import-reg-button" onClick={() => navigate('/login')}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default ImportReg;
