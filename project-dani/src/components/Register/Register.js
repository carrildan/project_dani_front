import { useEffect, useState } from "react";
import {Table, Button} from "react-bootstrap";
import FetchUser from "../customHoolks/fetchUser";
import DeleteUser from "../customHoolks/deleteUser";

function Register(){    
    const [data,setData] = useState(null);

   
        useEffect(()=>{
            fetch("http://localhost:3000/userBase")
            .then((response)=>response.json())
            .then((data)=> setData(data))
        },2000)
      
    
    

    const deleteUser=(id)=>{
        fetch("http://localhost:3000/userBase/"+id, { method : "DELETE"})
        .then((response)=>{
            if(response.ok){
               
            }
        })
    }
                
    return( 
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    data &&
                    data.map((user)=>{
                        return(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.mail}</td>
                                <td>Update <Button variant="danger" onClick={()=>deleteUser(user.id)}>Delete</Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default Register;