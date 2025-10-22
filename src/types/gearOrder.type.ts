interface Client {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface Seller {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
}

interface ShippingCompany {
  name: string;
  price: number;
}

interface GearMarketplace {
  _id: string;
  name: string;
  price: number;
  vatAmount: number;
  description: string;
  condition: string;
  gallery: string[];
  shippingCompany: ShippingCompany;
  approvalStatus: string;
  mainPrice: number;
  status: string;
}
interface PaymentId {
  _id: string;
  transactionId: string;
  paymentMethod: string;
}

interface IGearOrder {
  _id: string;
  orderId: string;
  clientId: Client;
  sellerId: Seller;
  gearMarketplaceId: GearMarketplace;
  paymentId: PaymentId;
  orderStatus: string;
  paymentStatus: string;
  name: string;
  shippingAddress: string;
  postCode: string;
  town: string;
  mobileNumber: string;
  email: string;
  loginAsCompany: boolean;
  ico: string;
  dic: string;
  ic_dph: string;
  companyAddress: string;
  deliveryNote: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type { IGearOrder };
