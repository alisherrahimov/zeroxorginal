import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const ApiFetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: url,
        method: method,
      });
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    ApiFetch();
  }, []);
  return { loading, data, error };
};
