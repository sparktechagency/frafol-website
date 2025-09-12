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

export type { IProfessional };
