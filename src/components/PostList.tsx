import PostListItem from "./PostListItem";

const PostList = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "post1",
      img: "shortView/postImg.jpeg",
      createdAt: "2024-5-01",
      category: "web-development",
      user: {
        username: "john",
      },
    },
    {
      id: 2,
      title: "Post 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      slug: "post2",
      img: "shortView/postImg2.jpeg",
      createdAt: "2024-6-01",
      category: "web-development",
      user: {
        username: "jane",
      },
    },
    {
      id: 3,
      title: "Post 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      slug: "post3",
      img: "shortView/postImg3.jpeg",
      category: "web-development",
      createdAt: "2024-7-01",
      user: {
        username: "bill",
      },
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <PostListItem {...post} />
      ))}
    </div>
  )
};

export default PostList;
