import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getItem} from '../store/api/token/getToken';

export const useFetch = ({url, method}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const ApiFetch = async () => {
    const token = await getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      setLoading(true);
      const {data, status} = await axios({
        headers: headers,
        url: url,
        method: `${method}`,
      });
      if (status == 200) {
        setData(data);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    ApiFetch();
  }, [url, method]);
  return {loading, error, data};
};
