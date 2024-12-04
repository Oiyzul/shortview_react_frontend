import Comment from "./Comment";

const Comments = ({ postId }: { postId: string | number }) => {
  const data = [
    {
      id: 1,
      user: {
        username: "John Doe",
        img: "shortView/userImg.jpeg",
      },
      createdAt: new Date("2022-01-01"),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque fugiat itaque quas esse sunt cupiditate possimus cumque asperiores, dolorem, dolores eligendi amet perferendis illum repellat nam quam.",
      img: "shortView/userImg.jpeg",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      desc: formData.get("desc"),
    };
  };


  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>

      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} />
      ))}
    </div>
  );
};

export default Comments;
