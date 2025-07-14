import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardLayout from "./components/dashboard/layouts/DashboardLayout";
import Layout from "./components/layout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Post from "./pages/dashboard/Post";
import PostLists from "./pages/dashboard/PostList";
import NotFound from "./pages/NotFound";

const About = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/About")), 2000)
    )
);
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const Posts = lazy(() => import("./pages/dashboard/Posts"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Locading....</div>}>
        <Routes>
          {/* Public Website Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
          </Route>
          
          {/* Dashboard Layout (Protected) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="posts" element={<Posts />}>
              <Route index element={<PostLists />} />
              <Route path="/dashboard/posts/:slug" element={<Post />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
