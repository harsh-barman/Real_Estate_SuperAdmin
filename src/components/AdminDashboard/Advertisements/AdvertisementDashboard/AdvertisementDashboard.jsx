import React from 'react'
import AdvertisementHeader from '../AdvertisementHeader/AdvertisementHeader'
import PropertiesTable from '../PropertiesTable/PropertiesTable'
import Pagination from '../Pagination/Pagination'

const AdvertisementDashboard = () => {
    return (
        <div className='w-full'>
            <AdvertisementHeader title={"Advertisement Request"} viewApprove={true} />

            <PropertiesTable actionState={true} />

            <Pagination />
        </div>
    )
}

export default AdvertisementDashboard
