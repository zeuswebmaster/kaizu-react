import { React, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useAuthStore } from './stores/auth-store';
import GuestRoutes from './routes/GuestRoutes';
import MemberRoutes from './routes/MemberRoutes';
import styles from './styles/global.module.scss';

const App = () => {

  const { user, loadUser, isAuthenticated } = useAuthStore();

  // AUTHENTICATE USER
  useEffect(() => {
    loadUser();
  }, [loadUser, isAuthenticated]);

  // LOADING
  if (user === 'authenticating') {
    return (
      <div className={styles.App}>
        <main>
          <div className={styles.loading}>
            <h1>Loading...</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <main>
          {isAuthenticated ? (
            <MemberRoutes/>
          ) : (
            <GuestRoutes/>
          )}
        </main>
      </div>
    </BrowserRouter>
  );

}

export default App;
