//this service module fetches the user crud operations
export const UserFetchService = {
  //return all user data
  GetAll: async ()=>{
   
      try {
        const response = await fetch("http://localhost:3000/userBase/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null; // Handle the error or return an appropriate value
      }
  },

  //return user data by id
  GetById: async (id)=>{
    try{
      const response = await fetch("http://localhost:3000/userBase/"+id, {
        method : "PUT",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(id)
      }
      );
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json();
      return data;

    } catch{
      console.error("Error fetching user data id:", error);
      return null; 
    }
  }
        
};
       /* GetbyId: */
   
    /* Update: */

    /* Post: */

    /* Delete */