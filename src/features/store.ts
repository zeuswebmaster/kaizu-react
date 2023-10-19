import create from 'zustand';
import zukeeper from 'zukeeper';

export const useStore = create(
  zukeeper(
    (set: (arg0: { helperText?: any; isSlideoutOpen?: boolean }) => any) => ({
      helperText: { error: null, text: null },
      setHelperText: (text: any) => set({ helperText: text }),

      isSlideoutOpen: false,
      openSlideout: () => set({ isSlideoutOpen: true }),
      closeSlideout: () => set({ isSlideoutOpen: false }),
    })
  )
);

// Zustand debug...
window.Storage = useStore;
