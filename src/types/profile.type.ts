interface IProfileId {
  bankName: string;
  accountNumber: string;
  routingNumber: string;
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
  introVideo: string;
  bannerImages: string[];
  profileId: IProfileId;
  name: string;
  sureName: string;
  companyName: string;
  email: string;
  profileImage: string;
  role: string;
  phone: string;
  switchRole: string;
  address: string;
  town: string;
  country: string;
  hourlyRate: number;
  maxHourlyRate: number;
  minHourlyRate: number;
  ico: string;
  dic: string;
  ic_dph?: string;
  rating: number;
  photographerSpecializations: string[];
  videographerSpecializations: string[];
  gallery: string[];
  unAvailability: string[];
  newsLetterSub: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type { IProfile };
