import GridSpinner from "./ui/icons/GridSpinner";
import PostGridCard from "./PostGridCard";
import usePosts from "@/hooks/usePosts";
import { useCacheKeys } from "./context/CacheKeysContext";

export default function PostGrid() {
  const cacheKeys = useCacheKeys();
  const { posts, isLoading } = usePosts(cacheKeys.postsKey);

  return (
    <div className="w-full text-center">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
