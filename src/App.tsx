import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './layouts';
import RootRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RootRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
