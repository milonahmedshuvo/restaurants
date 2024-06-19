// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    const axiosSecure = useAxiosSecure()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //    fetch('http://localhost:5000/menus')
    //    .then((res)=> res.json())
    //    .then((data)=>{
    //     setMenu(data)
    //     setLoading(false)
    //    })

    // }, [])

    // return [menu, loading]

    const {data: menu=[], isPending:loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menus')
            return res.data
        }
    })

    return [menu, loading, refetch ]
    
};

export default useMenu;
