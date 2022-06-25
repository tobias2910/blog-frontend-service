import { useEffect, useState, useRef } from 'react';

interface Response<T> {
  response: T | unknown
  error: boolean | undefined;
}

const useFetchAPI = <T> (init: RequestInit, url?: string): {
  isLoading: boolean,
  response: Response<T>
} => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<Response<T>>({ response: undefined, error: undefined });
  const componentUnmounted = useRef<boolean>(false);

  useEffect(() => {
    // No URL provided. Skip the process.
    if (!url) return;
    const fetchData = async () => {
      try {
        const result = await fetch(url, init);
        const data: T = await result.json();
        if (!componentUnmounted.current) {
          setResponse({
            response: data,
            error: false,
          });
        }
      } catch (error) {
        if (!componentUnmounted.current) {
          setResponse({
            response: error,
            error: true,
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line consistent-return
    return () => { componentUnmounted.current = true; };
  }, [url, init]);

  return { isLoading, response };
};

export default useFetchAPI;
