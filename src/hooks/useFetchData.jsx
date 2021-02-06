import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    function init() {
      setData([]);
      setError(false);
      setLoading(false)
    }

    const fetchData = async () => {
      init();
      setLoading(true); 
      try {
        const response = await axios.get(url);
        setData(response.data);
      } 
      catch(error) {
        setError(true);
        console.log(new Date(), error.message);
      }
      setLoading(false);
    } 
    fetchData();

  }, [url])

  return [data, loading, error];
}