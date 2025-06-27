import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUrls=()=>{

    const [urls, setUrls] = useState([]);
    const [refresh,setrefresh]=useState(false)
    
    useEffect(() => {
      axios.get("http://localhost:5000/shorturls/all").then(res => {
        setUrls(res.data.data);
      }).catch((error)=>console.log(error));
    }, [refresh]);
    
    return [urls,refresh,setrefresh]
}
