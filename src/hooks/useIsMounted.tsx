import { useState, useEffect } from 'react';


const useIsMounted  =() => {
  const [isMounded, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
    return () => setIsMounted(false); // Cleanup when the component unmounts
  },[])

  return isMounded
}

export default useIsMounted