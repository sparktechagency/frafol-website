interface Author {
  _id: string;
  name: string;
  sureName: string;
  profileImage: string;
  role: string;
}

interface ICommunityPost {
  _id: string;
  authorId: Author;
  title: string;
  text: string;
  images: string[];
  isDeleted: boolean;
  approvalStatus: "approved" | "pending" | "rejected";
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
  totalLikes: number;
  totalViewers: number;
  totalComments: number;
}

export type { ICommunityPost };
