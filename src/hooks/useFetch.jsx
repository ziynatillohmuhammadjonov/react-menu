import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, category) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    try {
      const fetchApi = async () => {
        setIsPending(true);
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data.menu);
        setIsPending(false);
        if (category) {
          const newArr = data.menu.filter((item) => {
            return item.category === category;
          });
          setData(newArr);
        }
      };
      fetchApi();
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }, [url]);
  return { data, error, isPending };
}

export default useFetch;
