import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";


const AdminRoutes = ({children}) => {
      const [isAdmin, isAdminLoading ] = useIsAdmin() 
      const location = useLocation()
      
      if(isAdminLoading){
        return <p>Loading...........</p>
      }

      if(isAdmin){
        return children
      }else{
        return <Navigate to='/login' state={ { from: location } } replace ></Navigate>
      }

};

export default AdminRoutes;