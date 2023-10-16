import { useEffect, useState } from "react";
import {Table, Button, Form, Modal} from "react-bootstrap";
import "./register.css";
import useGetUser from "../customHooks/useGetUser";
import useDeleteUser from "../customHooks/useDeleteUser";



function Register(){    
   const [getUserData] = useGetUser("http://localhost:3000/userBase/")
   const [data,setData] = useState(null);
   const [delData,setDelData] = useState(null)
   const [deleteUser] = useDeleteUser(delData) 
   const [newUser,setNewUser] = useState({
        id: 0,
        name: "",
        mail: "",
        phone: "",
        linkedin: "",
        github: "",
        users: []
   })
   const [useModal, setUseModal] = useState(false)
   
    /* get method */
    const userHandler=()=>{
        setData(getUserData)
    }

    /* delete method */
    const deleteHandler=(id)=>{
        deleteUser(id)   
    }

    /* post (create) method */
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
        if(newUser.id == 0){
            const users = {
                name: newUser.name,
                mail: newUser.mail,
                phone: newUser.phone,
                linkedin: newUser.linkedin,
                github: newUser.linkedin
            }
            console.log(users)
            addUsers(users);
        }else{
            const users = {
                id: newUser.id,
                name: newUser.name,
                mail: newUser.mail,
                phone: newUser.phone,
                linkedin: newUser.linkedin,
                github: newUser.linkedin
            }
            updateHandler(users);
        }
        
    }

    /* post (update) method */
    const retainUserHandler=(id)=>{
        fetch("http://localhost:3000/userBase/"+id, { method : "GET"})
            .then(response=> response.json())
            .then(data =>{
                setNewUser({
                    id: data.id,
                    name: data.name,
                    mail: data.mail,
                    phone: data.phone,
                    linkedin: data.linkedin,
                    github: data.github
                })
            })
    }

    const updateHandler=(newUser)=>{
        fetch("http://localhost:3000/userBase/"+newUser.id, {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(newUser)
        })
    }

    /* modal close function */
    const closeModal=()=>{
        setUseModal(false)
    }

    /* modal open function */
    const openModal=()=>{
        setUseModal(true)
    }

    
    return( 
        <div>
            <div className="button-group">
                <Button variant="primary" className="btn" onClick={openModal}>Add</Button>
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
                                        <Button variant="primary" onClick={()=>retainUserHandler(user.id)}>Update</Button>
                                        <Button variant="danger" onClick={()=>deleteHandler(user.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </Table>

            <Modal show={useModal} onHide={useModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" value={newUser.id} readOnly={true} />
                        </Form.Group>
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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={closeModal}>Save changes</Button>
                </Modal.Footer>
            </Modal>

           
        </div>
        
    );
}

export default Register;