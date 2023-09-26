import React from 'react'

const Wraper = ({children, customStyle}: {children: React.ReactNode, customStyle?:string}) => {
  return (
    <div className={`max-w-[1900px] mx-[0.5rem] sm:mx-[1rem] md:mx-[1.56rem] lg:mx-[3.125rem] xl:mx-[3.5rem] big:mx-[4.5rem] bigXl:mx-auto ${customStyle}`}>
        {children}
    </div>
  )
}

export default Wraper