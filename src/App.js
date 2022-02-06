import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext, GalleryContext } from './context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        showButton,
        setShowButton,
      }}
    >
      <GalleryContext.Provider
        value={{
          picture,
          setPicture,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </GalleryContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
