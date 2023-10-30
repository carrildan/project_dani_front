import React, { useState, useEffect, useContext } from 'react';
import  UserListContext  from "../../LOGIC/store/Context/userListContext";
import {Table, Button} from "react-bootstrap";

//this component render user list and its options (show,add new,update and delete)
const UserTable = () => {
    const user = useContext(UserListContext)
    
    return(
        <div>
            <div>List of Users</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th data-testid="name">Name</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user &&
                        user.map((users)=>{
                            return(
                                <tr key={users.id}>
                                    <td>{users.name}</td>
                                    <td>{users.mail}</td>
                                    <td>
                                        <Button variant="primary" /* onClick={()=>retainUserHandler(user.id)} */>Update</Button>
                                        <Button variant="danger" /* onClick={()=>deleteHandler(user.id)} */>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>  
        </div>
    )
}

  

export default UserTable;
