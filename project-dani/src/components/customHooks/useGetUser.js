import { useEffect, useState } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function useGetUser(url){
    const [data,setData] = useState([])
    const [name,setName] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(url)

                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                const responseData = await response.json();
                setData(responseData);
                console.log(responseData[0].name)
                setName(responseData[0].name)
            }catch(error){
                console.log("Error fetching user data:", error)
            }
        }
        fetchData();
    },[])
    return [data,name];
    
}


export default useGetUser;