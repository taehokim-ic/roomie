import * as React from 'react';
import { useState, useEffect } from 'react';
import TabsNavigation from './navigation/TabsNavigation';
import UserContext from './context/UserContext';
import axios from 'axios';
import AppNavigation from './navigation/AppNavigation';

const App = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('http://roomie3.herokuapp.com/api/v1/profile/d274e899-53a6-4b25-8558-e28749032a4f');
            console.log(response.data);
            setUser(response.data);
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppNavigation />
        </UserContext.Provider>
    );
}

export default App;
