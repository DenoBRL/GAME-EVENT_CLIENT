import { Outlet } from 'react-router-dom';
import Dashboard from '../../../pages/admin/dashboard/Dashboard.jsx';
// import AdminHeader from '../../components/admin/AdminHeader';

const AdminLayout = () => {
    return (
        <div className='AdminLayout'>
            <Dashboard />
            <div id='admin'>
                {/* <AdminMenu /> */}
                <div id='admin_body'>
                    <Outlet />
                </div>
            </div>
            
        </div>
    );
};

export default AdminLayout;