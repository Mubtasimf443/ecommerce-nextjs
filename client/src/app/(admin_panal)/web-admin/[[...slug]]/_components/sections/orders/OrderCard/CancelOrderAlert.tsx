/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';

interface Props {
    onCancelOrder: (val: any, selectedStatus: string) => void;
    orderId : any
};

const CancelOrderAlert: FC<Props> = ({ onCancelOrder, orderId }) => {
    return (
        <Fragment>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                        <XCircle className="w-4 h-4 mr-2" />
                        Cancel Order
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently cancel the order
                            and notify the customer.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>No, keep order</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => onCancelOrder(orderId, 'Order cancelled by admin')}
                        >
                            Yes, cancel order
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Fragment>
    )
};

export default CancelOrderAlert;