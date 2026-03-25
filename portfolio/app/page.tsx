import Hello from '@/components/Hello'
import React from 'react'

const Page = () => {

  console.log("Page");
  return (
    <main>
      <div className='text-5xl underline'>
        <Hello />
      </div>
    </main>
  )
}

export default Page

