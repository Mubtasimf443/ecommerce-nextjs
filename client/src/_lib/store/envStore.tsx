/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { create } from 'zustand'

interface StoreState {
    server_url :string;
}

const envStore = create<StoreState>((set) => ({
    server_url : "http://localhost:4000"
}))

export default envStore;