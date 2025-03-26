/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { FC } from "react";

interface SectionHeadingProps {
    heading: string;
    subheading: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({heading, subheading}) => {
    return (
        <div className="mb-4 flex flex-col items-center justify-center pt-10 px-10">
            <h2 className=" text-2xl font-bold">{heading}</h2>
            {subheading && <p className="text-sm text-gray-600 mt-1">{subheading}</p>}
        </div>
    )
}

export default SectionHeading;
