import { get } from 'api';
import { useEffect, useState } from 'react';

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useLoading = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await sleep(1000);

      setState({
        loading: false,
        data: await get(url),
      });
    };

    fetchData();
  }, [url]);

  return [state];
};

export default useLoading;
