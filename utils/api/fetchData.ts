import Authentication from './authentication';

/**
 * Obtains and returns the JSON from the specified endpoint.
 *
 * @param {string} endpoint - The endpoint to access in the API (e.g. 'articles')
 * @param {string} element - The element to obtain from the API (optional)
 * @returns {<T>} - The JSON reply
 */
const fetchData = async <T>(endpoint: string, element?: string): Promise<T> => {
  const authentication = Authentication.getInstance();
  const token = await authentication.getAuthToken();

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(
    `${process.env.BLOG_RESTAPI_URL}/api/v1/${endpoint}/${element ?? ''}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${endpoint}. Error code ${response.statusText}`
    );
  }

  const jsonData = await response.json();

  return jsonData;
};

export default fetchData;
