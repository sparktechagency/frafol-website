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

export type { ICreateEventOrder };
