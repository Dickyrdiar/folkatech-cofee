/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://techtest.folkatech.com;'
const headers = {
  "Authorization": `Bearer ${localStorage.getItem("token")}`
};

export const useFetchData = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.request({
          url,
          method,
          headers: { ...headers },
          data: body,
          cancelToken: source.token,
        });
        setResponse(result.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          window.location.assign("/login");
        }
        isMounted && setError(err.response);
      } finally {
        isMounted && setLoading(false);
      }
    };

    isMounted && fetchData();

    // cancel req when unmounted
    return () => {
      isMounted = false;
      source.cancel(`cancel req ${url}`);
    };
  }, []);

  return { response, error, loading };
};
