import React, {useState, useEffect} from 'react';
import UserListContext from '../Context/userListContext.js'
import { UserFetchService } from '../../Modules/services/userFetchService.js';

/* Provide the GetUser service dependency through context */
export function UserProvider({children}){
  const [user, setUser] = useState([])
  
  /* handle the async process of userFetchService */
  useEffect(()=>{
    const fetchData = async () =>{
      const data = await UserFetchService.GetAll();
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


