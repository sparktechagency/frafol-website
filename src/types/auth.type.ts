interface ISignInUser {
  userId: string;
  name: string;
  sureName: string;
  companyName: string;
  email: string;
  role: string;
  iat: number; // issued at (UNIX timestamp)
  exp: number; // expiration time (UNIX timestamp)
}

export type { ISignInUser };
