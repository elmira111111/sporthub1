import { Outlet } from 'react-router-dom'
import AdminHeader from "./adminHeader/AdminHeader.jsx";
import Aside from "./adminLeft/Aside.jsx";
const LayoutAdmin = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet/>
            <Aside/>
        </div>
    )
}

export default LayoutAdmin