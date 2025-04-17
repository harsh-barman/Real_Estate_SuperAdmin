import React from 'react'

const PropertyProfile = ({ propertyName }) => {

    const handleRejectProperty = () => {
        alert("Currently in Developement");
    }

    const handleVerifyProperty = () => {
        alert("Currently in Developement");
    }

    return (
        <div className='w-full flex items-center justify-end'>
            <div className='flex items-center w-[40%]'>
                <img src="/propertyImage.jpeg" alt="Propert Name" className='w-[20%] h-20 rounded-xl border-[#00A58E] border-b-2' />
                <h2 className="ml-8 text-2xl font-[500] cursor-default">{propertyName}</h2>
            </div>
            <div className='w-[60%] flex justify-end space-x-4'>
                <button className='py-1 px-10 text-l font-[500] rounded text-[#CE0E0E] bg-[#C60E0E36]' onClick={handleRejectProperty}>
                    Reject Property
                </button>
                <button className='py-1 px-10 text-l font-[500] rounded text-[#00A58E] bg-[#CCEDE8]'onClick={handleVerifyProperty}>
                    Mark As Verified
                </button>
            </div>
        </div>
    )
}

export default PropertyProfile
