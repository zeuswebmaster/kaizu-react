import { ReactNode, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
