import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <Link to={'/imregister'}>importRegister</Link>
            <Link to={'/admin'}>profile</Link>
        </div>
    );
};

export default HomePage;