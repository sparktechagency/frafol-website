import { IPackage } from "./package.type";

interface IProfileId {
  _id: string;
  about: string;
}

interface IStarCounts {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
}

interface IProfessionalUser {
  _id: string;
  profileId: IProfileId;
  name: string;
  sureName: string;
  profileImage: string;
  role: string;
  address: string;
  hourlyRate: number;
  totalReview: number;
  totalReviews: number;
  averageRating: number;
  starCounts: IStarCounts;
  package: IPackage[];
  gallery: string[]; // You can specify a more specific type for gallery if needed
}

interface IProfessional {
  _id: string; // MongoDB ObjectId or string
  name: string;
  sureName: string;
  profileImage: string;
  role: string;
  address: string;
  town: string;
  country: string;
  hourlyRate: number;
  averageRating: number;
  totalReview: number;
}

export type { IProfessional, IProfessionalUser };
