interface Author {
  _id: string;
  name: string;
  sureName: string;
  profileImage: string;
  role: string;
}

interface IWorkshop {
  vatAmount: number;
  _id: string;
  authorId: Author;
  title: string;
  date: string;
  time: string;
  locationType: string;
  location: string;
  workshopLink: string;
  price: number;
  mainPrice: number;
  description: string;
  image: string;
  maxParticipant: number;
  totalParticipants: number;
  approvalStatus: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Client {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface WorkshopPayment {
  status: string; // 'pending' | 'completed' (You can define these as a union type if you prefer)
  amount: number;
  paidAt: string | null;
}

interface IWorkshopParticipants {
  _id: string;
  orderId: string;
  clientId: Client;
  instructorId: string;
  workshopId: string;
  paymentStatus: "pending" | "completed";
  streetAddress: string;
  town: string;
  country: string;
  isRegisterAsCompany: boolean;
  IC_DPH: string;
  name: string;
  isDeleted: boolean;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  instructorPayment: WorkshopPayment;
}

interface Author {
  _id: string;
  name: string;
  sureName: string;
  profileImage: string;
  role: string; // 'both' or any other role
}

interface InstructorPayment {
  status: string; // 'pending' | 'completed'
  amount: number;
  paidAt: string | null;
}

interface IMyRegisteredWorkshop {
  _id: string;
  orderId: string;
  clientId: string; // Client ID as a string
  instructorId: string;
  workshopId: string; // Can be either string or full workshop object
  paymentStatus: string; // 'completed' | 'pending'
  isDeleted: boolean;
  joinedAt: string; // ISO format date string
  createdAt: string; // ISO format date string
  updatedAt: string; // ISO format date string
  instructorPayment: InstructorPayment;
  workshop: IWorkshop; // Nested workshop object
}

export type { IWorkshop, IWorkshopParticipants, IMyRegisteredWorkshop };
