import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Pagination = () => {
    return (
        <div className='w-full mt-20 justify-between items-center flex'>
            <div className='w-fit rounded py-2 px-4 font-[600] border-2 border-[#EFEFEF]'>
                <p className='text-[#1A1D1F]'>1 of 2</p>
            </div>

            <div className='flex items-center text-[#6F767E]'>
                <Icon icon="fe:arrow-left" width="24" height="24" className='mr-2'/>
                <div className='w-fit py-2 px-4 border-2 border-[#EFEFEF]'>
                    <p className='text-[#1A1D1F] font-[600]'>1</p>
                </div>
                <div className='w-fit py-2 px-4 border-2 border-[#EFEFEF]'>
                    <p className='font-[600]'>2</p>
                </div>
                <div className='w-fit py-2 px-4 border-2 border-[#EFEFEF]'>
                    <p className='font-[600]'>3</p>
                </div>
                <div className='w-fit py-2 px-4 border-2 border-[#EFEFEF]'>
                    <p className='font-[600]'>4</p>
                </div>
                <div className='w-fit py-2 px-4 border-2 border-[#EFEFEF]'>
                    <p className='font-[600]'>5</p>
                </div>
                <Icon icon="fe:arrow-right" width="24" height="24" className='text-[#1A1D1F] ml-2'/>
            </div>
        </div>
    )
}

export default Pagination
