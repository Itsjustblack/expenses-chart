import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [days, setDays] = useState(null);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setDays(data.map(a => a.day));
          setData(data.map(a => a.amount));
        });

       setIsPending(false);
      }, [url]);
  return { days, data, isPending }; 
}

export default useFetch;