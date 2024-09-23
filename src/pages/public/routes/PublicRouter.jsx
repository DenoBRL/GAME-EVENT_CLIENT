import { Routes, Route } from "react-router-dom";

import Home from '../../public/home/Home.jsx';
import Login from '../../public/login/Login.jsx';
import Register from '../../public/register/Register.jsx';
import PublicLayout from '../../public/routes/PublicLayout.jsx';
// import Blog from '../../pages/public/blog/Blog'
// import ShowGoodPlan from '../../pages/admin/goodplans/ShowGoodPlan';
// import ShowEvent from '../../../pages/public/events/ShowEvent.jsx';

// import Error from "../../assets/Error";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                {/* <Route path="/goodplans/show/:goodplanid" element={<ShowGoodPlan />} /> */}
                {/* <Route path="/event/:eventid" element={<ShowEvent />} /> */}

                {/* <Route path="*" element={<Error />} /> */}
            </Route>
        </Routes>
    );
};

export default PublicRouter;
