/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { Button } from "@/components/ui/shadcn/button"

interface Props {
    children: React.ReactNode; 
    onClick: () => void
}

const QuantityButton :FC<Props> = ({children,onClick}) => {
  return (
    <Fragment>
      <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
              onClick={onClick}
          >
              {children}
          </Button>
    </Fragment>
  )
}

export default QuantityButton