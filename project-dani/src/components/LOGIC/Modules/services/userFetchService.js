//this service module fetches the user crud operations
export const UserFetchService = async () => {
        
        try {
          const response = await fetch("http://localhost:3000/userBase/");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          return data;
          
        } catch (error) {
          console.error("Error fetching data:", error);
          return null; // Handle the error or return an appropriate value
        }
};
      