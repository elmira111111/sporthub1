import './adminHeader.css';
import search from '../../assets/images/search.svg'
import adminHeaderProfile from '../../assets/images/adminHeaderProfile.jpg'

const AdminHeader = () => {
    return (
        <main className="main-content">
            <header className="headerProfile">
                <div className="search-wrapper">
                    <img src={search} alt="Search" className={'search1'}/>
                    <input
                        type="text"
                        className="search-input"
                    />
                    <button className="search-icon-btn">
                        <img src={search} alt="Search"/>
                    </button>
                </div>
                <div className="user-info">
                    <div className="user-text">
                        <div className="user-name">Бекенова <br/> Сабина</div>
                    </div>
                    <img
                        className="user-avatar"
                        src={adminHeaderProfile}
                        alt="User Avatar"
                    />
                </div>
            </header>
        </main>
    );
};

export default AdminHeader;
