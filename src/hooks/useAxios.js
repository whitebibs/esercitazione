import axios from "axios";
import { useEffect, useState } from "react";

const useAxios= (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const update = async() => {
        setLoading(true);
    try {
        const response= await axios.get(url);
        setData(response.data);
        setError(null)
        setLoading(false);
        
    } catch (error) {
        setError(error); 
        setData(null);
        setLoading(false); 
    }
    }

    const updateData = () => {
        update();
    }
    useEffect(()=>{
        update();
    },[url])
    return [data,error,loading, updateData]
}


export default useAxios;







