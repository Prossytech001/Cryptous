import React from 'react'
import Trackview from "../Track/Track"

const Treckview = () => {
  return (
    <div className='flex flex-col text-center  justify-center align-center text-[40px]'>
        <h1 className=''>Track All Market</h1>
        <div className=" flex justify-center align-center tracks h-[80vh] w-[]">
            <Trackview/>
        </div>
      
    </div>
  )
}

export default Treckview
