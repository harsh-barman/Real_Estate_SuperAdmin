import React from 'react'
import EditFrame from './EditFrame/EditFrame'
import ManageSubscription from './ManageSubscription/ManageSubscription'
import { Icon } from '@iconify/react/dist/iconify.js'

const EditSubscriptionManagement = () => {

  const handleAddSubscription = () => {
    alert("Currently Under Development");
  }

  return (
    <div className='w-full flex flex-col gap-10 pb-14 relative'>
      <div className='w-fit flex text-[#FFFFFF] text-sm items-center absolute -top-7 right-0 gap-1 cursor-default' onClick={handleAddSubscription}>
        <Icon icon="ei:plus" width="24" height="24" className='text-[#FFFFFF]'/>
        <p>Add New Subscription</p>
      </div>
      <EditFrame />
      <ManageSubscription title={"Manage Subscription"}/>
    </div>
  )
}

export default EditSubscriptionManagement
