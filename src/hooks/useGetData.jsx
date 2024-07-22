import { useState } from "react"

const useGetData=({feedUrl})=>{
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const [data,setData]=useState();

    const getData = async(feedUrl) =>{
        setIsLoading(true);

        //fetching the News
        await fetch(feedUrl)
        .then((response)=>{
            setError(null);
            setData(data.json());
        })
        .catch((error)=>setError(error))
        .finally(setIsLoading(false));
    } 


    return {error,isLoading,data,getData};
}