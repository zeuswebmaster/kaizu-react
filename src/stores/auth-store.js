import create from 'zustand';
import zukeeper from 'zukeeper';
import { supabase } from '../services/supabase'

if (process.env.NODE_ENV !== 'production') {
    console.log('authenticating...');
}

export const useAuthStore = create(zukeeper(set => ({
    isAuthenticated: false,
    user: 'authenticating', // we don't immediately know the user's status and will always attempt to authenticate

    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
    setUser: (user) => set({ user }),

    loadUser: async () => {
        const { data, error } = await supabase.auth.getSession();
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!error && !!data && data.session) {
            if (process.env.NODE_ENV !== 'production') {
                console.log('user has been authenticated...');
            }
            set({ user, isAuthenticated: true });
        } else {
            if (process.env.NODE_ENV !== 'production') {
                console.log('user cannot be authenticated...');
            }
            set({ user: null, isAuthenticated: false });
        }
    },

    logout: async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            set({ user: null, isAuthenticated: false });
            if (process.env.NODE_ENV !== 'production') {
                console.log('user authentication revoked...');
            }
        } else {
            if (process.env.NODE_ENV !== 'production') {
                console.log('whoops, supabase failed to revoke credentials!?');
            }
        }
    },
})));

// Zustand debug...
window.authStore = useAuthStore;
