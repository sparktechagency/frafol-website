interface Author {
  _id: string;
  name: string;
  sureName: string;
}

interface IPackage {
  _id: string;
  authorId: Author;
  title: string;
  description: string;
  price: number;
  category: string;
  vatAmount: number;
  duration: number;
  approvalStatus: string;
  isDeleted: boolean;
  thumbnailImage: string;
  createdAt: string;
  updatedAt: string;
}

export type { IPackage };
