import { Token } from 'typings/token';

class Authentication {
  private static instance: Authentication;

  private token: Token | undefined;

  // Singleton pattern to ensure, all calling functions are
  // accessing the same token property.
  public static getInstance(): Authentication {
    if (!Authentication.instance) {
      Authentication.instance = new Authentication();
    }

    return Authentication.instance;
  }

  public async getAuthToken(): Promise<string> {
    if (
      !this.token ||
      new Date(this.token.access_token.expires) <= new Date()
    ) {
      const response = await fetch(
        `${process.env.BLOG_RESTAPI_URL}/api/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch auth token. Error code ${response.statusText}`
        );
      }

      this.token = await response.json();
    }

    return this.token!.access_token.token;
  }
}

export default Authentication;
