import './adminHeader.css';
import search from '../../assets/images/search.svg'
import adminHeaderProfile from '../../assets/images/adminHeaderProfile.jpg'
import cameraIcon from '../../assets/images/camera-icon.svg'

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

            <div className="AdminProfile">
                <div className="AdminProfile-image-wrapper">
                    <img src={adminHeaderProfile} alt="Profile" className="admin-profile-image"/>
                    <img src={cameraIcon} alt="Camera" className="camera-icon"/>
                </div>
                <div className="admin-profile-info">
                    <h2 className="admin-profile-name">Бекенова Сабина</h2>
                    <p className="admin-profile-location">Бишкек, Кыргызстан</p>
                </div>
            </div>

        </main>
    );
};

export default AdminHeader;
