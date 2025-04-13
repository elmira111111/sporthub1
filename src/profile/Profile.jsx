import React, { useState } from 'react';
import './Profile.css';
import search from '../assets/images/search.svg'
import nazad from '../assets/images/nazad.svg'
import profile from '../assets/images/profile.svg'
import otzyv from '../assets/images/otzyv.svg'
import reklama from '../assets/images/reklama.svg'
import oplata from '../assets/images/oplata.svg'

const Profile = () => {
    const [activeMenu, setActiveMenu] = useState('Профиль');

    const menuItems = [
        { name: 'Профиль', icon: profile },
        { name: 'Отзывы', icon: otzyv },
        { name: 'Мои рекламы', icon: reklama },
        { name: 'Оплата', icon: oplata }
    ];

    return (
        <div className="app-container">
            <aside className="sidebar">
                <nav className="menu">
                    <ul>
                        {menuItems.map(item => (
                            <li
                                key={item.name}
                                className={`menu-item ${activeMenu === item.name ? 'active' : ''}`}
                                onClick={() => setActiveMenu(item.name)}
                            >
                                <img src={item.icon} alt="" className="menu-icon" />
                                {item.name}
                            </li>
                        ))}

                        <button className="logout-button">
                            <img src={nazad} alt=""/>
                            Выйти</button>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <header className="header">
                    <button className="back-button">←</button>
                    <div className="search-wrapper">
                        <img src={search} alt="Search" className={'search1'}/>
                        <input
                            type="text"
                            className="search-input"
                        />
                    </div>
                    <button className="search-icon-btn">
                    <img src={search} alt="Search"/>
                    </button>
                    <div className="user-info">
                        <div className="user-text">
                            <div className="user-name">Асанова <br/> Амина</div>
                            <div className="user-location">Бишкек, Кыргызстан</div>
                        </div>
                        <img
                            className="user-avatar"
                            src="https://s3-alpha-sig.figma.com/img/7dc8/4699/3c1bcc4036e5c401ff8bcf93f8c553f8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iZlnzTE804xMuS8fnUbISUsA9-VZkN2Z9Tt8iyZMEYEuXS5qG2~3GJpmtXMcnwgtDvCoGn1ur4b7jTp957KKasOLvlHTwJjyN-lhx28kYbXAUnKEPIUhTwNkRuy~jlQUsxo2f54K~~THhhxWzX95U7c6-csUns2aRVZ80fxf~-gpiGNLFDoFywoxFWLBtxsDYaDovSJ0yRbZ1MfYGMyBcJUsrZqX69C3lQAyNdeqTvVjhEev4FoMoHbS85-bcsLiik1gtFy6yRksGGqBfd5nDZWYzWNEewfOcMV5DFEDx46NX68QmteAOFEJVJhCE2dTiDWJUWmAtZxGVdQbBOzElA__"
                            alt="User Avatar"
                        />
                    </div>
                </header>
            </main>
        </div>
    );
};

export default Profile;
