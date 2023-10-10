export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  following: SimpleUser[];
  follower: SimpleUser[];
  bookmarks: string[];
};

export type ProfileUser = User & {
  following: number;
  follower: number;
};
