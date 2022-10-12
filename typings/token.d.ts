export interface Token {
  access_token: TokenData;
  refresh_token: TokenData;
}

export interface TokenData {
  token: string;
  expires: string;
}
