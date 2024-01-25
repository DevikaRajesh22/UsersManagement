import {Routes,Route} from 'react-router-dom';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';
import Home from '../pages/user/Home';
import Profile from '../pages/user/Profile';

function UserRoutes(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}

export default UserRoutes;