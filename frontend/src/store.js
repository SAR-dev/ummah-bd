import create from 'zustand';

const useStore = create(set => ({
  user: null,
  addUser: data => set(state => ({ user: data })),
  removeUser: () => set(state => ({ user: null })),
}));

export default useStore;