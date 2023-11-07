import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UserForm = (props)=>{
    //toggles the close button on the form
    const [showModal, setShowModal] = useState(props);
    console.log(showModal,"user form")

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
                            <Form.Control type="text" /* value={newUser.id} */ readOnly={true} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" /* value={newUser.name} */ /* onChange={(e)=>nameHandler(e)} */ />
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
                            //set modal off when click on close button. Also informs UserTable the form is closed, otherwise it would still sing as open 
                            setShowModal(false);
                            props.onClose();
                        }}>Close
                    </Button>

                    <Button variant="primary" /* onClick={closeModal} */>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default UserForm;