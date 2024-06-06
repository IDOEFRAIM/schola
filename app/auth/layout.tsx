import React from 'react'
import Header from './headerAuth';
import Footer from './footer'
type Props = {
    children:React.ReactNode
}

const layout = (
    {children}:Props
) => {
  return (
    <div className='flex flex-col max-w-lg mx-auto'>
        <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default layout
