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
  paymentStatus: string; // 'completed' or 'pending', etc.
  isDeleted: boolean;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  instructorPayment: WorkshopPayment;
}

export type { IWorkshop, IWorkshopParticipants };
