/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import ImageGallery from 'react-image-gallery'



interface IGalleryImages {
    original : string;
    thumbnail : string;
    originalAlt ?: string;
    thumbnailAlt ?: string;
}
interface Props {
    images : IGalleryImages[];
    setCurrentImageIndex : (index : any) => void
}

const LeftProductColumn: FC<Props> = ({images,setCurrentImageIndex}) => {
    return (
        <Fragment>
            <div className="sticky top-24">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        showNav={false}
                        thumbnailPosition="bottom"
                        onSlide={(index) => setCurrentImageIndex(index)}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default LeftProductColumn

