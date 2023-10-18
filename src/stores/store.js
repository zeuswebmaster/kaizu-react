import create from 'zustand';
import zukeeper from 'zukeeper';

export const useStore = create(zukeeper(set => ({
    helperText: { error: null, text: null },
    setHelperText: (text) => set({ helperText: text }),

    isSlideoutOpen: false,
    openSlideout: () => set({ isSlideoutOpen: true }),
    closeSlideout: () => set({ isSlideoutOpen: false }) 
})));

// Zustand debug...
window.store = useStore;
