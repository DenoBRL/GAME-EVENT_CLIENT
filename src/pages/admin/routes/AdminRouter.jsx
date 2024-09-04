import { Routes, Route } from "react-router-dom";

import AdminLayout from '../../../pages/admin/routes/AdminLayout.jsx' 

import Dashboard from '../../../pages/admin/dashboard/Dashboard.jsx'

import Events from '../../../components/admin/events/Events.jsx'
import AddEvent from '../../../components/admin/events/AddEvent.jsx'
import EditEvent from '../../../components/admin/events/EditEvent.jsx'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="/events" element={<Events />} />
                <Route path="/events/add" element={<AddEvent />} />
                <Route path="/events/edit/:event" element={<EditEvent />} />

            </Route>
        </Routes>
    );
};

export default AdminRouter;