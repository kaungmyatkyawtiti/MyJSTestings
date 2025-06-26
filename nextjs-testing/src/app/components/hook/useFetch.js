import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("effect run");
      setLoading(true);     // ⏳ Start spinner
      try {     // 🌐 Try to fetch data
        const resp = await fetch(url);
        const json = await resp.json();
        console.log("json ", json);
        setData(json);
      } catch (error) {     // ❌ If fetch fails, show an error
        console.log("todos fetch is failed ", error);
      } finally {     // ✅ Always stop the spinner
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [loading, data];
}
