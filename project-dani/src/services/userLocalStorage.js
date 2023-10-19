import { useEffect, useState } from "react";

const getUser=()=>{
    const [userData, setUserData] = useState({
        id: "",
        name: ""
    })

    fetch("http://localhost:3000/userBase")
        .then(response=>response.json())
        .then(data=>{
            setUserData({
                id: data.id,
                name: data.name
            })

            return [userData]
        })
}
export default getUser;