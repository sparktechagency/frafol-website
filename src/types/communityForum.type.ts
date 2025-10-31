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
  isLiked: boolean;
  totalViewers: number;
  totalComments: number;
}

interface IUser {
  _id: string;
  name: string;
  sureName: string;
  profileImage: string;
}

interface ICommunityComment {
  _id: string;
  user: IUser;
  text: string;
  isAnonymous: boolean;
  createdAt: string; // ISO date string
  replies: ICommunityComment[]; // recursive for replies
}

export type { ICommunityPost, ICommunityComment };
