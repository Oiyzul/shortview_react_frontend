import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>&#x2022;</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl xl:text-7xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="mt-8 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            et.
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
            // animate-spin animatedButton
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Share your story &#x2022;
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea &#x2022;
              </textPath>
            </text>
          </svg>
          <button className="absolute inset-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              width={50}
              height={50}
              stroke="white"
              strokeWidth={2}
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path d="M2 3C2 1.89543 2.89543 1 4 1H20C21.1046 1 22 1.89543 22 3V21C22 22.1046 21.1046 23 20 23H4C2.89543 23 2 22.1046 2 21V3Z" fill="#212121"/> */}
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      <MainCategories />
      <FeaturedPosts />
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;