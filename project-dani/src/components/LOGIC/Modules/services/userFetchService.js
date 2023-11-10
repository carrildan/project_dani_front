import React,{ useState } from "react";

//this service module fetches the user crud operations
export const UserFetchService = async () =>{
  let data = [];

  try{
    const response = await fetch("http://localhost:3000/userBase");
    if(response.ok){
      const fetchUser = await response.json();
      data = fetchUser;
      
    } else {
      console.error("Error fetching all users:", response.status, response.statusText);
      return null;
    }
  } catch(error){
    console.error("Error fetching all users:", error);
    throw error;
  };

  //update an user
  const update = async (userId, updateUser) =>{
    try{
      const response = await fetch("http://localhost:3000/userBase"+userId,
        {
          method : "PUT",
          headers : {
            "Content-Type": "application/json",
          },
          body : JSON.stringify(updateUser),
        }
      );
      if(!response.ok){
        console.error("Error updating user:", response.status, response.statusText);
        return null;
      }
      //read users after update
      const updateResponse = await fetch("http://localhost:3000/userBase");
      if(updateResponse.ok){
        const updateUsers = await updateResponse.json();
        data = updateUsers;
      } else {
        console.error("Error fetching all users after update:", updateResponse.status, updateResponse.statusText);
        return null;
      }
    } catch(error){
      console.error("Error updating user:", error);
      throw error;
    }
  };

  return{data, update};
}