import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/Login';
import Home from '../pages/admin/Home';
import AddUser from '../pages/admin/AddUser';
import EditUser from '../pages/admin/EditUser';
// import AdminLoggedOut from '../components/admin/adminLoggedOut';
// import AdminProtect from '../components/admin/adminProtect';

function AdminRoutes() {
    return (
        <Routes>
            {/* <Route path='' element={<AdminLoggedOut />}> */}
                <Route path='/login' element={<Login />} />
            {/* </Route> */}
            {/* <Route path='' element={<AdminProtect />}> */}
                <Route path='/' element={<Home />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/edituser/:id' element={<EditUser />} />
            {/* </Route> */}
        </Routes>
    )
}

export default AdminRoutes;