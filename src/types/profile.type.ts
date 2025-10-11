interface IProfileId {
  _id: string;
  about: string;
  acceptTerms: boolean;
  ramcuvaAgree: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IProfile {
  _id: string;
  profileId: IProfileId;
  name: string;
  sureName: string;
  companyName: string;
  email: string;
  profileImage: string;
  role: string;
  switchRole: string;
  address: string;
  town: string;
  country: string;
  hourlyRate: number;
  ico: string;
  dic: string;
  ic_dph: string;
  rating: number;
  specializations: string[];
  newsLetterSub: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type { IProfile };
