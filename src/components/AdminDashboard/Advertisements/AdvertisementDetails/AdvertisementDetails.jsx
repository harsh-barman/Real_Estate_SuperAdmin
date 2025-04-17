import React from 'react'
import AdvertisementHeader from '../AdvertisementHeader/AdvertisementHeader'
import PropertiesTable from '../PropertiesTable/PropertiesTable'
import Pagination from '../Pagination/Pagination'

const AdvertisementDetails = () => {
  return (
    <div className='w-full flex flex-col rounded bg-[#FFFFFF] '>
      <AdvertisementHeader backButton={true} title={"Approve Request Details"} viewApprove={false} />
      <PropertiesTable actionState={false}/>
      <Pagination />
    </div>
  )
}

export default AdvertisementDetails
