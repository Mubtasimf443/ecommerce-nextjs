/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { create } from 'zustand';

interface Props {
    name: string;
    avaterImage: string;
    joinDate: string;
    email : string;
    setUser: (obj: object) => void;
}


const accountsStore = create<Props>((set) => ({
    name: "",
    avaterImage: "",
    joinDate: "",
    email : '',
    setUser(obj) {
        set((prev) => ({ ...prev, ...obj }))
    },
}))


export default accountsStore;