import React, { useEffect, useState } from 'react'

const useBackGround = () => {
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
      const getCurrentTime = () => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
  
        if (currentHour >= 6 && currentHour < 18) {
          setIsLight(true);
        } else {
          setIsLight(false);
        }
      };
  
      getCurrentTime();
  
      const interval = setInterval(() => {
        getCurrentTime();
      }, 60000); // Update every minute
  
      return () => {
        clearInterval(interval);
      };
    }, []);  

  return isLight
}

export default useBackGround