import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("effect run");
      setLoading(true);
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        console.log("json ", json);
        setData(json);
      } catch (error) {
        console.log("fetching is failed ", error);
      } finally {     // always stop the spinner
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return [loading, data];
}
