import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const auth = false
    if(auth){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                    
};                        

export default ProtectedRoutes;