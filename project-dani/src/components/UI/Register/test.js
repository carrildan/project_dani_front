import React, { useContext, useEffect, useState } from 'react';
import UserTable from '../UserTable/UserTable';
import { Button, Table } from 'react-bootstrap';
import { UserProvider } from '../../LOGIC/store/Provider/userProvider';

const Test = () => {
    const [showUsers, setShowUsers] = useState(false)
    return (
        <div>
            {/* toggle the rendering of the user table component */} 
            <Button variant="primary" className="btn" onClick={()=>setShowUsers(!showUsers)}>Users</Button>
            <Button variant="primary" className="btn">New</Button>
            {
               
                [
                    showUsers ?  <UserProvider><UserTable/></UserProvider> /* providing user data only to UserTable */
                
                    :

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    </Table>
                ]
            
            }
        </div>
    );
}

export default Test;
