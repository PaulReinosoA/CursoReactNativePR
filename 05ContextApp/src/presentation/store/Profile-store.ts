import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'paul',
  email: 'paulreinosoares463@gmail.com',
  changeProfile: (name: string, email: string) => {
    set({name: name, email: email});
    console.log(get().name);
  },
}));
