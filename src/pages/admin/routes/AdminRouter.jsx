import { Routes, Route } from "react-router-dom";

import AdminLayout from '../../../pages/admin/routes/AdminLayout.jsx' 

import Dashboard from '../../../pages/admin/dashboard/Dashboard.jsx'

import Events from '../../../pages/admin/events/Events.jsx'
import AddEvent from '../../../pages/admin/events/AddEvent.jsx'
import EditEvent from '../../../pages/admin/events/EditEvent.jsx'

import Users from '../../../pages/admin/users/Users';
import AddUser from '../../../pages/admin/users/AddUser.jsx';
import EditUser from '../../../pages/admin/users/EditUser';

import Addresses from '../../../pages/admin/addresses/Addresses.jsx';
import AddAddress from '../../../pages/admin/addresses/AddAddress.jsx';
import EditAddress from '../../../pages/admin/addresses/EditAddress.jsx';

import Games from '../../../pages/admin/games/Games.jsx';
import AddGame from '../../../pages/admin/games/AddGame.jsx';
import EditGame from '../../../pages/admin/games/EditGame.jsx';

import Categories from '../../../pages/admin/categories/Categories.jsx';
import AddCategory from '../../../pages/admin/categories/AddCategory.jsx';
import EditCategory from '../../../pages/admin/categories/EditCategory.jsx';

import Kinds from '../../../pages/admin/kinds/Kinds.jsx';
import AddKind from '../../../pages/admin/kinds/AddKind.jsx';
import EditKind from '../../../pages/admin/kinds/EditKind.jsx';

import Comments from '../../../pages/admin/comments/Comments.jsx';
// import AddComment from '../../../pages/admin/comments/AddComment.jsx';
// import EditComment from '../../../pages/admin/comments/EditComment.jsx';

import Opinions from '../../../pages/admin/opinions/Opinions.jsx';
// import AddOpinion from '../../../pages/admin/opinions/AddOpinion.jsx';
// import EditOpinion from '../../../pages/admin/opinions/EditOpinion.jsx';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="/events" element={<Events />} />
                <Route path="/events/add" element={<AddEvent />} />
                <Route path="events/edit/:event" element={<EditEvent />} />

                <Route path="/users" element={<Users />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="users/edit/:user" element={<EditUser />} />

                <Route path="/addresses" element={<Addresses />} />
                <Route path="/addresses/add" element={<AddAddress />} />
                <Route path="addresses/edit/:address" element={<EditAddress />} />

                <Route path="/games" element={<Games />} />
                <Route path="/games/add" element={<AddGame />} />
                <Route path="games/edit/:game" element={<EditGame />} />

                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/add" element={<AddCategory />} />
                <Route path="categories/edit/:category" element={<EditCategory />} />

                <Route path="/kinds" element={<Kinds />} />
                <Route path="/kinds/add" element={<AddKind />} />
                <Route path="kinds/edit/:kind" element={<EditKind />} />

                <Route path="/comments" element={<Comments />} />
                {/* <Route path="/comments/add" element={<AddComment />} /> */}
                {/* <Route path="comments/edit/:comment" element={<EditComment />} /> */}

                <Route path="/opinions" element={<Opinions />} />
                {/* <Route path="/opinions/add" element={<AddOpinion />} /> */}
                {/* <Route path="opinions/edit/:opinion" element={<EditOpinion />} /> */}

            </Route>
        </Routes>
    );
};

export default AdminRouter;