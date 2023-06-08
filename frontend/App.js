import * as React from 'react';
import TabsNavigation from './navigation/TabsNavigation';
import UserContext from './context/UserContext';

const App = () => {
    const user = {
        id: '123',
        name: 'John Doe',
        profile_url: 'https://picsum.photos/200',
        bio: 'I am a cool person',
        requirements: 'I am looking for a cool person',
        additional_info: 'I am a cool person',
        email: 'example@example.com',
        age: 21,
        dob: '01/01/2000',
        nationality: 'Singaporean',
        preferredLocation: 'London',
        gender: 'Male',
        smoker: 'No',
        hasPets: 'No',
        minBudget: 1000,
        maxBudget: 2000,
        primaryLanguage: 'English',
        contactNumber: '12345678',
      };

    return (
        <UserContext.Provider value={user}>
            <TabsNavigation />
        </UserContext.Provider>
    );
}

export default App;
