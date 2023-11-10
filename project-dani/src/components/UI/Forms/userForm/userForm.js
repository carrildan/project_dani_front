import { useContext, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { UserFetchService } from "../../../LOGIC/Modules/services/userFetchService";

const UserForm = (props)=>{
    const [showModal, setShowModal] = useState(props.value); //receives true from UserTable.js to open the modal
    const [updatedUser, setUpdatedUser] = useState()
    
    //handle the async process when receives the user data, making sure the compon renders with the correct data
    useEffect(()=>{
        setUpdatedUser(props.user || {});
    }, [props.user])
  
    //handlers the update data of an user
    const updateHandler = async () =>{
        try{
            // Use the update method from UserFetchService to update the user
            await UserFetchService.update(updatedUser.id, updatedUser);

            // Close the modal when clicked save changes button
            props.onClose()
        } catch (error) {
            console.error("Error updating user:", error)
        }
    };


    return(
        <div>
            <Modal show={showModal} onHide={showModal}>
                <Modal.Header>
                    <Modal.Title>User Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" value={updatedUser?.id || " "} readOnly={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={updatedUser?.name} /* onChange={(e)=>nameHandler(e)} */ />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/*  value={newUser.mail} */ /* onChange={(e)=>emailHandler(e)} */ />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone" /* value={newUser.phone} */ /* onChange={(e)=>phoneHandler(e)} */ />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn email</Form.Label>
                            <Form.Control type="email" placeholder="Enter LinkedIn email" /* value={newUser.linkedin} */ /* onChange={(e)=>linkedinHandler(e)} */ />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Github email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Github email" /* value={newUser.github} */ /* onChange={(e)=>githubHandler(e)} */ />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" /* onClick={submitHandler} */>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{
                            //set modal off when click on close button
                            setShowModal(false);
                            props.onClose();
                        }}>Close
                    </Button>

                    <Button variant="primary" onClick={updateHandler}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default UserForm;