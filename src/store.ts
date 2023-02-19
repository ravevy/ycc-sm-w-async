import { create } from "zustand"
import axios from "axios"

export interface PostType {
  body: string,
  id: number,
  title: string,
}

export interface Store {
  loaded: boolean,
  loadedTrue: () => void,
  posts: PostType[],
  fetcher: (url: string) => any,
  addPost: () => void,
  input: {
    title: string,
    body: string,
    id: number,
  },
  setInput: (newInput : object) => any,
  clearInput: () => void,
  maxid: number,
  setMaxId: () => void,
  increaseMaxId: () => void
}

export const useStore = create<Store>((set) => ({
    loaded: false,
    loadedTrue: () => set({ loaded: true}),
    posts: [],
    fetcher: async (url: string) => {
      const response = await axios.get(url)
      set({ posts: await response.data})
    },
    addPost: () => set((state) => ({posts: [state.input, ...state.posts]})),
    input: {
      title: '',
      body: '',
      id: 0
    },
    setInput: (newInput) => set((state) => ({input: {...state.input, ...newInput, id: state.maxid}})),
    clearInput: () => set({input: { title: "", body: "", id: 0}}),
    maxid: 0,
    setMaxId: () => set((state) => ({maxid: state.posts[state.posts.length - 1]?.id + 1})),
    increaseMaxId: () => set((state) => ({ maxid: state.maxid + 1 }))
  })
)