import { Outlet } from 'react-router-dom'
import AdminHeader from "./adminHeader/AdminHeader.jsx";
import Aside from "./adminLeft/Aside.jsx";
const LayoutAdmin = () => {
    return (
        <div style={{display: "flex"}}>
            <Aside/>
            <div>
                <AdminHeader />
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin