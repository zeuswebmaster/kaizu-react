import { create } from 'zustand';
import { supabase } from '..';
import { UserResponse } from '../../types/auth';

interface AuthInitialProps {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  isAuthenticated: boolean;
  user: UserResponse | null;
  setIsAuthenticated: (value: boolean) => void;
  loadUser: () => Promise<void>;
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
  loadUser: async () => {
    const {
      data: { session },
      error: errorSession,
    } = await supabase.auth.getSession();

    if (!errorSession && session) {
      set({ user: session?.user as UserResponse, isAuthenticated: true, accessToken: session?.access_token });
    } else {
      const { error: errorLogout } = await supabase.auth.signOut();

      if (!errorLogout) {
        set({ user: null, isAuthenticated: false, accessToken: null });
        window.localStorage.clear();
        window.location.replace('/sign-in');
      }
    }
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      set({ user: null, isAuthenticated: false, accessToken: null });
      window.localStorage.clear();
      window.location.replace('/sign-in');
    }
  },
}));

export default useAuthStore;
