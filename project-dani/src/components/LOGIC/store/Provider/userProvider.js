import React, {useState, useEffect} from 'react';
import UserListContext from '../Context/userListContext.js'
import userOperations from '../../Modules/services/userOperations.js';


/* Provide the GetUser service dependency through context */
export function UserProvider({children}){
  const [user, setUser] = useState([])
  
  /* handle the async process of userOperations() */
  useEffect(()=>{
    const fetchData = async () =>{
      const data = await userOperations.UserFetchService();
      console.log(data)
      setUser(data)
    }
    fetchData();
  },[])
    


  return(
    <UserListContext.Provider value={user}>
        {children}
    </UserListContext.Provider>
  )
}


