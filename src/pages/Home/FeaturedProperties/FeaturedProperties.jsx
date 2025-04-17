import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const featuredProperties = [
  { title: "Premium Listings", value: "+2000", image: "https://s3-alpha-sig.figma.com/img/7728/bc13/e20ff787955b6c63e481c0fe4659b050?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mPepLLwMffPvKcOwuUeytvBZgb~0jyoaYi0VtkMAhiJCWfJlJL9w-~Vau0gl~T-ltqE~g8sC1xLUJpds7FF2Ss-MzoOJmXyfcmIPq67pkhUMVP9Hc3oyrv8gxcMHHhtmiN1Btt9QzQ-a9813q~wmziIfl41kA1m0qu5a8-62e6GMCcCSDQfvgGP5MSD4UZavwZrvtXwtJ-RrGXMOLNoqQ4P2pPRlDuwubko10rKEtUt1~0JKMMj8XSVIMe1ijjTVTkUS5sZas~lW9sesZ4ABk-ACi9lvIEkNvlOm67s6JW70kk3KbsvX1RuyFGf3eayf9cPtNy21xUJohzX66hB4mw__", bgcolor: '#FEF2E6' },
  { title: "Luxury Apartments", value: "+1000", image: "https://s3-alpha-sig.figma.com/img/fdbe/bbae/31423894401ebd29de034590a2979d95?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r4VPIF9syqxBun1v~-zccRyTLhzrD2H1ORLCUjh2o5EtkDuTHhXbNCjLkipIue9Kpgmdo7xLiNEdIgI9GJUDuGVCRrWlTLZOeJ01shw84hnDlw4IsBX9LoQ8-nVIy8z7Fgm3uwfL2okWNR9JI0ksFjPQDyKXlVfW0iXLQWyrGHtY8YsQkO7HV2sQIhJ5H-bejGB9LUoTARjX6sAt1jyti10p7-YfuTCWr1OmaqxtnJcO4myS98-Nc0Q7WYUcuxUVKz1yFdoryKA8BsmUMLCfQAk8PCqyejkhoLC2QLKMxzKtPJag44xp88ues6lHrBcNRNyvEHhGH0rpFjSA623rRg__", bgcolor: '#E8F4FD' },
  { title: "Ready to Move", value: "+5000", image: "https://s3-alpha-sig.figma.com/img/81ec/47c4/285a3003b7d9e32c05c44b4fd94d74fd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IkgtBXXPF~~m-reSAyu4fVluQTGXMNHX0kLsL3ozduHly52FHRAATHYC0wOG-dWJEb1IuTx~PHSaSpljzEAOLeDETl3vDacH6tqx6wXxjG4ue-jmVqxmFroiTPG2589bDmIlgLkTOu4O0HbBqmrnvAgq8tXnoCjHQnsfRyhxQzymGUz9lH9qkq0y8HkVDiv-NSIX31qqQnDtx6oO0PuSmQofLxU73Frdm-x9j8KsHmgpXFgpLr~fqjQ65Uar5AmRTPUtO3V2X1clHB3oJSJiSg6osruz~86vShWiRKx6tkdIg7r94yVvrUVknB~4zRUg8BtgeoYa~Q~vBcOMFBYCDg__", bgcolor: '#EAF5EA' },
  { title: "Farm House", value: "+1000", image: "https://s3-alpha-sig.figma.com/img/0564/deb1/6ae450915fb03d2e11bfa9fa11aa12f1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pQPHIxROIsoL4z1CS37YytorozFuF00Gq6ytBIbw1nesnmtN4tQrO55plfJFmUdDVVXIQ-Drsv1Np0BepBA2ZRWom~Jdi5KLKrg42Q~ir9mwSDveu72MpynsaKWSDmwlXZeKL8m7de~Y5zX1NzlDGB9aGkVH2X-DQU1~M5rVTDHZsLvE0WW6WuqeKb9Em0rWwxF0jWQKutfsCBg66sYY~5j-BG2QWF1HLVd4SZgek3ZMYipXkkSIqCzpygTrBzyzyU~UvuWrr3kVEkpk-vA9CM4-sD9IOaUWQf8SQRq~KnX5P6uLONvuG7K9M6AUi1h-Msx2No0oJf3jR7lLqcOubQ__", bgcolor: '#FAEAEA' },
]

const FeaturedProperties = () => {
  return (
    <div className='flex w-full h-110 relative '>
      <div className='w-[50%] h-100 bg-[#E8EDF1] rounded-2xl pl-10 pt-4 absolute z-1 shadow-md'>
        <p className='text-[#00A58E] text-4xl font-bold'>Featured Properties</p>
      </div>

      <div className='w-full z-2 absolute top-18 pb-4'>
        <ul className='px-2 pb-10 w-full flex gap-10 overflow-x-scroll whitespace-nowrap no-scrollbar'>
          {
            featuredProperties.map((ele, index) => (
              <li key={index} style={{ backgroundColor: ele.bgcolor }} className="relative w-[28%] min-w-[320px] h-100 flex flex-col rounded-4xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] "
              >
                <div className='w-full h-1/5 mt-4 flex flex-col p-6 gap-2'>
                  <p className='text-[#004D41] text-lg font-bold'>{ele.title}</p>
                  <p className='text-[#697D95] text-sm font-semibold'>{ele.value}</p>
                </div>

                <div className='absolute w-22 h-8 bg-[#F1474A] right-0 justify-end items-center top-10 flex-end'>
                  <Icon icon="ion:caret-forward-sharp" style={{ color: ele.bgcolor }} className='absolute -ml-8 w-20 h-10 -mt-1' />
                  <p className='text-white text-center text-sm justify-center mt-1 ml-2'>New</p>
                </div>

                <div className='w-full h-4/5 overflow-hidden rounded-b-4xl flex items-stretch'>
                  <img src={ele.image} alt="image" className='self-end' />
                </div>
              </li>
            ))
          }
        </ul>
      </div>


    </div>
  )
}

export default FeaturedProperties
