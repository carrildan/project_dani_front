import { useEffect, useState } from "react";
import {Table, Button, Form} from "react-bootstrap";
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

    const nameHandler=(e)=>{
        e.preventDefault()
        const userName = e.target.value
        setNewUser({...newUser,name:userName})
    }

    const emailHandler=(e)=>{
        e.preventDefault()
        const userEmail = e.target.value
        setNewUser({...newUser,mail:userEmail})
    }

    const phoneHandler=(e)=>{
        e.preventDefault()
        const userPhone = e.target.value
        setNewUser({...newUser,phone:userPhone})
    }

    const linkedinHandler=(e)=>{
        e.preventDefault()
        const userLinkedin = e.target.value
        setNewUser({...newUser,linkedin:userLinkedin})
    }

    const githubHandler=(e)=>{
        e.preventDefault()
        const userGithub = e.target.value
        setNewUser({...newUser,github:userGithub})
    }

    const addUsers=(users)=>{
        fetch(`http://localhost:3000/userBase/`, 
        { 
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(users)  
        })
        .then(response=>{
            if(response.ok){
                userHandler();
            }else{
                console.log("Error in adding new user");
            }
        })
    }

    const submitHandler=()=>{
        const users = {
            name: newUser.name,
            mail: newUser.mail,
            phone: newUser.phone,
            linkedin: newUser.linkedin,
            github: newUser.linkedin
        }
        console.log(users)
        addUsers(users);
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
                        data.map((user,id)=>{
                            return(
                                <tr key={id}>
                                    <td>{user.name}</td>
                                    <td>{user.mail}</td>
                                    <td>
                                        <Button variant="primary" onClick={()=>deleteHandler(user.id)}>Update</Button>
                                        <Button variant="danger" onClick={()=>deleteHandler(user.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </Table>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={newUser.name} onChange={(e)=>nameHandler(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={newUser.mail} onChange={(e)=>emailHandler(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" value={newUser.phone} onChange={(e)=>phoneHandler(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>LinkedIn email</Form.Label>
                    <Form.Control type="email" placeholder="Enter LinkedIn email" value={newUser.linkedin} onChange={(e)=>linkedinHandler(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Github email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Github email" value={newUser.github} onChange={(e)=>githubHandler(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitHandler}>
                    Submit
                </Button>
            </Form>
            {
                
            }
        </div>
        
    );
}

export default Register;