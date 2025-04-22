import './adminHeader.css';
import search from '../../assets/images/search.svg'

const AdminHeader = () => {
    return (
            <main className="main-content">
                <header className="headerProfile">
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
    );
};

export default AdminHeader;
