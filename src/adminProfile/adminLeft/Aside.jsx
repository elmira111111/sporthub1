import './adminLeft.css';
import nazad from '../../assets/images/nazad.svg';
import profile from '../../assets/images/profile.svg';
import glavnyi from '../../assets/images/glavnyi.svg';
import vhodyshie from '../../assets/images/vhodyshie.svg';
import opublicovannye from '../../assets/images/opublicovannye.svg';
import polzovateli from '../../assets/images/polzovatel.svg';
import trener from '../../assets/images/trenery.svg';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/images/Home.svg'

const Aside = () => {
    const menuItems = [
        { name: 'Главный', icon: glavnyi, path: '/' },
        { name: 'Входящие', icon: vhodyshie, path: '/admin/Inbox' },
        { name: 'Опубликованные', icon: opublicovannye, path: '/admin/Post' },
        { name: 'Пользователь', icon: polzovateli, path: '/' },
        { name: 'Тренеры', icon: trener, path: '/admin/Trenery' },
        { name: 'Профиль', icon: profile, path: '/admin/profile' }

    ];

    return (
        <div className="app-container">
            <aside className="sidebar">
                <nav className="menu">
                    <ul>
                        <img src={HomeIcon} alt="" className={'homeIcon'}/>
                        {menuItems.map(item => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) =>
                                        `menu-item ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <img src={item.icon} alt="" className="menu-icon"/>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <button className="logout-button">
                            <img src={nazad} alt=""/>
                            Выйти
                        </button>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Aside;
