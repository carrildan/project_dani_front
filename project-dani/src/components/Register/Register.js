import { useEffect, useState } from "react";
import {Table, Button} from "react-bootstrap";
import "./register.css";


function Register(){    
    const [data,setData] = useState(null);
      
    const getUser=()=>{
        fetch("http://localhost:3000/userBase/")
        .then((response)=>response.json())
        .then((data)=> setData(data))
    }

    const deleteUser=(id)=>{
        fetch("http://localhost:3000/userBase/"+id, { method : "DELETE"})
        getUser();
    }
                
    return( 
        <div>
            <div className="button-group">
                <Button variant="primary" className="btn">Add</Button>
                <Button variant="primary" className="btn" onClick={()=>getUser()}>Users</Button>
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
                                    <td>Update <Button variant="danger" onClick={()=>deleteUser(user.id)}>Delete</Button></td>
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