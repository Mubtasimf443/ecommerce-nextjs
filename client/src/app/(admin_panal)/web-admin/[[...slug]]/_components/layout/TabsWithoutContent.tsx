/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/shadcn/tabs';
import React, { FC, Fragment } from 'react';

type Tab = {
    title: string;
    value: string;
    badge ?: string | number
}

export type TabsType = Tab[]

interface Props {
    tabs: Tab[]
    defaultValue: string;
    onValueChange : (val : any) => void
};

const TabsWithoutContent: FC<Props> = (props) => {
    return (
        <Fragment>
            <Tabs defaultValue={props.defaultValue} onValueChange={props.onValueChange} className="w-full">
                <TabsList className="w-full md:w-auto mb-8 h-12 bg-gray-100/80">
                    {
                        props.tabs.map((tab, key) => {
                            return (
                                <TabsTrigger
                                    key={key}
                                    value={tab.value}
                                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex-1 md:flex-none px-8"
                                >
                                    {tab.title}
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
            </Tabs>
        </Fragment>
    )
};

export default TabsWithoutContent;