import React from 'react'
import ClassificationListedProperty from '../ClassificationListedProperty/ClassificationListedProperty'
import VerificationRequest from '../VerificationRequest/VerificationRequest'

const RequestPropertyList = ({propertyList}) => {
  return (
    <div className='w-full flex flex-col gap-2 mt-4'>
        <ClassificationListedProperty />
        <VerificationRequest propertyList={propertyList} count={0}/>
    </div>
  )
}

export default RequestPropertyList
