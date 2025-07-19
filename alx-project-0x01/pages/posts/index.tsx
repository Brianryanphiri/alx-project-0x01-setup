import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostProps[]>(posts);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    const postWithId = { ...newPost, id: postList.length + 1 };
    setPostList((prev) => [postWithId, ...prev]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow overflow-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => {
              setPost(null);
              setModalOpen(true);
            }}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {postList.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              key={key}
              title={title}
              body={body}
              userId={userId}
              id={id}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
          initialData={post}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
