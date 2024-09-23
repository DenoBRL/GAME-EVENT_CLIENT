import { Routes, Route } from "react-router-dom";

import UserLayout from '../../../pages/public/routes/UserLayout.jsx' 
import UserDashboard from '../../../pages/public/users/UserDashboard.jsx'
import ShowEvent from '../../../pages/public/events/ShowEvent.jsx';
import UserProfileCard from '../../../pages/public/users/UserProfileCard.jsx';
import UserAddressesCard from '../../../pages/public/users/UserAddressesCard.jsx';
import UserEventsCard from '../../../pages/public/users/UserEventsCard.jsx';
import UserCommentsCard from '../../../pages/public/users/UserCommentsCard.jsx';
import UserOpinionsCard from '../../../pages/public/users/UserOpinionsCard.jsx';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route index element={<UserDashboard />} />
                <Route path="/event/:eventid" element={<ShowEvent />} />
                <Route path="/compte" element={<UserProfileCard />} />
                <Route path="/adresses" element={<UserAddressesCard />} />
                <Route path="/evenements" element={<UserEventsCard />} />
                <Route path="/commentaires" element={<UserCommentsCard />} />
                <Route path="/avis" element={<UserOpinionsCard />} />

            </Route>
        </Routes>
    );
};

export default AdminRouter;