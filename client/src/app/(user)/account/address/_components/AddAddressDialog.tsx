/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"
import React, { FC, Fragment ,useState} from 'react'
import { Button } from '@/components/ui/shadcn/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/shadcn/dialog";

interface Props {

}

const AddAddressDialog: FC<Props> = ({ }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="px-4  py-2  text-white rounded-md  transition-colors">
                    Add New Address
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px] max-h-dvh overflow-y-scroll">
            </DialogContent>
        </Dialog>
    )
}

export default AddAddressDialog