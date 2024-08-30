import { Routes, Route } from "react-router-dom";

import AdminLayout from '../../../pages/admin/routes/AdminLayout.jsx' 
import Dashboard from '../../../pages/admin/dashboard/Dashboard.jsx'

// import Error from '../../assets/Error';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />


                {/* <Route path="*" element={<Error />} /> */}
            </Route>
        </Routes>
    );
};

export default AdminRouter;