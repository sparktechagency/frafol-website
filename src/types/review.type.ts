interface IUser {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface IReview {
  _id: string;
  userId: IUser;
  serviceProviderId: string;
  rating: number;
  message: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export type { IReview };
