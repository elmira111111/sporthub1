import React, { useRef, useState } from 'react';
import './pinCode.css';

const PinCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, ''); // только цифры
        if (!value) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // автофокус на следующий инпут
        if (index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newCode = [...code];
            newCode[index] = '';
            setCode(newCode);

            if (index > 0 && !code[index]) {
                inputsRef.current[index - 1].focus();
            }
        }
    };

    return (
        <div className="pinCode container">
            <div className="pinCode-modal">
                <h3 className="pinCode-title">Введите 4-значный код</h3>
                <p className="pinCode-subtitle">
                    На адрес электронной почты, который вы указали, должен был прийти четырёхзначный код.
                </p>

                <div className="pinCode-inputs">
                    {[...Array(4)].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength="1"
                            className="pinCode-input"
                            value={code[i]}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            ref={(el) => (inputsRef.current[i] = el)}
                        />
                    ))}
                </div>

                <div className="pinCode-buttons">
                    <button className="pinCode-button cancel">Отмена</button>
                    <button className="pinCode-button confirm">Подтвердить</button>
                </div>
            </div>
        </div>
    );
};

export default PinCode;
