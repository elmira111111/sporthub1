import { Outlet } from 'react-router-dom'
import AdminHeader from "./adminHeader/AdminHeader.jsx";
import Aside from "./adminLeft/Aside.jsx";
const LayoutAdmin = () => {
    return (
        <div style={{display: "flex", width: '1440px', height: '964px', margin: '0 auto'}}>
            <Aside/>
            <div>
                <AdminHeader />
                <div style={{marginLeft: '-180px'}}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin