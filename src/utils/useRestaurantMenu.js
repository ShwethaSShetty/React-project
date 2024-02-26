import { useEffect, useState } from "react"
import { RES_INFO_URL } from "./constant";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu()
    },[])

    fetchMenu = async()=>{
        const data = await  fetch(RES_INFO_URL+resId);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;