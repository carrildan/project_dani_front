import { useEffect, useState } from "react";
import {Table, Button} from "react-bootstrap";
import "./register.css";
import useGetUser from "../customHooks/useGetUser";
import useDeleteUser from "../customHooks/useDeleteUser";


function Register(){    
   const [getUserData] = useGetUser("http://localhost:3000/userBase/")
   const [data,setData] = useState(null);
   const [delData,setDelData] = useState(null)
   const [deleteUser] = useDeleteUser(delData) 
   
    const userHandler=()=>{
        setData(getUserData)
    }

    const deleteHandler=(id)=>{
        deleteUser(id)   
    }
    
    return( 
        <div>
            <div className="button-group">
                <Button variant="primary" className="btn">Add</Button>
                <Button variant="primary" className="btn" onClick={()=>userHandler()}>Users</Button>
            </div>
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
                                    <td>Update <Button variant="danger" onClick={()=>deleteHandler(user.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </Table>
        </div>
        
    );
}

export default Register;