import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRouter from "./pages/public/routes/PublicRouter.jsx";
import AdminRouter from "./pages/admin/routes/AdminRouter.jsx";
// import Login from "./pages/public/Login";
// import AuthGuard from "./components/admin/AuthGuard";


// const token = localStorage.getItem("access_token");
// console.log(token);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/admin/*" element={
          // <AuthGuard>
            <AdminRouter/>
          // </AuthGuard>
      } />
      {/* <Route path="/admin/*" element={token ? <AdminRouter/> : <Login/> } /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
