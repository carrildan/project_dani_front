import { useEffect, useState } from "react";

function useDeleteUser(){
    const [data,setData] = useState("")
   // Accept the `id` parameter for deletion
    
    const deleteUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/userbase/${id}`, { method: "DELETE" });
          if (response.ok) {
            setData(`User with ID ${id} deleted successfully.`);
          } else {
            setData(`Failed to delete user with ID ${id}.`);
          }
      } catch (error) {
        console.error("Daniel, Error deleting user:", error);
        setData(`An error occurred while deleting user with ID ${id}.`);
      }
    };
    return [deleteUser, data];
}


export default useDeleteUser;