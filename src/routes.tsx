import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import Write from "./pages/Write";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/:slug", element: <SinglePostPage /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
]);

export default routes;
