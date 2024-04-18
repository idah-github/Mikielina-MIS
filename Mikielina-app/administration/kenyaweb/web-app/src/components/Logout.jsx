// import { useState } from 'react';

function Logout() {
    const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout', { method: 'POST' });
  
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  }
  export default Logout;