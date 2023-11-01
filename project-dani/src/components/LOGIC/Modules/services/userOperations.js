import { useEffect } from "react";
import  {UserFetchService}  from "./userFetchService";

//ths service module deal with user CRUD operations
const userOperations = {
    UserFetchService,
    getUser: () => {
        /* handle the async process of UserFetchService() */
        const fetchData = async () =>{
            const data = await UserFetchService();
            return [data]
            }
            fetchData();
    }
}

export default userOperations;