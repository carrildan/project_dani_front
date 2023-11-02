import React, { useState, useEffect, useContext } from 'react';
import  UserListContext  from "../../LOGIC/store/Context/userListContext";
import {Table, Button} from "react-bootstrap";
import UserForm from '../Forms/userForm/userForm';

//this component render user list and its options (show,add new,update and delete)
const UserTable = () => {
    /* this state handles the show/hide of the user modal */
    const [showForm, setShowForm] = useState(false)
    const user = useContext(UserListContext)

    /* this method toggles the modal */
    const UpdateHandler=(id)=>{
        setShowForm(!showForm)
    }

    return(
        <div>
            
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
                        user &&
                        user.map((users)=>{
                            return(
                                <tr key={users.id}>
                                    <td data-testid="name">{users.name}</td>
                                    <td>{users.mail}</td>
                                    <td>
                                        <Button variant="primary" onClick={()=>UpdateHandler(users.id)}>Update</Button>
                                        <Button variant="danger" /* onClick={()=>deleteHandler(user.id)} */>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>  
            {
                /* when user clicks on CLOSE button inside userForm.js, props sets false to UserTable.js too */
                [ showForm ? <UserForm value={showForm} onClose={()=>setShowForm(false)} /> : null ] 
            }
        </div>
    )
}

  
export default UserTable;
