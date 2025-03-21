import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full lg:w-[720px] xl:w-[1000px] mx-auto'>
      {children}
    </div>
  )
}

export default Container
