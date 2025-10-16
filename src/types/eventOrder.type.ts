interface ICreateEventOrder {
  orderType: "direct" | "custom"; // Can be either 'direct' or 'custom'
  packageId?: string; // Only required for 'direct' orders
  location: string;
  time: string;
  date?: string; // Optional: Only required for 'direct' orders
  serviceProviderId?: string; // Optional: Only for 'custom' orders
  serviceType?: string; // Optional: Only for 'custom' orders
  budget_range?: string; // Optional: Only for 'custom' orders
  duration?: string; // Optional: Only for 'custom' orders
  streetAddress?: string; // Optional: Only for 'custom' orders
  town?: string; // Optional: Only for 'custom' orders
  country: string;
  isRegisterAsCompany?: boolean; // Optional: Only for 'custom' orders
  name?: string; // Optional: Only for 'custom' orders
  sureName?: string; // Optional: Only for 'custom' orders
  price?: number; // Optional: Only for 'custom' orders, and needed if company is involved
  deliveryDate?: string; // Optional: Only for 'custom' orders with a company
  companyName?: string; // Optional: Only for 'custom' orders with a company
  ICO?: string; // Optional: Only for 'custom' orders with a company
  DIC?: string; // Optional: Only for 'custom' orders with a company
  IC_DPH?: string; // Optional: Only for 'custom' orders with a company
  description?: string;
}

type OrderStatus =
  | "pending"
  | "declined"
  | "accepted"
  | "inProgress"
  | "deliveryRequest"
  | "delivered"
  | "cancelled";

interface IExtensionRequest {
  requestedBy: string; // Assuming this is a string (userId or name)
  newDeliveryDate: Date;
  reason: string;
  approved: boolean;
}

interface IStatusTimestamps {
  createdAt?: Date;
  acceptedAt?: Date;
  inProgressAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
}

interface IStatusHistory {
  status: OrderStatus;
  changedAt: Date;
}

interface IEventOrder {
  _id: string;
  orderId: string;
  userId: {
    _id: string;
    name: string;
    email: string;
    profileImage: string;
  }; // Assuming this is a user ID string
  serviceProviderId: {
    _id: string;
    name: string;
    email: string;
    profileImage: string;
  }; // Assuming this is a service provider ID string
  date: Date;
  orderType: "direct" | "custom"; // The type of the order
  serviceType: "photography" | "videography"; // Type of service
  location: string; // The location for the order
  time: string; // The time for the order
  price?: number; // Optional, price of the order
  priceWithServiceFee?: number; // Optional, price including service fee
  vatAmount?: number; // Optional, VAT amount
  totalPrice?: number; // Optional, total price of the order
  packageId?: {
    _id: string;
    title: string;
    price: string;
  }; // Optional, if order is related to a package
  packageName?: string; // Optional, name of the package
  deliveryDate?: Date; // Optional, expected delivery date
  lastDeliveryDate?: Date; // Optional, last delivery date
  budget_range?: string; // Optional, budget range for custom orders
  duration?: string; // Optional, duration for custom orders
  streetAddress?: string; // Optional, street address for custom orders
  town?: string; // Optional, town for custom orders
  country?: string; // Optional, country for custom orders
  isRegisterAsCompany?: boolean; // Optional, if registered as a company
  companyName?: string; // Optional, company name if registered as a company
  ICO?: string; // Optional, ICO for company
  DIC?: string; // Optional, DIC for company
  IC_DPH?: string; // Optional, IC_DPH for company
  name?: string; // Optional, name of the person making the order (if custom)
  sureName?: string; // Optional, surname of the person (if custom)
  status: OrderStatus; // The current status of the order
  declineReason?: string; // Optional, reason if declined
  cancelReason?: string; // Optional, reason if cancelled
  statusTimestamps: IStatusTimestamps; // Timestamps for different statuses
  statusHistory: IStatusHistory[]; // History of status changes
  extensionRequests: IExtensionRequest[]; // Any extension requests for the order
  description?: string; // Optional, a description of the order
  paymentStatus: string; // Status of the payment (e.g., "paid", "unpaid")
  isDeleted: boolean; // Whether the order is deleted
  createdAt: string;
  updatedAt: string;
}

export type { ICreateEventOrder, IEventOrder };
