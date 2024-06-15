import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoutes = ({children}) => {
      const {user, loading} = useAuth() 
      const [isAdmin, isAdminLoading ] = useIsAdmin() 
      const location = useLocation()
      

      if( loading || isAdminLoading){
        return <p>Loading...........</p>
      }

      
      if( user && isAdmin){
        return children
      }else{
        return <Navigate to='/login' state={ { from: location } } replace ></Navigate>
      }

};

export default AdminRoutes;