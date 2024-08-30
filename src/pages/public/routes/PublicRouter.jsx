import { Routes, Route } from "react-router-dom";

import Home from '../../public/home/Home.jsx';
import Login from '../../public/login/Login.jsx';
import Register from '../../public/register/Register.jsx';
import PublicLayout from '../../public/routes/PublicLayout.jsx';
// import Blog from '../../pages/public/blog/Blog'
// import ShowGoodPlan from '../../pages/admin/goodplans/ShowGoodPlan';
// import ShowArticle from '../../pages/admin/articles/ShowArticle';
// import ShowUserProfile from '../../pages/admin/users/ShowUserProfile';

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
                {/* <Route path="/articles/show/:articleid" element={<ShowArticle />} /> */}
                {/* <Route path="/users/show/:userid" element={<ShowUserProfile />} /> */}

                {/* <Route path="*" element={<Error />} /> */}
            </Route>
        </Routes>
    );
};

export default PublicRouter;
