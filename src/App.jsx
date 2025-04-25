import React from 'react'
import { useSelector } from 'react-redux';
import User from './app/Users/users';

const App = () => {
    const store = useSelector((state) => state);
   return (
     <div>
       <User />
     </div>
   );
}

export default App