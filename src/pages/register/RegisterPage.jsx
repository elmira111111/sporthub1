import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Введите корректный email';
        }
        if (password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }
        if (!firstName.trim()) {
            newErrors.firstName = 'Имя обязательно';
        }
        if (!lastName.trim()) {
            newErrors.lastName = 'Фамилия обязательна';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Введите корректный номер телефона';
        }
        if (!birthDate) {
            newErrors.birthDate = 'Дата рождения обязательна';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Регистрация прошла успешно!');
            // Здесь можно отправить данные на сервер
        }
    };

    return (
        <div className="register-container">
                <div className="register-modal">
                    <Link to="/" className="close-btn" aria-label="Закрыть">×</Link>
                    <h1 className="title-register">Регистрация</h1>
                    <p className="subtitle-register">Создать аккаунт</p>

                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Подтвердите пароль"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                        </div>

                        <div className="form-register">
                            <div className="form-input">
                                <label className={'label-register'}>Имя <span style={{color: 'red'}}>*</span></label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                            </div>

                            <div className="form-input">
                                <label className={'label-register'}>Фамилия<span style={{color: 'red',marginLeft: '5px'}}>*</span></label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="form-register">
                            <div className="form-input">
                                <label className={'label-register'}>Телефон<span style={{color: 'red',marginLeft: '5px'}}>*</span></label>
                                <input
                                    type="tel"
                                    placeholder="+996"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && <span className="error-text">{errors.phone}</span>}
                            </div>

                            <div className="form-input">
                                <label className={'label-register'}>Дата рождения<span
                                    style={{color: 'red',marginLeft: '5px'}}>*</span></label>
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                                {errors.birthDate && <span className="error-text">{errors.birthDate}</span>}
                            </div>
                        </div>

                        <div className="remember-register">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span className="slider"/>
                            </label>
                            <span className="remember-text">Запомнить</span>
                        </div>

                        <button type="submit" className="submit-btn-register">Зарегистрироваться</button>

                        <p className="register-link">
                            Уже есть аккаунт? <Link to="/login">Авторизация</Link>
                        </p>
                    </form>
                </div>
        </div>
    );
};

export default RegisterPage;
