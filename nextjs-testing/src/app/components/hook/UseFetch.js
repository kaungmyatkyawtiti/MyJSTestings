import { useEffect, useState } from "react";

export default function UseFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // ⏳ Start spinner
      try { // 🌐 Try to fetch data
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const json = await resp.json();
        console.log("json ", json);
        setData(json);
      } catch (error) { // ❌ If fetch fails, show an error
        console.log("todos fetch is failed ", error);
      } finally { // ✅ Always stop the spinner
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [loading, data];
}
