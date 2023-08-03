/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { encryptStorage } from "../helpers/encrypt/storage";

axios.defaults.baseURL = 'https://techtest.folkatech.com';
axios.defaults.headers = {
  "Authorization": `Bearer ${localStorage.getItem("token")}`
};

export const useFetch = ({ startFetching, url, method, body = null }) => {
  const history = useNavigate();
  const [response, setResponse] = useState(undefined);
  const [headersResponse, setHeadersResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
    let isMounted = true;

    if (startFetching) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const result = await axios.request({
            url,
            method,
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: body,
            cancelToken: source.token,
          });
          setHeadersResponse(result.headers);
          setResponse(result.data);
        } catch (err) {
          if (err.response && err.response.status === 401) {
            history.push("/login");
          }
          isMounted && setError(err.response);
        } finally {
          isMounted && setLoading(false);
        }
      };

      isMounted && fetchData();
    }

    // cancel req when unmounted
    return () => {
      isMounted = false;
      source.cancel(`cancel req ${url}`);
    };
  }, [startFetching]);

  return { response, error, loading, headersResponse };
};
