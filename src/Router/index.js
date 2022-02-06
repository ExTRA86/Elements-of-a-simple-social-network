import About from '../pages/About';
import Friends from '../pages/Friends';
import FriendsIdPage from '../pages/FriendsIdPage';
import Gallery from '../pages/Gallery';
import GalleryIdPage from '../pages/GalleryIdPage';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyProfile from '../pages/MyProfile';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/', element: <Main /> },
  { path: '/main', element: <Main /> },
  { path: '/login', element: <Login /> },
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/gallery/:id', element: <GalleryIdPage /> },
  { path: '/posts/:id', element: <PostIdPage /> },
  { path: '*', element: <Posts /> },
  { path: '/myProfile', element: <MyProfile /> },
  { path: '/friends', element: <Friends /> },
  { path: '/friends/:id', element: <FriendsIdPage /> },
];

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/', element: <Main /> },
  { path: '/main', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <Login /> },
];
