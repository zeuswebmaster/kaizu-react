import { create } from 'zustand';
import { supabase } from '..';
import { UserResponse } from '../../types/auth';

interface AuthInitialProps {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  isAuthenticated: boolean;
  user: UserResponse | null;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: UserResponse) => void;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthInitialProps>((set) => ({
  isAuthenticated: false,
  user: null,
  accessToken: null,
  setAccessToken: (token: string) => set({ accessToken: token }),
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
  setUser: (user: UserResponse) => set({ user }),
  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) set({ user: null, isAuthenticated: false });
    window.localStorage.clear();
    window.location.replace('/sign-in');
  },
}));

export default useAuthStore;
