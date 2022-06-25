const fetcher = (url: string, options?: RequestInit) => fetch(url, options)
  .then((response) => response.json());

export default fetcher;
