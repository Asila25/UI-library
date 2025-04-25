import React from 'react'
import { useSelector } from 'react-redux';
import { Users } from './app/index';

const App = () => {
    const store = useSelector((state) => state);
   return (
     <div>
       <Users />
     </div>
   );
}

export default App