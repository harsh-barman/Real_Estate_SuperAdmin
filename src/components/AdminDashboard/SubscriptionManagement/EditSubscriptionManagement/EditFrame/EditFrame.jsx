import React from 'react'

const EditFrame = () => {


    const handleButton = () => {
        alert("Current Under Development");
    }

    return (
        <div className='bg-white w-full rounded-2xl px-10 py-6 flex flex-col gap-6'>
            <div className='w-full flex gap-12'>
                <div className='w-6/7  flex gap-8'>
                    <input type="text" className='w-2/6 border-1 border-[#D3D3D3]/[61%] text-l text-[#8391A1] px-6 py-3 rounded font-medium bg-[#F7F8F9]' placeholder='Basic Plan' />
                    <input type="text" className='w-2/6 border-1 border-[#D3D3D3]/[61%] text-l text-[#8391A1] px-6 py-3 rounded font-medium bg-[#F7F8F9]' placeholder='₹ 99' />
                    <div className='w-2/6 border-1 border-[#D3D3D3]/[61%] text-l text-[#8391A1] px-6 py-2 rounded font-medium bg-[#F7F8F9] flex gap-2'>
                        <input type="text" className='w-[80%] focus:outline-none' placeholder='#804706' />
                        <img src="/colorwheel.png" alt="color-wheel" className='w-8 h-8' />
                    </div>
                </div>
                <button className='w-1/7 border-1 border-[#D3D3D3]/[61%] text-l text-[#FFFFFF] px-6 py-2 rounded font-medium bg-[#00A58E]' onClick={handleButton}>Save</button>
            </div>
            <div className='w-full flex gap-12'>
                <input type="text" className='w-6/7 border-1 border-[#D3D3D3]/[61%] text-l text-[#8391A1] px-6 py-3 rounded font-medium bg-[#F7F8F9]' placeholder='Lorem ipsum dolor sit amet consectetur. Sit hendrerit felis a id magna elit faucibus sit egestas.' />
                <button className='w-1/7 border-1 border-[#D3D3D3]/[61%] text-l text-[#00A58E] px-6 py-3 rounded font-medium bg-[#CCEDE8]' onClick={handleButton}>Cancel</button>
            </div>
        </div>
    )
}

export default EditFrame
