import {Routes,Route} from 'react-router-dom';
import Login from '../pages/admin/Login';
import Home from '../pages/admin/Home';
import AddUser from '../pages/admin/AddUser';
import EditUser from '../pages/admin/EditUser';

function AdminRoutes(){
    return(
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edituser' element={<EditUser/>}/>
    </Routes>
    )
}

export default AdminRoutes;