import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        birthDate: '',
        remember: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({
            ...prev,
            phone: value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email.includes('@')) {
            newErrors.email = 'Введите корректный email';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }
        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Имя обязательно';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Фамилия обязательна';
        }
        if (!formData.phone) {
            newErrors.phone = 'Введите корректный номер телефона';
        }
        if (!formData.birthDate) {
            newErrors.birthDate = 'Дата рождения обязательна';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Данные формы:', formData);
            // Здесь можно отправить данные на сервер
        }
    };

    return (
        <div className="register container">
            <div className="register-modal">
                <Link to={'/'} className="close-btn">×</Link>

                <h1 className="title">Регистрация</h1>
                <p className="subtitle">Создать аккаунт</p>

                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Подтвердите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-input">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Имя *"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={"first-name-input"}
                            />
                            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                        </div>

                        <div className="form-input">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Фамилия *"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={"last-name-input"}
                            />
                            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                        </div>
                    </div>


                    <div className="form-row">
                        <div>
                            <PhoneInput
                                international
                                defaultCountry="KG"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="Номер телефона *"
                            />
                            {errors.phone && <span className="error-text">{errors.phone}</span>}
                        </div>

                        <div>
                            <input
                                type="date"
                                name="birthDate"
                                placeholder="Дата рождения *"
                                value={formData.birthDate}
                                onChange={handleChange}
                            />
                            {errors.birthDate && <span className={"error-text"}>{errors.birthDate}</span>}
                        </div>
                    </div>

                    <div className="remember-row">
                        <div className="remember-toggle">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                                <span className="slider"/>
                            </label>
                            <span className="remember-text">Запомнить</span>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Зарегистрироваться</button>

                    <p className="login-link">
                        Уже есть аккаунт? <Link to="/login">Авторизация</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
