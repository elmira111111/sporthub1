import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [hovered, setHovered] = useState(false);

    return (
        <div className="login">
            <div className="login-modal">
                <Link to={'/'} className="close-btn">×</Link>
                <h2 className="title">Авторизация</h2>
                <p className="subtitle">Добро пожаловать!</p>
                <p className="subtitle-small">Войдите в свой аккаунт!</p>

                <form className="form">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />

                    <div className="remember-row">
                        <div className="remember-toggle">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"/>
                            </label>
                            <span className="remember-text">Запомнить</span>
                        </div>
                        <Link to="/forgot" className={'login-link'}>
                            Забыли пароль?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className={`submit-btn ${hovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        disabled={!email || !password || !confirm}
                    >
                        Войти
                    </button>
                </form>

                <div className="login-link">
                    Если вы не зарегистрированы, нажмите{' '}
                    <Link to="/register">Регистрация</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
