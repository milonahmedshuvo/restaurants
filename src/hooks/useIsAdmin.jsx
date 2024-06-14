import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
      const {user} = useAuth()
      const axiosSecure = useAxiosSecure()



    const {data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isadmin"],
        queryFn: async () => {
            const res =await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data?.admin
        }
    }) 



    return [ isAdmin, isAdminLoading ]
};


export default useIsAdmin;