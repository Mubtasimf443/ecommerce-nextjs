/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { create } from "zustand";

interface Props {
    isDialogOpen: boolean;
    setIsDialogOpen : (val : boolean) => void;
}

const dialogStore = create<Props>((set) => ({
    isDialogOpen : false ,
    setIsDialogOpen(val) {
        set({isDialogOpen : val})
    },
}));


export default dialogStore;