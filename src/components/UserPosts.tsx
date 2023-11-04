"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";

type UserPostsProps = {
  user: ProfileUser;
};

const tabs = [
  { type: "posts", icons: <PostIcon /> },
  { type: "saved", icons: <BookmarkIcon className="w-3 h-3" /> },
  { type: "liked", icons: <HeartIcon className="w-3 h-3" /> },
];

export default function UserPosts({ user: { username } }: UserPostsProps) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icons }) => (
          <li
            className={`mx-12 p-4 cursor-pointer border-black ${
              type === query && "font-bold border-top"
            }`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className="scale-150 md:scale-100">{icons}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}