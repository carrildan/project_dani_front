import React, { useState } from 'react';
import {getUser} from "../../../services/userLocalStorage"

const UserListContext = React.createContext({
        id: getUser.id,
        name: getUser.name
    })

export default UserListContext;
