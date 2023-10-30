import React, { useContext, useEffect, useState } from 'react';
import UserTable from '../UserTable/UserTable';
import { Button } from 'react-bootstrap';

const Test = () => {
    const [showUsers, setShowUsers] = useState(false)
    return (
        <div>
            <Button variant="primary" className="btn" onClick={()=>setShowUsers(!showUsers)}>Users</Button>
            <Button variant="primary" className="btn">New</Button>
            {
                [showUsers ? <UserTable/> : null]
            }
        </div>
    );
}

export default Test;
