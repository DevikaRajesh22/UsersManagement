import {Routes,Route} from 'react-router-dom';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';
import Home from '../pages/user/Home';
import Profile from '../pages/user/Profile';
import EditProfile from '../pages/user/EditProfile';
// import UserLoggedOut from '../components/error/error';
// import UserProtect from '../components/user/userProtect';

function UserRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/editProfile' element={<EditProfile/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}

export default UserRoutes;