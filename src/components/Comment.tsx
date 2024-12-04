import { format } from "timeago.js";
import Image from "./Image";

type PropsType = {
  comment: {
    id: number;
    desc: string;
    createdAt: Date;
    user: {
      username: string;
      img?: string;
    };
  };
  postId: number | string;
};
const Comment:React.FC<PropsType> = ({ comment, postId }) => {
  console.log(postId)
  const user = {
    username: "john",
    role: 'user'
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
        {user &&
          (comment.user.username === user.username || user?.role === "admin") && (
            <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer">
              delete
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
